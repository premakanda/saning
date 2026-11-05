import { Breadcrumbs } from '../components/Breadcrumbs';
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
      <p className={styles.lead}>Материалы готовятся к публикации.</p>
      <p>
        Опубликованных статей пока нет. Этот раздел исключён из индексации до
        появления материалов.
      </p>
      <a href="/services/">Посмотреть направления услуг</a>
    </main>
  );
}
