import { useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { contacts } from '../config/contacts';
import { services } from '../content/services';
import { pageMeta } from '../lib/seo';
import type { MetaArgs } from 'react-router';
import styles from './InnerPage.module.css';
export function loader({ params }: LoaderFunctionArgs) {
  const service = services.find((item) => item.id === params.service);
  if (!service) throw new Response('Not Found', { status: 404 });
  return { service };
}
export function meta({ data }: MetaArgs<typeof loader>) {
  if (!data)
    return [
      { title: 'Страница не найдена' },
      { name: 'robots', content: 'noindex' },
    ];
  return pageMeta(
    data.service.title,
    `${data.service.description} ${contacts.region}`,
    data.service.path,
  );
}
export default function ServicePage() {
  const { service } = useLoaderData<typeof loader>();
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Услуги', path: '/services/' },
          { label: service.title, path: service.path },
        ]}
      />
      <Icon name={service.icon} large />
      <h1>{service.title}</h1>
      <p className={styles.lead}>{service.description}</p>
      <p>{contacts.region}</p>
      <div className={styles.columns}>
        <div>
          {service.sections.length > 0 && (
            <section aria-labelledby="scope-title">
              <h2 id="scope-title">Направления работ</h2>
              {service.sections.map((section) => (
                <section key={section} className={styles.subservice}>
                  <h3>{section}</h3>
                </section>
              ))}
            </section>
          )}
          {service.note && <p className={styles.note}>{service.note}</p>}
          <section>
            <h2>Обсудим вашу задачу</h2>
            <p>
              Расскажите об объекте и оборудовании по телефону. Состав работ и
              условия уточняются индивидуально.
            </p>
            <a className={styles.call} href={contacts.phone.href}>
              {contacts.phone.carrier} {contacts.phone.label}
            </a>
            <p>
              <a href="/contacts/">Все контакты и режим работы</a>
            </p>
          </section>
        </div>
        <section className={styles.card} aria-labelledby="request-title">
          <h2 id="request-title">Форма обращения</h2>
          <ContactForm />
        </section>
      </div>
      <nav aria-label="Другие направления" className={styles.related}>
        <h2>Другие услуги</h2>
        <ul>
          {services
            .filter((item) => item.id !== service.id)
            .map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
        </ul>
      </nav>
    </main>
  );
}
