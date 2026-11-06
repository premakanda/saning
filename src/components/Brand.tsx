import styles from './Brand.module.css';
export function Brand() {
  return (
    <span className={styles.brand}>
      <svg
        className={styles.mark}
        viewBox="0 0 36 44"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M18 2C14 9 4 19 4 27a14 14 0 0 0 28 0C32 19 22 9 18 2Z"
          fill="currentColor"
        />
        <path
          d="M12 29v-7a6 6 0 0 1 12 0v7M12 25h12"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span>
        Аква<span className={styles.accent}>Лайн</span>Профи
      </span>
    </span>
  );
}
