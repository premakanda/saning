import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('pages/HomePage.tsx'),
  route('services', 'pages/ServicesPage.tsx'),
  route('services/:service', 'pages/ServicePage.tsx'),
  route('contacts', 'pages/ContactsPage.tsx'),
  route('articles', 'pages/ArticlesPage.tsx'),
  route('404', 'pages/NotFoundPage.tsx'),
] satisfies RouteConfig;
