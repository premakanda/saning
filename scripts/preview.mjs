import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';

const root = resolve('dist/client');
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
};
const notFound = await readFile(resolve(root, '404.html'));
createServer(async (request, response) => {
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? '/', 'http://localhost').pathname,
    );
    let filePath = resolve(root, `.${pathname}`);
    if (filePath !== root && !filePath.startsWith(root + sep))
      throw new Error('Outside root');
    if ((await stat(filePath)).isDirectory())
      filePath = resolve(filePath, 'index.html');
    const body = await readFile(filePath);
    response.writeHead(
      pathname === '/404' ||
        pathname.startsWith('/404/') ||
        pathname === '/404.html'
        ? 404
        : 200,
      {
        'Content-Type':
          contentTypes[extname(filePath)] ?? 'application/octet-stream',
      },
    );
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(notFound);
  }
}).listen(4173, 'localhost', () => {
  process.stdout.write('Local: http://localhost:4173\n');
});
