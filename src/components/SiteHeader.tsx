import { Link } from 'react-router';
import { contacts, navigation } from '../config/contacts';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { MessengerLinks } from './MessengerLinks';
import { Brand } from './Brand';
import styles from './SiteLayout.module.css';

export function SiteHeader() {
  return (
    <div className={styles.headerShell}>
      <header className={styles.header}>
        <Link
          className={styles.brand}
          to="/"
          aria-label={`${contacts.brand} — главная`}
        >
          <Brand compact />
        </Link>
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link to={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <a
            className={styles.phone}
            href={contacts.phone.href}
            aria-label={`Позвонить ${contacts.brand}: ${contacts.phone.carrier} ${contacts.phone.label}`}
          >
            <span>
              <span className={styles.phoneCarrier}>
                {contacts.phone.carrier}{' '}
              </span>
              {contacts.phone.label}
            </span>
          </a>
          <div className={styles.desktopMessengers}>
            <MessengerLinks compact />
          </div>
          <ThemeToggle compact />
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}
