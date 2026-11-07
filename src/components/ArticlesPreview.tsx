import { Link } from 'react-router';
import styles from '../pages/HomePage.module.css';
import { Icon } from './Icon';
import { Illustration } from './Illustration';
import { media } from '../content/media';
import glow from './CardGlow.module.css';
export function ArticlesPreview() {
  return (
    <section
      id="articles"
      className={`${styles.section} ${styles.articleBand} ${glow.card} ${glow.alwaysLit}`}
      aria-labelledby="articles-title"
    >
      <div>
        <h2 id="articles-title">Об инженерных системах — понятным языком</h2>
        <p>
          Отопление, водоснабжение и канализация: как устроены системы, на что
          обратить внимание при выборе оборудования и подготовке к монтажу.
          Больше полезной информации — в разделе статей.
        </p>
        <Link className={styles.articleLink} to="/articles/">
          Перейти к статьям <Icon name="arrow-up-right" />
        </Link>
      </div>
      <Illustration image={media.articles} showCaption={false} />
    </section>
  );
}
