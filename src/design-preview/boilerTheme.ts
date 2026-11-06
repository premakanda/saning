export type BoilerTheme = 'light' | 'dark';
const storageKey = 'aqualine-engineering-scene-theme';
const eventName = 'boiler-theme-change';

export const boilerThemeBootstrap = `(()=>{try{const theme=localStorage.getItem('aqualine-engineering-scene-theme');if(theme==='light'||theme==='dark')document.currentScript.parentElement.dataset.boilerTheme=theme;}catch{}})();`;

export function getBoilerTheme(): BoilerTheme {
  return document
    .querySelector('[data-boiler-theme]')
    ?.getAttribute('data-boiler-theme') === 'light'
    ? 'light'
    : 'dark';
}

export function subscribeBoilerTheme(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return;
    const root = document.querySelector<HTMLElement>('[data-boiler-theme]');
    if (root)
      root.dataset.boilerTheme = event.newValue === 'light' ? 'light' : 'dark';
    onChange();
  };
  window.addEventListener(eventName, onChange);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(eventName, onChange);
    window.removeEventListener('storage', onStorage);
  };
}

export function toggleBoilerTheme() {
  const theme = getBoilerTheme() === 'dark' ? 'light' : 'dark';
  const root = document.querySelector<HTMLElement>('[data-boiler-theme]');
  if (root) root.dataset.boilerTheme = theme;
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    /* Current document still follows the selected theme. */
  }
  window.dispatchEvent(new Event(eventName));
}
