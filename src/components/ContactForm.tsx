import { useId, useState } from 'react';
import { validatePhone } from '../lib/validatePhone';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const id = useId();
  const [message, setMessage] = useState('');
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setMessage('Отправка отключена. Данные никуда не переданы.');
      }}
    >
      <label htmlFor={`${id}-name`}>
        Имя <span>(необязательно)</span>
      </label>
      <input id={`${id}-name`} autoComplete="given-name" maxLength={80} />
      <label htmlFor={`${id}-phone`}>
        Телефон <span>(обязательно)</span>
      </label>
      <input
        id={`${id}-phone`}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        placeholder="+375 (__) ___-__-__"
        onInput={(event) => {
          const input = event.currentTarget;
          input.setCustomValidity(
            validatePhone(input.value)
              ? ''
              : 'Укажите номер в формате +375 и 9 цифр или 80 и 9 цифр.',
          );
          setMessage('');
        }}
      />
      <label htmlFor={`${id}-comment`}>
        Комментарий <span>(необязательно)</span>
      </label>
      <textarea id={`${id}-comment`} rows={3} maxLength={1500} />
      <button className={styles.button} type="submit">
        Отправить
      </button>
      <p role="status">{message}</p>
    </form>
  );
}
