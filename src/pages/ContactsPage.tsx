import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { MessengerLinks } from '../components/MessengerLinks';
import { contacts } from '../config/contacts';
import { pageMeta } from '../lib/seo';
import styles from './InnerPage.module.css';
const lead =
  'Свяжитесь с нами — ответим на вопросы, рассчитаем предварительную стоимость работ и проконсультируем по выбору решения.';
export function meta() {
  return pageMeta(
    'Контакты',
    `${contacts.region} Телефон ${contacts.phone.label}, email ${contacts.email.label}.`,
    '/contacts/',
  );
}
export default function ContactsPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Контакты', path: '/contacts/' },
        ]}
      />
      <h1>Контакты</h1>
      <p className={styles.lead}>{lead}</p>
      <div className={styles.columns}>
        <section className={styles.card} aria-labelledby="contact-info">
          <h2 id="contact-info">{contacts.brand}</h2>
          <p>{contacts.region}</p>
          <address className={styles.address}>
            <a href={contacts.phone.href}>
              {contacts.phone.carrier} {contacts.phone.label}
            </a>
            <a href={contacts.email.href}>{contacts.email.label}</a>
          </address>
          <MessengerLinks />
          <h2>Режим работы</h2>
          {contacts.hours.map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
        </section>
        <section className={styles.card} aria-labelledby="request-title">
          <h2 id="request-title">Свяжитесь с нами</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
