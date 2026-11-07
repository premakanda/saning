import {
  Link,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaArgs,
} from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Illustration } from '../components/Illustration';
import { contacts } from '../config/contacts';
import { services } from '../content/services';
import { media } from '../content/media';
import { serviceMedia } from '../content/serviceMedia';
import { absoluteUrl, pageMeta, serializeJsonLd } from '../lib/seo';
import layout from './InnerPage.module.css';
import styles from './ServicePage.module.css';
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
    data.service.seo.title,
    data.service.seo.description,
    data.service.path,
    false,
    serviceMedia[data.service.id]?.hero ??
      (data.service.heroImage ? media[data.service.heroImage] : undefined),
  );
}
export default function ServicePage() {
  const { service } = useLoaderData<typeof loader>();
  const illustrations = serviceMedia[service.id];
  const image =
    illustrations?.hero ??
    (service.heroImage ? media[service.heroImage] : undefined);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.seo.description,
    url: absoluteUrl(service.path),
    areaServed: ['Минск', 'Минская область'],
    provider: {
      '@type': 'Organization',
      name: contacts.brand,
      url: absoluteUrl('/'),
      telephone: contacts.phone.href.replace('tel:', ''),
      email: contacts.email.label,
    },
  };
  return (
    <main id="main-content" tabIndex={-1} className={layout.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Услуги', path: '/services/' },
          { label: service.title, path: service.path },
        ]}
      />
      <div className={styles.hero}>
        <div>
          <h1>{service.title}</h1>
          <p className={layout.lead}>{service.intro}</p>
        </div>
        {image && <Illustration image={image} priority showCaption={false} />}
      </div>
      <section
        className={`${styles.scope} ${illustrations ? styles.illustratedScope : ''}`}
        aria-labelledby="scope-title"
      >
        <h2 id="scope-title">Что входит в направление</h2>
        <div className={styles.workGrid}>
          {service.sections.map((section) => {
            const images = illustrations?.sections[section.heading] ?? [];
            return (
              <section
                key={section.heading}
                className={`${styles.workGroup} ${images.length ? styles.illustratedGroup : ''}`}
              >
                <div>
                  <h3>{section.heading}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {images.length > 0 && (
                  <div className={styles.workImages}>
                    {images.map((image) => (
                      <Illustration
                        key={image.src}
                        image={image}
                        showCaption={false}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
        {service.note && <p className={layout.note}>{service.note}</p>}
      </section>
      <section
        className={styles.contact}
        aria-labelledby="service-contact-title"
      >
        <div>
          <h2 id="service-contact-title">Свяжитесь с нами</h2>
          <p>{service.cta}</p>
          <a className={layout.call} href={contacts.phone.href}>
            {contacts.phone.carrier} {contacts.phone.label}
          </a>
          <p>
            <a href={contacts.email.href}>{contacts.email.label}</a>
          </p>
          <Link to="/contacts/">Все контакты и режим работы</Link>
        </div>
        <div className={layout.card}>
          <ContactForm />
        </div>
      </section>
      <nav aria-label="Другие направления" className={layout.related}>
        <h2>Другие услуги</h2>
        <ul>
          {services
            .filter((item) => item.id !== service.id)
            .map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
    </main>
  );
}
