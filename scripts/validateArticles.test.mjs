import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { stringify } from 'yaml';
import { services } from '../src/content/services.ts';
import { validateArticles } from '../src/lib/validateArticles.ts';

const options = { today: '2026-11-07', servicePaths: ['/services/heating/'] };
const base = {
  title: 'Title',
  slug: 'heating-guide',
  description: 'Description',
  publishedAt: '2026-11-07',
  published: true,
  coverImage: '/images/articles/heating.webp',
  coverAlt: 'Illustration',
  content: '## Heading\n\nText.',
};
const source = (data, filename = 'article.yaml') => ({
  filename,
  source: stringify(data),
});
const validate = (data) => validateArticles([source(data)], options);

test('repository articles validate without a manual content registry', () => {
  const sources = readdirSync('src/content/articles')
    .filter((filename) => /\.ya?ml$/.test(filename))
    .map((filename) => ({
      filename,
      source: readFileSync('src/content/articles/' + filename, 'utf8'),
    }));
  const articles = validateArticles(sources, {
    today: new Date().toISOString().slice(0, 10),
    servicePaths: services.map((service) => service.path),
  });
  assert.equal(articles.length, sources.length);
});

test('required fields and publication flag fail with filename and field', () => {
  for (const field of [
    'title',
    'slug',
    'description',
    'publishedAt',
    'coverImage',
    'coverAlt',
    'content',
  ]) {
    assert.throws(
      () => validate({ ...base, [field]: '' }),
      new RegExp(`article.yaml: ${field}:`),
    );
  }
  assert.throws(
    () => validate({ ...base, published: 'true' }),
    /article.yaml: published:/,
  );
  assert.throws(
    () =>
      validateArticles(
        [{ filename: 'array.yaml', source: '[one, two]' }],
        options,
      ),
    /array.yaml: YAML:/,
  );
});

test('duplicates, unsafe slugs, and unsafe cover paths cannot reach routes or assets', () => {
  assert.throws(
    () => validateArticles([source(base), source(base, 'other.yaml')], options),
    /other.yaml: slug: duplicate.*article.yaml/,
  );
  for (const slug of [
    '../secrets',
    'a/b',
    'Mixed-Case',
    'bad?query',
    'bad%20slug',
  ])
    assert.throws(() => validate({ ...base, slug }), /slug:/);
  for (const coverImage of [
    '/images/../private.webp',
    'https://external.test/image.webp',
    '//external.test/x.webp',
    '/images/x.webp?q=1',
  ])
    assert.throws(() => validate({ ...base, coverImage }), /coverImage:/);
});

test('YAML duplicate keys and aliases fail rather than silently replacing content', () => {
  assert.throws(
    () =>
      validateArticles(
        [{ filename: 'bad.yaml', source: 'title: One\ntitle: Two' }],
        options,
      ),
    /bad.yaml: YAML:/,
  );
  assert.throws(
    () =>
      validateArticles(
        [{ filename: 'alias.yaml', source: 'title: &a One\ndescription: *a' }],
        options,
      ),
    /alias.yaml: YAML:/,
  );
});

test('dates are real and future releases require an explicit editorial action', () => {
  for (const publishedAt of [
    '2026-02-30',
    '2026-13-01',
    '07.11.2026',
    '2026-1-1',
  ])
    assert.throws(() => validate({ ...base, publishedAt }), /publishedAt:/);
  assert.throws(
    () => validate({ ...base, publishedAt: '2026-11-08' }),
    /future publication is not scheduled/,
  );
  assert.equal(
    validate({ ...base, published: false, publishedAt: '2026-11-08' })[0]
      .published,
    false,
  );
  assert.throws(
    () => validate({ ...base, updatedAt: '2026-11-06' }),
    /updatedAt:/,
  );
  assert.throws(
    () => validate({ ...base, updatedAt: '2026-11-08' }),
    /updatedAt:/,
  );
  assert.equal(validate(base)[0].updatedAt, undefined);
});

test('related links target real services and other published articles', () => {
  assert.throws(
    () => validate({ ...base, relatedServices: ['/services/made-up/'] }),
    /relatedServices: unknown service/,
  );
  assert.throws(
    () => validate({ ...base, relatedArticles: ['missing'] }),
    /relatedArticles:/,
  );
  assert.throws(
    () => validate({ ...base, relatedArticles: [base.slug] }),
    /relatedArticles:/,
  );
  assert.throws(
    () =>
      validateArticles(
        [
          source({ ...base, relatedArticles: ['draft'] }),
          source({ ...base, slug: 'draft', published: false }, 'draft.yaml'),
        ],
        options,
      ),
    /relatedArticles:/,
  );
  assert.throws(
    () => validate({ ...base, relatedArticles: 'not-an-array' }),
    /relatedArticles:/,
  );
});

test('the page supplies the only H1', () => {
  assert.throws(
    () => validate({ ...base, content: '# Extra heading\n\nText' }),
    /content: H1/,
  );
  assert.throws(
    () => validate({ ...base, content: 'Extra heading\n===\n' }),
    /content: H1/,
  );
  assert.equal(validate(base)[0].content, base.content);
});
