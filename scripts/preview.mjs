import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { gzip } from 'node:zlib';
import { promisify } from 'node:util';
const compress = promisify(gzip);
const root = resolve('dist/client');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.data': 'text/x-script; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ttf': 'font/ttf',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};
const notFound = await readFile(resolve(root, '404.html'));
createServer(async (request, response) => {
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? '/', 'http://localhost').pathname,
    );
    let filePath = resolve(root, `.${pathname}`);
    if (filePath !== root && !filePath.startsWith(root + sep))
      throw new Error('Outside root');
    if ((await stat(filePath)).isDirectory())
      filePath = resolve(filePath, 'index.html');
    const extension = extname(filePath);
    const body = await readFile(filePath);
    const compressible = /\.(html|js|css|json|data|svg|ttf|txt|xml)$/.test(
      extension,
    );
    const useGzip =
      compressible && /\bgzip\b/.test(request.headers['accept-encoding'] ?? '');
    const output = useGzip ? await compress(body) : body;
    response.setHeader('Vary', 'Accept-Encoding');
    response.setHeader(
      'Cache-Control',
      pathname.startsWith('/assets/')
        ? 'public, max-age=31536000, immutable'
        : 'no-cache',
    );
    if (useGzip) response.setHeader('Content-Encoding', 'gzip');
    response.writeHead(
      pathname === '/404' ||
        pathname.startsWith('/404/') ||
        pathname === '/404.html'
        ? 404
        : 200,
      {
        'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
        'Content-Length': output.length,
      },
    );
    response.end(output);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(notFound);
  }
}).listen(4173, 'localhost', () =>
  process.stdout.write('Local: http://localhost:4173\n'),
);
