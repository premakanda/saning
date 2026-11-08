import { rm, writeFile } from 'node:fs/promises';

if (!process.env.VERCEL_URL) {
  throw new Error('Vercel preview build requires VERCEL_URL.');
}

// Use the assigned deployment host and the existing preview indexing policy.
process.env.SITE_URL = `https://${process.env.VERCEL_URL}`;
process.env.CF_PAGES_BRANCH = 'vercel-preview';
process.env.VITE_LOCAL_PROTOTYPE = 'false';

await import('./build.mjs');
await rm('dist/client/sitemap.xml', { force: true });
await writeFile('dist/client/robots.txt', 'User-agent: *\nAllow: /\n');
