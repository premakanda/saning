import styles from './MessengerLinks.module.css';

export function MessengerLinks({
  includeInstagram = false,
  compact = false,
}: {
  includeInstagram?: boolean;
  compact?: boolean;
}) {
  const channels = includeInstagram
    ? ['Telegram', 'Viber', 'WhatsApp', 'Instagram']
    : ['Telegram', 'Viber', 'WhatsApp'];
  return (
    <div
      className={styles.group}
      aria-label="Мессенджеры: ссылки пока не предоставлены"
    >
      {channels.map((name) => (
        <span
          key={name}
          className={styles.pending}
          role="img"
          aria-label={`${name}: ссылка пока не предоставлена`}
          title={`${name}: ссылка пока не предоставлена`}
        >
          <span
            aria-hidden="true"
            className={`${styles.icon} ${styles[name.toLowerCase()]}`}
          />
        </span>
      ))}
      {!compact && <span className={styles.hint}>Ссылки уточняются</span>}
    </div>
  );
}
