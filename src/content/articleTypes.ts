import type { IllustrationMedia } from './media';

export type Article = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  published: boolean;
  category?: string;
  updatedAt?: string;
  coverImage: string;
  coverAlt: string;
  content: string;
  relatedServices: string[];
  relatedArticles: string[];
};

export type ArticleSummary = Omit<Article, 'content'> & {
  path: string;
  cover: IllustrationMedia;
};

export type PublishedArticle = ArticleSummary & { content: string };
