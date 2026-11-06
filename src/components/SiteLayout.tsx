import type { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ContactModal } from './ContactModal';
import heroImage from '../assets/images/hero-boiler-room.png';
import styles from './SiteLayout.module.css';
export function SiteLayout({ children }: { children: ReactNode }) {
  const isHome = useLocation().pathname === '/';
  return (
    <div className={styles.site}>
      {isHome && (
        <div className={styles.homeBackdrop} aria-hidden="true">
          <img
            src={heroImage}
            width={1672}
            height={941}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
      )}
      <SiteHeader />
      {children}
      <SiteFooter />
      <ContactModal />
    </div>
  );
}
