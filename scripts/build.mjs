import { spawnSync } from 'node:child_process';
import { loadEnv } from 'vite';

const siteUrl =
  process.env.SITE_URL ??
  loadEnv('production', process.cwd(), 'SITE_').SITE_URL;
if (!siteUrl)
  throw new Error(
    'Production build requires SITE_URL (real HTTPS origin). Use npm run build:local for localhost.',
  );
const url = new URL(siteUrl);
if (
  url.protocol !== 'https:' ||
  url.pathname !== '/' ||
  url.search ||
  url.hash ||
  url.username ||
  url.password ||
  url.hostname === 'localhost'
) {
  throw new Error(
    'SITE_URL must be a real HTTPS origin without path, credentials, query or hash.',
  );
}
const result = spawnSync(
  process.execPath,
  ['node_modules/@react-router/dev/bin.js', 'build'],
  { stdio: 'inherit' },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
const { finalizeBuild } = await import('./finalizeBuild.mjs');
await finalizeBuild(url.origin);
