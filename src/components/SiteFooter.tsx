import { contacts, navigation } from '../config/contacts';
import { MessengerLinks } from './MessengerLinks';
import styles from './SiteLayout.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h2>{contacts.brand}</h2>
          <p>{contacts.description}</p>
          <p>{contacts.region}</p>
          <address className={styles.address}>
            <a href={contacts.phone.href}>
              {contacts.phone.carrier}: {contacts.phone.label}
            </a>
            <a href={contacts.email.href}>{contacts.email.label}</a>
          </address>
          <MessengerLinks includeInstagram />
        </div>
        <nav aria-label="Навигация в футере">
          <h2>Навигация</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.legal}>
        <span>© {contacts.brand}</span>
        <span>Политика обработки персональных данных — на подготовке.</span>
      </div>
    </footer>
  );
}
