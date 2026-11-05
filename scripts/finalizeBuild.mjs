import { copyFile, rm, writeFile, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function finalizeBuild(siteUrl, directory = 'dist/client') {
  await copyFile(
    join(directory, '404/index.html'),
    join(directory, '404.html'),
  );
  await rm(join(directory, '__spa-fallback.html'), { force: true });
  const preview =
    !siteUrl ||
    Boolean(
      process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== 'main',
    );
  await writeFile(
    join(directory, '_headers'),
    `/*\n  X-Content-Type-Options: nosniff\n${preview ? '  X-Robots-Tag: noindex, follow\n' : ''}`,
  );
  if (!siteUrl) return;
  const urls = new Set();
  async function discover(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      const path = join(folder, entry.name);
      if (entry.isDirectory()) await discover(path);
      else if (entry.name.endsWith('.html')) {
        const html = await readFile(path, 'utf8');
        if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html))
          continue;
        const canonical = html.match(
          /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i,
        )?.[1];
        if (!canonical) continue;
        const url = new URL(canonical);
        if (url.origin !== siteUrl)
          throw new Error(`Unexpected canonical in ${path}: ${canonical}`);
        urls.add(url.href);
      }
    }
  }
  await discover(directory);
  const escapeXml = (value) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  await writeFile(
    join(directory, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[
      ...urls,
    ]
      .sort()
      .map((url) => `<url><loc>${escapeXml(url)}</loc></url>`)
      .join('')}</urlset>\n`,
  );
  await writeFile(
    join(directory, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  );
}
