import { contacts, navigation } from '../config/contacts';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Icon } from './Icon';
import { MessengerLinks } from './MessengerLinks';
import styles from './SiteLayout.module.css';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="/"
        aria-label={`${contacts.brand} — главная`}
      >
        {contacts.brand}
      </a>
      <nav className={styles.desktopNav} aria-label="Основная навигация">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <a
          className={styles.phone}
          href={contacts.phone.href}
          aria-label={`Позвонить ${contacts.brand}: ${contacts.phone.label}`}
        >
          <Icon name="phone" />
          <span>
            {contacts.phone.carrier} {contacts.phone.label}
          </span>
        </a>
        <div className={styles.desktopMessengers}>
          <MessengerLinks compact />
        </div>
        <ThemeToggle compact />
        <MobileMenu />
      </div>
    </header>
  );
}
