import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { imageSize } from 'image-size';
import { services } from '../content/services';
import type { PublishedArticle } from '../content/articleTypes';
import { validateArticles } from './validateArticles';

export function readPublishedArticles(): PublishedArticle[] {
  const directory = resolve('src/content/articles');
  const sources = readdirSync(directory)
    .filter((filename) => /\.ya?ml$/.test(filename))
    .sort()
    .map((filename) => ({
      filename: `src/content/articles/${filename}`,
      source: readFileSync(resolve(directory, filename), 'utf8'),
    }));
  const articles = validateArticles(sources, {
    today: new Date().toISOString().slice(0, 10),
    servicePaths: services.map((service) => service.path),
  });
  return articles
    .map((article, index) => {
      const source = sources[index];
      if (!source) throw new Error('Article source was lost during validation');
      const { filename } = source;
      const file = resolve('public', `.${article.coverImage}`);
      if (!existsSync(file))
        throw new Error(
          `${filename}: coverImage: missing ${article.coverImage}`,
        );
      const { width, height } = (() => {
        try {
          return imageSize(readFileSync(file));
        } catch (error) {
          throw new Error(
            `${filename}: coverImage: cannot read ${article.coverImage}`,
            { cause: error },
          );
        }
      })();
      const extension = extname(article.coverImage);
      const base = article.coverImage.slice(0, -extension.length);
      const variants = [480, 800, 1200]
        .filter(
          (size) =>
            size < width &&
            existsSync(resolve('public', `.${base}-${size}.webp`)),
        )
        .map((size) => `${base}-${size}.webp ${size}w`);
      return {
        ...article,
        path: `/articles/${article.slug}/`,
        cover: {
          src: article.coverImage,
          alt: article.coverAlt,
          width,
          height,
          srcSet: [...variants, `${article.coverImage} ${width}w`].join(', '),
          sizes:
            '(min-width: 75rem) 48rem, (min-width: 48rem) calc(100vw - 5rem), calc(100vw - 2rem)',
        },
      };
    })
    .filter((article) => article.published)
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt) ||
        a.slug.localeCompare(b.slug),
    );
}

export function articleSummary({
  content: _content,
  ...summary
}: PublishedArticle) {
  void _content;
  return summary;
}
