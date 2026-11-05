import type { Config } from '@react-router/dev/config';
import { services } from './src/content/services';
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
    ...services.map((service) => service.path.replace(/\/$/, '')),
  ],
} satisfies Config;
