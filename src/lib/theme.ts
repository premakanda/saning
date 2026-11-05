const themeChanged = 'theme-change';

export function isDarkTheme() {
  const theme = document.documentElement.dataset.theme;
  return theme
    ? theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
}

export function subscribeToTheme(onChange: () => void) {
  const preference = matchMedia('(prefers-color-scheme: dark)');
  const onStorage = (event: StorageEvent) => {
    if (event.key !== 'site-theme' && event.key !== null) return;
    const theme = event.newValue;
    if (theme === 'light' || theme === 'dark')
      document.documentElement.dataset.theme = theme;
    else
      document.documentElement.dataset.theme = preference.matches
        ? 'dark'
        : 'light';
    onChange();
  };
  window.addEventListener(themeChanged, onChange);
  window.addEventListener('storage', onStorage);
  const onPreferenceChange = () => {
    try {
      if (!localStorage.getItem('site-theme'))
        document.documentElement.dataset.theme = preference.matches
          ? 'dark'
          : 'light';
    } catch {
      document.documentElement.dataset.theme = preference.matches
        ? 'dark'
        : 'light';
    }
    onChange();
  };
  preference.addEventListener('change', onPreferenceChange);
  return () => {
    window.removeEventListener(themeChanged, onChange);
    window.removeEventListener('storage', onStorage);
    preference.removeEventListener('change', onPreferenceChange);
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
