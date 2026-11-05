import styles from './PhotoSlot.module.css';

type PhotoSlotProps = {
  label: string;
  photo?: { src: string; alt: string; width: number; height: number };
  priority?: boolean;
};

export function PhotoSlot({ label, photo, priority = false }: PhotoSlotProps) {
  return (
    <div className={styles.frame}>
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      ) : (
        <p className={styles.placeholder}>
          {label}
          <span>Место для реальной фотографии</span>
        </p>
      )}
    </div>
  );
}
