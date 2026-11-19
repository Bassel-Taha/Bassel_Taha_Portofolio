const params = new URLSearchParams(location.search);
const id = params.get('id');
const entries = typeof projectsData === 'undefined' ? {} : projectsData;
const project = Object.hasOwn(entries, id) ? entries[id] : null;
const state = new URLSearchParams();

['category', 'q', 'view'].forEach(key => {
  if (params.has(key)) state.set(key, params.get(key));
});

if (state.size) document.querySelector('.case-back').href = `./?${state}#projects`;

function renderWorkflow(workflow) {
  const section = document.getElementById('case-workflow');
  document.getElementById('workflow-title').textContent = workflow.title;
  const tabs = document.createElement('div');
  tabs.className = 'case-pipeline';
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-labelledby', 'workflow-title');
  const panels = document.createDocumentFragment();
  const items = workflow.steps.map((step, index) => {
    const tab = document.createElement('button');
    const panel = document.createElement('div');
    const number = document.createElement('span');
    const heading = document.createElement('h3');
    const description = document.createElement('p');
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(index + 1).padStart(2, '0');

    tab.type = 'button';
    tab.id = `step-tab-${index}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', `step-panel-${index}`);
    tab.append(number, step.label);

    panel.id = `step-panel-${index}`;
    panel.className = 'case-stage';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    heading.textContent = step.title;
    description.textContent = step.text;
    panel.append(heading, description);

    tabs.append(tab);
    panels.append(panel);
    return { tab, panel };
  });

  function select(index) {
    items.forEach(({ tab, panel }, position) => {
      const active = position === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panel.hidden = !active;
    });
  }

  items.forEach(({ tab }, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      const destinations = {
        ArrowLeft: (index - 1 + items.length) % items.length,
        ArrowRight: (index + 1) % items.length,
        Home: 0,
        End: items.length - 1,
      };
      if (!Object.hasOwn(destinations, event.key)) return;

      event.preventDefault();
      const next = destinations[event.key];
      select(next);
      items[next].tab.focus();
    });
  });

  select(0);
  section.append(tabs, panels);
  section.hidden = false;
}

function renderDetails(sections, openFirst) {
  const container = document.getElementById('detail-panels');
  const toggle = document.querySelector('.case-detail-toggle');
  const panels = sections.map(({ title, points }, index) => {
    const panel = document.createElement('details');
    const summary = document.createElement('summary');
    const icon = document.createElement('span');
    const body = document.createElement('div');
    panel.open = openFirst && index === 0;
    icon.className = 'case-disclosure-icon';
    icon.setAttribute('aria-hidden', 'true');
    summary.append(title, icon);
    body.className = 'case-disclosure-body';

    if (points.length === 1) {
      const paragraph = document.createElement('p');
      paragraph.textContent = points[0];
      body.append(paragraph);
    } else {
      const list = document.createElement('ul');
      points.forEach(point => {
        const item = document.createElement('li');
        item.textContent = point;
        list.append(item);
      });
      body.append(list);
    }

    panel.append(summary, body);
    return panel;
  });
  container.append(...panels);

  if (panels.length < 2) return;

  function updateToggle() {
    toggle.textContent = panels.every(panel => panel.open) ? 'Collapse all' : 'Expand all';
  }

  panels.forEach(panel => panel.addEventListener('toggle', updateToggle));
  toggle.addEventListener('click', () => {
    const open = panels.some(panel => !panel.open);
    panels.forEach(panel => { panel.open = open; });
    updateToggle();
  });
  updateToggle();
  toggle.hidden = false;
}

if (project) {
  document.title = `${project.title} | Bassel Taha`;
  document.getElementById('category').textContent = project.category;
  document.getElementById('title').textContent = project.title;
  document.getElementById('role').textContent = project.role;

  const visual = document.querySelector('.case-visual');
  const cover = new Image(960, 480);
  cover.alt = '';
  cover.decoding = 'async';
  cover.addEventListener('error', () => { visual.hidden = true; }, { once: true });
  const coverSrc = project.coverSrc || `assets/projects/${project.id}.webp`;
  if (project.coverSrcLight) {
    cover.dataset.srcDark = coverSrc;
    cover.dataset.srcLight = project.coverSrcLight;
    cover.src = document.documentElement.dataset.theme === 'light' ? project.coverSrcLight : coverSrc;
  } else {
    cover.src = coverSrc;
  }
  visual.prepend(cover);
  visual.hidden = false;

  const tags = document.getElementById('tags');
  project.tags.forEach(tag => {
    const item = document.createElement('li');
    item.textContent = tag;
    tags.append(item);
  });

  document.getElementById('overview-text').textContent = project.overview;
  if (project.workflow) renderWorkflow(project.workflow);
  renderDetails(project.sections, !project.workflow);

  const ids = Object.keys(entries);
  const next = entries[ids[(ids.indexOf(id) + 1) % ids.length]];
  if (next && next.id !== id) {
    const link = document.querySelector('.case-next a');
    const nextParams = new URLSearchParams({ id: next.id });
    state.forEach((value, key) => nextParams.set(key, value));
    link.href = `project-details.html?${nextParams}`;
    link.firstElementChild.textContent = `Next project · ${next.title}`;
    link.parentElement.hidden = false;
  }

  document.getElementById('project-container').hidden = false;
} else {
  document.title = 'Project not found | Bassel Taha';
  document.getElementById('not-found').hidden = false;
}
