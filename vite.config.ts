import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
export default defineConfig(({ mode, command }) => ({
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(
      process.env.SITE_URL ||
        loadEnv(mode, process.cwd(), 'SITE_').SITE_URL ||
        'http://localhost:5173',
    ),
    'import.meta.env.VITE_NOINDEX': JSON.stringify(
      String(
        command !== 'build' ||
          process.env.VITE_LOCAL_PROTOTYPE === 'true' ||
          Boolean(
            process.env.CF_PAGES_BRANCH &&
            process.env.CF_PAGES_BRANCH !== 'main',
          ),
      ),
    ),
  },
  plugins: [reactRouter()],
  server: { host: 'localhost', port: 5173, strictPort: true },
}));
