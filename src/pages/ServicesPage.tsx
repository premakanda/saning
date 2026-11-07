import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router';
import { Illustration } from '../components/Illustration';
import { Icon } from '../components/Icon';
import { services, servicesIntro } from '../content/services';
import { media } from '../content/media';
import { serviceMedia } from '../content/serviceMedia';
import { contacts } from '../config/contacts';
import glow from '../components/CardGlow.module.css';
import overview from './ServicesPage.module.css';
import { pageMeta } from '../lib/seo';
import styles from './InnerPage.module.css';
export function meta() {
  return pageMeta(
    'Услуги по монтажу инженерных систем в Минске',
    `Монтаж отопления, водоснабжения, канализации и сантехнических приборов в Минске и Минской области. Перечень работ и контакты ${contacts.brand}.`,
    '/services/',
  );
}
export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Услуги', path: '/services/' },
        ]}
      />
      <h1>Услуги по монтажу инженерных систем</h1>
      <p className={styles.lead}>{servicesIntro}</p>
      <ul className={overview.list} aria-label="Направления услуг">
        {services.map((service) => {
          const image =
            serviceMedia[service.id]?.hero ??
            (service.heroImage ? media[service.heroImage] : undefined);
          return (
            <li key={service.id}>
              <article
                className={`${overview.panel} ${glow.card} ${glow.alwaysLit}`}
                aria-labelledby={`service-${service.id}-title`}
              >
                <div className={overview.copy}>
                  <h2 id={`service-${service.id}-title`}>{service.title}</h2>
                  <p>{service.intro}</p>
                  <Link className={overview.link} to={service.path}>
                    Подробнее об услуге <Icon name="arrow-up-right" />
                  </Link>
                </div>
                {image && (
                  <div className={overview.visual}>
                    <Illustration image={image} showCaption={false} />
                  </div>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
