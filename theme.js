(() => {
  const root = document.documentElement;

  try {
    if (localStorage.getItem('theme') === 'light') root.dataset.theme = 'light';
  } catch {
    // The default theme still works when storage is unavailable.
  }

  // Images with data-src-light / data-src-dark follow the active theme.
  const syncThemedImages = () => {
    const light = root.dataset.theme === 'light';
    document.querySelectorAll('img[data-src-light][data-src-dark]').forEach(img => {
      const next = light ? img.dataset.srcLight : img.dataset.srcDark;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });
  };
  new MutationObserver(syncThemedImages).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  document.addEventListener('DOMContentLoaded', () => {
    syncThemedImages();
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    const update = () => {
      const light = root.dataset.theme === 'light';
      button.setAttribute('aria-pressed', String(light));
      button.title = light ? 'Switch to dark theme' : 'Switch to light theme';
    };

    update();
    button.hidden = false;

    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = theme;
      update();

      try {
        localStorage.setItem('theme', theme);
      } catch {
        // Keep the theme active for this page even without storage.
      }
    });
  });
})();
