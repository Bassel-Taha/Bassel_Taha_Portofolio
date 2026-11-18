const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const navLinks = [...navigation.querySelectorAll('a')];

function setMenu(open) {
  navigation.toggleAttribute('data-open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

header.dataset.enhanced = '';
menu.hidden = false;
menu.addEventListener('click', () => {
  const open = !navigation.hasAttribute('data-open');
  setMenu(open);
  if (open) navLinks[0].focus();
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !navigation.hasAttribute('data-open')) return;
  const section = document.getElementById(link.hash.slice(1));
  setMenu(false);
  section?.focus({ preventScroll: true });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || !navigation.hasAttribute('data-open')) return;
  setMenu(false);
  menu.focus();
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) setMenu(false);
});
header.addEventListener('focusout', event => {
  if (!header.contains(event.relatedTarget)) setMenu(false);
});
window.matchMedia('(max-width: 690px)').addEventListener('change', () => setMenu(false));

const sections = navLinks.map(link => ({
  link,
  section: document.getElementById(link.hash.slice(1)),
}));
let navFrame = 0;

function updateActiveSection() {
  navFrame = 0;
  const active = sections.findLast(({ section }) => section.getBoundingClientRect().top <= header.offsetHeight + 65);
  sections.forEach(item => {
    if (item === active) item.link.setAttribute('aria-current', 'location');
    else item.link.removeAttribute('aria-current');
  });
}

function queueSectionUpdate() {
  if (!navFrame) navFrame = requestAnimationFrame(updateActiveSection);
}

window.addEventListener('scroll', queueSectionUpdate, { passive: true });
window.addEventListener('resize', queueSectionUpdate);
updateActiveSection();

const gallery = document.getElementById('project-grid');
const cards = [...gallery.querySelectorAll('.project-card')].map(element => ({
  element,
  link: element.querySelector('h3 a'),
  categories: element.dataset.categories.split(' '),
  searchable: `${element.textContent} ${element.dataset.search}`.toLowerCase().replace(/\s+/g, ' '),
}));
const search = document.querySelector('.project-search input');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const emptyState = document.querySelector('.empty-state');
const status = document.getElementById('project-status');
const more = document.querySelector('[data-more-projects]');
const limit = 6;
const initial = new URLSearchParams(location.search);
let category = filterButtons.some(button => button.dataset.filter === initial.get('category')) ? initial.get('category') : 'all';
let expanded = initial.get('view') === 'all';
search.value = initial.get('q') || '';

function renderProjects() {
  const query = search.value.trim();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = cards.filter(card =>
    (category === 'all' || card.categories.includes(category)) &&
    terms.every(term => card.searchable.includes(term))
  );
  const browsing = !terms.length && category === 'all';
  const visible = new Set(browsing && !expanded ? matches.slice(0, limit) : matches);

  cards.forEach(card => { card.element.hidden = !visible.has(card); });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  emptyState.hidden = visible.size > 0;
  more.parentElement.hidden = !browsing || matches.length <= limit;
  more.setAttribute('aria-expanded', String(expanded));
  more.firstChild.nodeValue = expanded ? 'Show featured projects ' : `View all ${cards.length} projects `;
  status.textContent = visible.size === matches.length
    ? `${visible.size} ${visible.size === 1 ? 'project' : 'projects'} shown.`
    : `Showing ${visible.size} of ${matches.length} projects.`;

  const state = new URLSearchParams();
  if (category !== 'all') state.set('category', category);
  if (query) state.set('q', query);
  if (expanded) state.set('view', 'all');

  const url = new URL(location.href);
  ['category', 'q', 'view'].forEach(key => url.searchParams.delete(key));
  state.forEach((value, key) => url.searchParams.set(key, value));

  if (url.href !== location.href) {
    try {
      history.replaceState(null, '', url);
    } catch {
      // URL state is optional for local or restricted previews.
    }
  }

  cards.forEach(({ link }) => {
    const detail = new URL(link.href);
    ['category', 'q', 'view'].forEach(key => detail.searchParams.delete(key));
    state.forEach((value, key) => detail.searchParams.set(key, value));
    link.href = detail;
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    category = button.dataset.filter;
    renderProjects();
  });
});
search.addEventListener('input', renderProjects);
document.querySelector('[data-reset-projects]').addEventListener('click', () => {
  category = 'all';
  search.value = '';
  renderProjects();
  search.focus();
});
more.addEventListener('click', () => {
  expanded = !expanded;
  renderProjects();
  if (expanded) cards[limit]?.link.focus();
  else document.getElementById('projects').focus();
});
document.querySelector('.project-controls').hidden = false;
renderProjects();

const copy = document.querySelector('[data-copy-email]');
if (navigator.clipboard?.writeText) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const feedback = document.querySelector('.copy-status');

    try {
      await navigator.clipboard.writeText(copy.dataset.copyEmail);
      feedback.textContent = 'Email copied.';
    } catch {
      feedback.textContent = 'Select the email address to copy it.';
    }
  });
}
