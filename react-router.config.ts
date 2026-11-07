import type { Config } from '@react-router/dev/config';
import { services } from './src/content/services';
import { designPreviewPaths } from './src/design-preview/previewPaths';
import { readPublishedArticles } from './src/lib/articles.server';
export default {
  appDirectory: 'src',
  buildDirectory: 'dist',
  ssr: false,
  prerender: [
    '/',
    '/404',
    '/contacts',
    '/services',
    '/articles',
    ...readPublishedArticles().map((article) =>
      article.path.replace(/\/$/, ''),
    ),
    ...services.map((service) => service.path.replace(/\/$/, '')),
    ...(process.env.VITE_LOCAL_PROTOTYPE === 'true' ||
    process.argv.includes('dev')
      ? designPreviewPaths
      : []),
  ],
} satisfies Config;
