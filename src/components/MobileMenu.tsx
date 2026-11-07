import { Link } from 'react-router';
import { useRef } from 'react';
import { navigation } from '../config/contacts';
import { Icon } from './Icon';
import styles from './SiteLayout.module.css';

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <details
      className={styles.mobileMenu}
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menu.current) {
          menu.current.open = false;
          menu.current.querySelector('summary')?.focus();
        }
      }}
    >
      <summary aria-label="Открыть меню">
        <Icon name="menu" />
        <span>Меню</span>
      </summary>
      <nav
        aria-label="Мобильная навигация"
        onClick={(event) => {
          if (event.target instanceof HTMLAnchorElement && menu.current)
            menu.current.open = false;
        }}
      >
        {navigation.map((item) => (
          <Link to={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
