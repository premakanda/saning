import { Breadcrumbs } from '../components/Breadcrumbs';
import { Icon } from '../components/Icon';
import { pageMeta } from '../lib/seo';
import styles from './InnerPage.module.css';
export function meta() {
  return pageMeta(
    'Статьи',
    'Материалы о системах отопления, водоснабжения и канализации готовятся к публикации.',
    '/articles/',
    true,
  );
}
export default function ArticlesPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Статьи', path: '/articles/' },
        ]}
      />
      <h1>Статьи</h1>
      <section className={styles.empty} aria-labelledby="articles-status">
        <Icon name="pipes" large />
        <h2 id="articles-status">Материалы готовятся к публикации</h2>
        <p>Опубликованных статей пока нет.</p>
        <a href="/services/">
          Посмотреть направления услуг <Icon name="arrow-up-right" />
        </a>
      </section>
    </main>
  );
}
