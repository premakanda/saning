export const themeBootstrap = `(() => {
  let theme = 'light';
  try {
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) theme = 'dark';
    const saved = localStorage.getItem('site-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;
