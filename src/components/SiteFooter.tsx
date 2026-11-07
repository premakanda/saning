import { Link } from 'react-router';
import { contacts, navigation } from '../config/contacts';
import { MessengerLinks } from './MessengerLinks';
import { Brand } from './Brand';
import styles from './SiteLayout.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <Link
            to="/"
            aria-label={`${contacts.brand} — главная`}
            className={styles.brand}
          >
            <Brand />
          </Link>
          <p>{contacts.description}</p>
          <p>{contacts.region}</p>
        </div>
        <nav aria-label="Навигация в футере">
          <h2>Навигация</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>Контакты</h2>
          <address className={styles.address}>
            <a href={contacts.phone.href}>
              {contacts.phone.carrier}: {contacts.phone.label}
            </a>
            <a href={contacts.email.href}>{contacts.email.label}</a>
          </address>
          <MessengerLinks includeInstagram compact />
        </div>
      </div>
      <div className={styles.legal}>
        <span>© {contacts.brand}</span>
        {(import.meta.env.DEV ||
          import.meta.env.VITE_LOCAL_PROTOTYPE === 'true') && (
          <span>Локальный просмотр · отправка заявок не подключена</span>
        )}
      </div>
    </footer>
  );
}
