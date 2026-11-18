function setupSpotlight() {
  const media = window.matchMedia('(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)');
  let active;
  let pending;
  let frame = 0;

  function clear() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    pending = null;
    if (active) {
      active.removeAttribute('data-spotlight-active');
      active = null;
    }
  }

  function update() {
    frame = 0;
    const { target, x, y } = pending;
    const rect = target.getBoundingClientRect();
    if (active !== target) active?.removeAttribute('data-spotlight-active');
    active = target;
    active.style.setProperty('--pointer-x', `${x - rect.left}px`);
    active.style.setProperty('--pointer-y', `${y - rect.top}px`);
    active.setAttribute('data-spotlight-active', '');
  }

  function onPointerMove(event) {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest?.('[data-spotlight], .project-card');
    if (!target) {
      if (active || frame) clear();
      return;
    }

    pending = { target, x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(update);
  }

  function onPointerOut(event) {
    if (event.relatedTarget === null) clear();
  }

  function syncPreference() {
    if (media.matches) {
      document.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerout', onPointerOut, { passive: true });
      window.addEventListener('scroll', clear, { passive: true });
      window.addEventListener('blur', clear);
    } else {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('scroll', clear);
      window.removeEventListener('blur', clear);
      clear();
    }
  }

  media.addEventListener('change', syncPreference);
  syncPreference();
}

function setupQuickFind() {
  const trigger = document.querySelector('[data-quick-find]');
  if (!trigger || typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;

  const onHome = Boolean(document.querySelector('#project-grid'));
  const homePath = onHome ? '' : 'Bassel-Taha-Portfolio.html';
  const sections = [
    ['Selected work', 'projects'],
    ['Experience', 'experience'],
    ['About me', 'about'],
    ['Skills and technologies', 'skills'],
    ['Education and certifications', 'education'],
    ['Contact', 'contact'],
  ].map(([title, hash]) => ({ title, href: `${homePath}#${hash}`, type: 'Section' }));

  const entries = typeof projectsData === 'undefined' ? [] : Object.values(projectsData);
  const projectResults = entries.map(project => ({
    title: project.title,
    id: project.id,
    type: 'Project',
    keywords: `${project.category} ${project.role} ${project.tags.join(' ')} ${project.overview}`,
  }));
  const commands = [...sections, ...projectResults].map(item => ({
    ...item,
    search: `${item.title} ${item.type} ${item.keywords || ''}`.toLowerCase(),
  }));

  const dialog = document.createElement('dialog');
  dialog.className = 'quick-dialog';
  dialog.setAttribute('aria-labelledby', 'quick-title');
  dialog.innerHTML = `
    <div class="quick-heading">
      <h2 id="quick-title">Quick find</h2>
      <form method="dialog">
        <button class="icon-button quick-close" type="submit" aria-label="Close quick find">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>
        </button>
      </form>
    </div>
    <label class="quick-input">
      <span aria-hidden="true">›</span>
      <span class="sr-only">Find projects or pages</span>
      <input type="search" placeholder="Find projects or pages" autocomplete="off" autofocus>
    </label>
    <div class="quick-scroll">
      <p class="quick-empty" hidden>No matching projects or pages.</p>
      <ul class="quick-results" aria-label="Search results"></ul>
    </div>
    <div class="quick-footer">
      <span role="status"></span>
      <span class="quick-keys"><kbd>↑</kbd> <kbd>↓</kbd> Navigate <kbd>↵</kbd> Open</span>
    </div>`;
  document.body.append(dialog);

  const input = dialog.querySelector('input');
  const results = dialog.querySelector('.quick-results');
  const empty = dialog.querySelector('.quick-empty');
  const status = dialog.querySelector('[role="status"]');
  const shortcut = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K';
  const keyHint = trigger.querySelector('kbd');
  keyHint.textContent = shortcut;
  keyHint.setAttribute('aria-hidden', 'true');
  trigger.title = `Quick find (${shortcut})`;
  trigger.hidden = false;

  let returnFocus;
  let selectedSection;

  function projectHref(id) {
    const cardLink = document.getElementById(`case-${id}`);
    if (cardLink) return cardLink.href;

    const params = new URLSearchParams({ id });
    const current = new URLSearchParams(location.search);
    ['category', 'q', 'view'].forEach(key => {
      if (current.has(key)) params.set(key, current.get(key));
    });
    return `project-details.html?${params}`;
  }

  function render() {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches = commands.filter(item => terms.every(term => item.search.includes(term)));
    const items = matches.map(({ title, href, id, type }) => {
      const row = document.createElement('li');
      const link = document.createElement('a');
      const name = document.createElement('span');
      const label = document.createElement('span');
      link.href = href || projectHref(id);
      name.textContent = title;
      label.textContent = type;
      link.append(name, label);
      row.append(link);
      return row;
    });
    results.replaceChildren(...items);
    empty.hidden = matches.length !== 0;
    status.textContent = `${matches.length} ${matches.length === 1 ? 'result' : 'results'}`;
    results.parentElement.scrollTop = 0;
  }

  function open() {
    if (dialog.open) {
      input.focus();
      input.select();
      return;
    }

    returnFocus = document.activeElement === document.body ? trigger : document.activeElement;
    selectedSection = null;
    input.value = '';
    render();
    dialog.showModal();
  }

  trigger.addEventListener('click', open);
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.isComposing || event.altKey || event.shiftKey ||
      !(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return;

    event.preventDefault();
    open();
  });

  input.addEventListener('input', render);
  dialog.addEventListener('keydown', event => {
    if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return;
    const links = [...results.querySelectorAll('a')];
    if (!links.length) return;

    if (event.target === input && event.key === 'Enter') {
      event.preventDefault();
      links[0].click();
      return;
    }

    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

    const index = links.indexOf(event.target);
    if (event.target !== input && index === -1) return;

    event.preventDefault();
    const next = event.key === 'ArrowDown' ? index + 1 : index === -1 ? links.length - 1 : index - 1;
    (links[next] || input).focus();
  });

  results.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const href = link.getAttribute('href');
    if (href.startsWith('#')) selectedSection = document.getElementById(href.slice(1));
    dialog.close();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (selectedSection) {
      selectedSection.focus({ preventScroll: true });
      if (location.hash === `#${selectedSection.id}`) selectedSection.scrollIntoView();
      selectedSection = null;
    } else {
      const focusTarget = returnFocus?.getClientRects().length ? returnFocus : trigger;
      focusTarget.focus({ preventScroll: true });
    }
  });
}

setupSpotlight();
setupQuickFind();
