import type { IllustrationMedia } from '../content/media';
import styles from './Illustration.module.css';
export function Illustration({
  image,
  priority = false,
  showCaption = true,
}: {
  image: IllustrationMedia;
  priority?: boolean;
  showCaption?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {showCaption && (
        <figcaption>
          Инженерная визуализация · не фотография выполненного объекта
        </figcaption>
      )}
    </figure>
  );
}
