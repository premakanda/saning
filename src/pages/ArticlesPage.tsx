import { Link, useLoaderData, type MetaArgs } from 'react-router';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Icon } from '../components/Icon';
import { readPublishedArticles, articleSummary } from '../lib/articles.server';
import { pageMeta } from '../lib/seo';
import glow from '../components/CardGlow.module.css';
import layout from './InnerPage.module.css';
import styles from './ArticlesPage.module.css';

export function loader() {
  return readPublishedArticles().map(articleSummary);
}
export function meta({ data }: MetaArgs<typeof loader>) {
  return pageMeta(
    'Статьи об инженерных системах',
    'Понятно об отоплении, водоснабжении и канализации: выбор оборудования, планирование коммуникаций и подготовка к монтажу.',
    '/articles/',
    !data?.length,
  );
}
export default function ArticlesPage() {
  const articles = useLoaderData<typeof loader>();
  return (
    <main id="main-content" tabIndex={-1} className={layout.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Статьи', path: '/articles/' },
        ]}
      />
      <h1>Статьи</h1>
      <p className={layout.lead}>
        Об отоплении, водоснабжении и канализации — понятным языком.
      </p>
      {articles.length ? (
        <ul className={styles.grid}>
          {articles.map((article, index) => (
            <li key={article.slug}>
              <article className={styles.entry}>
                <Link
                  to={article.path}
                  className={styles.card + ' ' + glow.card}
                  aria-labelledby={'title-' + article.slug}
                >
                  <img
                    src={article.cover.src}
                    srcSet={article.cover.srcSet}
                    sizes="(min-width: 75rem) 22.5rem, (min-width: 64rem) calc((100vw - 5rem) / 3), (min-width: 40rem) calc((100vw - 3rem) / 2), calc(100vw - 2rem)"
                    width={article.cover.width}
                    height={article.cover.height}
                    alt={article.coverAlt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                  />
                  <div className={styles.copy}>
                    {article.category && (
                      <p className={styles.meta}>{article.category}</p>
                    )}
                    <h2 id={'title-' + article.slug}>{article.title}</h2>
                    <p className={styles.description}>{article.description}</p>
                    <span className={styles.more}>
                      Читать далее <Icon name="arrow-up-right" />
                    </span>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p>Опубликованных статей пока нет.</p>
      )}
    </main>
  );
}
