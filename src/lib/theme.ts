const themeChanged = 'theme-change';
export function isDarkTheme() {
  return document.documentElement.dataset.theme !== 'light';
}
export function subscribeToTheme(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== 'site-theme' && event.key !== null) return;
    document.documentElement.dataset.theme =
      event.newValue === 'light' ? 'light' : 'dark';
    onChange();
  };
  window.addEventListener(themeChanged, onChange);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(themeChanged, onChange);
    window.removeEventListener('storage', onStorage);
  };
}
export function toggleTheme() {
  const theme = isDarkTheme() ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('site-theme', theme);
  } catch {
    // The selected theme still works for the current document.
  }
  window.dispatchEvent(new Event(themeChanged));
}
