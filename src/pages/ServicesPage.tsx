import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServicesGrid } from '../components/ServicesGrid';
import { servicesIntro } from '../content/services';
import { pageMeta } from '../lib/seo';
import styles from './InnerPage.module.css';
export function meta() {
  return pageMeta(
    'Услуги по монтажу инженерных систем',
    servicesIntro,
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
      <ServicesGrid />
    </main>
  );
}
