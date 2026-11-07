import styles from './Brand.module.css';
import { contacts } from '../config/contacts';
import mark from '../assets/brand/aquatechpro-mark-48.webp';
import markLarge from '../assets/brand/aquatechpro-mark-96.webp';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`${styles.brand} ${compact ? styles.compact : ''}`}
      role="img"
      aria-label={contacts.brand}
    >
      <img
        className={styles.mark}
        src={mark}
        srcSet={`${mark} 48w, ${markLarge} 96w`}
        sizes="28px"
        width={48}
        height={58}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <span className={styles.wordmark} aria-hidden="true" />
    </span>
  );
}
