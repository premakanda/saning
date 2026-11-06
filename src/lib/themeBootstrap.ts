export const themeBootstrap = `(() => {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('site-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;
