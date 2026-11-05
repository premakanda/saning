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
      <p id={`${id}-notice`} className={styles.notice}>
        Демонстрационная форма. Не вводите реальные персональные данные:
        отправка пока не подключена.
      </p>
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
        aria-describedby={`${id}-hint ${id}-notice`}
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
      <p id={`${id}-hint`} className={styles.hint}>
        Беларусь: +375 и 9 цифр; допустим формат 80 и 9 цифр.
      </p>
      <label htmlFor={`${id}-comment`}>
        Комментарий <span>(необязательно)</span>
      </label>
      <textarea id={`${id}-comment`} rows={3} maxLength={1500} />
      <button className={styles.button} type="submit">
        Проверить заполнение
      </button>
      <p className={styles.hint}>
        Кнопка только проверяет поля. Отправка появится после подключения
        доставки и политики обработки данных.
      </p>
      <p role="status">{message}</p>
    </form>
  );
}
