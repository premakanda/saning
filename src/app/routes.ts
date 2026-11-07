import { index, route, type RouteConfig } from '@react-router/dev/routes';
import { readPublishedArticles } from '../lib/articles.server';

export default [
  index('pages/HomePage.tsx'),
  route('services', 'pages/ServicesPage.tsx'),
  route('services/:service', 'pages/ServicePage.tsx'),
  route('contacts', 'pages/ContactsPage.tsx'),
  route('articles', 'pages/ArticlesPage.tsx'),
  ...readPublishedArticles().map((article) =>
    route(`articles/${article.slug}`, 'pages/ArticlePage.tsx', {
      id: `article-${article.slug}`,
    }),
  ),
  route('*', 'pages/NotFoundPage.tsx'),
  ...(process.env.VITE_LOCAL_PROTOTYPE === 'true' ||
  process.argv.includes('dev')
    ? [
        route('design-preview/boiler', 'design-preview/BoilerHeroPage.tsx'),
        route(
          'design-preview/:concept',
          'design-preview/DesignPreviewPage.tsx',
        ),
      ]
    : []),
] satisfies RouteConfig;
