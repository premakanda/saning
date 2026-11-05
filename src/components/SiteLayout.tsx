import type { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ContactModal } from './ContactModal';
import styles from './SiteLayout.module.css';
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {(import.meta.env.DEV ||
        import.meta.env.VITE_LOCAL_PROTOTYPE === 'true') && (
        <p className={styles.preview}>
          Локальный просмотр · отправка заявок не подключена
        </p>
      )}
      <SiteHeader />
      {children}
      <SiteFooter />
      <ContactModal />
    </>
  );
}
