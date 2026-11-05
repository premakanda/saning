import { useRef, useState } from 'react';
import { ContactForm } from './ContactForm';
import { Icon } from './Icon';
import styles from './ContactModal.module.css';

export function ContactModal() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [version, setVersion] = useState(0);
  return (
    <dialog
      id="contact-modal"
      ref={dialog}
      aria-labelledby="modal-title"
      className={styles.dialog}
      onClose={() => setVersion((value) => value + 1)}
    >
      <div className={styles.heading}>
        <h2 id="modal-title">Вызвать мастера</h2>
        <button
          type="button"
          aria-label="Закрыть форму"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <Icon name="close" />
        </button>
      </div>
      <ContactForm key={version} />
    </dialog>
  );
}
