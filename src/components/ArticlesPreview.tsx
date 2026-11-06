import styles from '../pages/HomePage.module.css';
import { Icon } from './Icon';
export function ArticlesPreview() {
  return (
    <section
      id="articles"
      className={`${styles.section} ${styles.articleBand}`}
      aria-labelledby="articles-title"
    >
      <div>
        <h2 id="articles-title">О сантехнике и отоплении — понятным языком</h2>
        <p>Материалы готовятся к публикации.</p>
      </div>
      <a href="/articles/">
        Раздел статей <Icon name="arrow-up-right" />
      </a>
    </section>
  );
}
