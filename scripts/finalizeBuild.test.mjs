import assert from 'node:assert/strict';
import test from 'node:test';
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  access,
  rm,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { finalizeBuild } from './finalizeBuild.mjs';

async function fixture(run) {
  const directory = await mkdtemp(join(tmpdir(), 'saning-ssg-'));
  try {
    for (const path of ['404', 'services/heating', 'articles'])
      await mkdir(join(directory, path), { recursive: true });
    await writeFile(join(directory, '404/index.html'), '<h1>404</h1>');
    await writeFile(join(directory, '__spa-fallback.html'), '<main></main>');
    await writeFile(
      join(directory, 'services/heating/index.html'),
      '<link rel="canonical" href="http://localhost:5173/services/heating/"><h1>Heating</h1>',
    );
    await writeFile(
      join(directory, 'articles/index.html'),
      '<meta name="robots" content="noindex, follow"><link rel="canonical" href="http://localhost:5173/articles/">',
    );
    await run(directory);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

test('sitemap uses generated canonical pages and excludes noindex pages', async () =>
  fixture(async (directory) => {
    await finalizeBuild('http://localhost:5173', directory);
    const sitemap = await readFile(join(directory, 'sitemap.xml'), 'utf8');
    assert.match(sitemap, /http:\/\/localhost:5173\/services\/heating\//);
    assert.ok(!sitemap.includes('/articles/'));
    assert.ok(!sitemap.includes('lastmod'));
    assert.match(
      await readFile(join(directory, 'robots.txt'), 'utf8'),
      /Sitemap: http:\/\/localhost:5173\/sitemap.xml/,
    );
    assert.ok(
      !(await readFile(join(directory, '_headers'), 'utf8')).includes(
        'noindex',
      ),
    );
    await assert.rejects(access(join(directory, '__spa-fallback.html')));
    assert.equal(
      await readFile(join(directory, '404.html'), 'utf8'),
      '<h1>404</h1>',
    );
  }));

test('local build prevents indexing and creates no sitemap', async () =>
  fixture(async (directory) => {
    await finalizeBuild(undefined, directory);
    assert.match(
      await readFile(join(directory, '_headers'), 'utf8'),
      /X-Robots-Tag: noindex/,
    );
    await assert.rejects(access(join(directory, 'sitemap.xml')));
  }));

test('canonical from a different origin fails the build', async () =>
  fixture(async (directory) => {
    await assert.rejects(
      finalizeBuild('http://localhost:4173', directory),
      /Unexpected canonical/,
    );
  }));
