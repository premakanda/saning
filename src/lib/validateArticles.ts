import { parseDocument } from 'yaml';
import type { Article } from '../content/articleTypes';

type Source = { filename: string; source: string };
type ValidationOptions = { today: string; servicePaths: readonly string[] };

export function validateArticles(
  sources: readonly Source[],
  { today, servicePaths }: ValidationOptions,
): Article[] {
  const filenames = new Map<string, string>();
  const articles = sources.map(({ filename, source }): Article => {
    const fail = (field: string, message: string): never => {
      throw new Error(`${filename}: ${field}: ${message}`);
    };
    const document = parseDocument(source, { uniqueKeys: true });
    if (document.errors.length)
      fail('YAML', document.errors.map((e) => e.message).join('; '));
    let data: unknown;
    try {
      data = document.toJS({ maxAliasCount: 0 });
    } catch (error) {
      fail('YAML', error instanceof Error ? error.message : String(error));
    }
    if (!data || typeof data !== 'object' || Array.isArray(data))
      fail('YAML', 'expected a mapping');
    const record = data as Record<string, unknown>;
    const text = (field: string): string => {
      const value = record[field];
      if (typeof value !== 'string' || !value.trim())
        return fail(field, 'expected non-empty text');
      return value;
    };
    const date = (field: string): string => {
      const value = text(field);
      const parsed = new Date(`${value}T00:00:00Z`);
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
        !Number.isFinite(parsed.valueOf()) ||
        parsed.toISOString().slice(0, 10) !== value
      )
        fail(field, 'expected a valid YYYY-MM-DD date');
      return value;
    };
    const links = (field: string): string[] => {
      const value = record[field];
      if (value === undefined) return [];
      if (
        !Array.isArray(value) ||
        !value.every((item: unknown) => typeof item === 'string' && item.trim())
      )
        return fail(field, 'expected a list of non-empty strings');
      return [...new Set<string>(value)];
    };
    const slug = text('slug');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
      fail('slug', 'use lowercase Latin words separated by hyphens');
    if (filenames.has(slug))
      fail('slug', `duplicate ${slug}, also in ${filenames.get(slug)}`);
    filenames.set(slug, filename);
    const published = record.published;
    if (typeof published !== 'boolean')
      return fail('published', 'expected true or false');
    const publishedAt = date('publishedAt');
    if (published && publishedAt > today)
      fail(
        'publishedAt',
        'future publication is not scheduled; use published: false until release',
      );
    const updatedAt =
      record.updatedAt === undefined ? undefined : date('updatedAt');
    if (updatedAt && (updatedAt < publishedAt || updatedAt > today))
      fail('updatedAt', 'must be between publishedAt and today');
    const coverImage = text('coverImage');
    if (
      !/^\/images\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(?:webp|avif|png|jpe?g)$/.test(
        coverImage,
      )
    )
      fail(
        'coverImage',
        'expected a local /images/... image without traversal or query',
      );
    const content = text('content');
    if (/^ {0,3}#\s+/m.test(content) || /^.+\n={3,}\s*$/m.test(content))
      fail('content', 'H1 belongs in title; use H2/H3 in Markdown');
    const relatedServices = links('relatedServices');
    for (const path of relatedServices)
      if (!servicePaths.includes(path))
        fail('relatedServices', `unknown service ${path}`);
    const category =
      record.category === undefined ? undefined : text('category');
    return {
      title: text('title'),
      slug,
      description: text('description'),
      publishedAt,
      published,
      coverImage,
      coverAlt: text('coverAlt'),
      content,
      relatedServices,
      relatedArticles: links('relatedArticles'),
      ...(category ? { category } : {}),
      ...(updatedAt ? { updatedAt } : {}),
    };
  });
  const publishedSlugs = new Set(
    articles
      .filter((article) => article.published)
      .map((article) => article.slug),
  );
  for (const article of articles.filter((article) => article.published)) {
    for (const slug of article.relatedArticles) {
      if (!publishedSlugs.has(slug) || slug === article.slug)
        throw new Error(
          `${filenames.get(article.slug)}: relatedArticles: ${slug} must refer to another published article`,
        );
    }
  }
  return articles;
}
