import {
  Link,
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
  type LoaderFunctionArgs,
  type MetaArgs,
} from 'react-router';
import Markdown from 'react-markdown';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Illustration } from '../components/Illustration';
import { Icon } from '../components/Icon';
import { contacts } from '../config/contacts';
import { services } from '../content/services';
import { readPublishedArticles, articleSummary } from '../lib/articles.server';
import { formatArticleDate } from '../lib/formatArticleDate';
import { absoluteUrl, pageMeta, serializeJsonLd } from '../lib/seo';
import layout from './InnerPage.module.css';
import styles from './ArticlePage.module.css';
import NotFoundPage from './NotFoundPage';

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404)
    return <NotFoundPage />;
  throw error;
}

export function loader({ request }: LoaderFunctionArgs) {
  const articles = readPublishedArticles();
  const slug = new URL(request.url).pathname
    .replace(/\.data$/, '')
    .split('/')
    .filter(Boolean)
    .at(-1);
  const article = articles.find((item) => item.slug === slug);
  if (!article) throw new Response('Статья не найдена', { status: 404 });
  return {
    article,
    related: articles
      .filter((item) => article.relatedArticles.includes(item.slug))
      .map(articleSummary),
  };
}

export function meta({ data }: MetaArgs<typeof loader>) {
  if (!data)
    return [
      { title: 'Статья не найдена' },
      { name: 'robots', content: 'noindex, follow' },
    ];
  const { article } = data;
  return [
    ...pageMeta(
      article.title,
      article.description,
      article.path,
      false,
      article.cover,
    ).filter((item) => !('property' in item && item.property === 'og:type')),
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: article.publishedAt },
    ...(article.updatedAt
      ? [{ property: 'article:modified_time', content: article.updatedAt }]
      : []),
  ];
}

export default function ArticlePage() {
  const { article, related } = useLoaderData<typeof loader>();
  const relevantServices = services.filter((service) =>
    article.relatedServices.includes(service.path),
  );
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    image: absoluteUrl(article.coverImage),
    inLanguage: 'ru',
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(article.path) },
    publisher: {
      '@type': 'Organization',
      name: contacts.brand,
      url: absoluteUrl('/'),
    },
  };
  return (
    <main id="main-content" tabIndex={-1} className={layout.page}>
      <Breadcrumbs
        items={[
          { label: 'Главная', path: '/' },
          { label: 'Статьи', path: '/articles/' },
          { label: article.title, path: article.path },
        ]}
      />
      <article className={styles.article}>
        <header className={styles.heading}>
          <h1>{article.title}</h1>
          {article.category && (
            <p className={styles.meta}>{article.category}</p>
          )}
          <p className={styles.lead}>{article.description}</p>
        </header>
        <Illustration image={article.cover} priority />
        <div className={styles.body}>
          <Markdown
            skipHtml
            allowedElements={[
              'p',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'ul',
              'ol',
              'li',
              'strong',
              'em',
              'blockquote',
              'a',
              'code',
              'pre',
              'hr',
              'br',
            ]}
            components={{
              a: ({ href, children }) =>
                href?.startsWith('/') && !href.startsWith('//') ? (
                  <Link to={href}>{children}</Link>
                ) : (
                  <a href={href}>{children}</a>
                ),
            }}
          >
            {article.content}
          </Markdown>
        </div>
        {article.updatedAt && (
          <p className={styles.meta}>
            Обновлено:{' '}
            <time dateTime={article.updatedAt}>
              {formatArticleDate(article.updatedAt)}
            </time>
          </p>
        )}
      </article>
      {relevantServices.length > 0 && (
        <section
          className={styles.related}
          aria-labelledby="article-services-title"
        >
          <h2 id="article-services-title">Услуги по теме</h2>
          <ul>
            {relevantServices.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>
                  {service.title} <Icon name="arrow-up-right" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {related.length > 0 && (
        <section
          className={styles.related}
          aria-labelledby="related-articles-title"
        >
          <h2 id="related-articles-title">Читайте также</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link to={item.path}>
                  {item.title} <Icon name="arrow-up-right" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <Link className={styles.back} to="/articles/">
        Все статьи <Icon name="arrow-up-right" />
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
    </main>
  );
}
