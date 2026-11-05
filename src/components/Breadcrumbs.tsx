import { absoluteUrl, serializeJsonLd } from '../lib/seo';
import styles from './Breadcrumbs.module.css';
export type BreadcrumbItem = { label: string; path: string };
export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
  return (
    <>
      <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}>
        <ol>
          {items.map((item, index) => (
            <li key={item.path}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.path}>{item.label}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
    </>
  );
}
