import { useSyncExternalStore } from 'react';
import { isDarkTheme, subscribeToTheme, toggleTheme } from '../lib/theme';
import styles from './ThemeToggle.module.css';
import { Icon } from './Icon';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    isDarkTheme,
    () => true,
  );
  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={isDark}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      onClick={toggleTheme}
    >
      <Icon name={isDark ? 'sun' : 'moon'} />
      {!compact && <span>{isDark ? 'Светлая тема' : 'Тёмная тема'}</span>}
    </button>
  );
}
