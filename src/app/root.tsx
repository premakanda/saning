import type { ReactNode } from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';
import '../styles/global.css';
import { SiteLayout } from '../components/SiteLayout';
import styles from './RootLayout.module.css';
import { themeBootstrap } from '../lib/themeBootstrap';

export function Layout({ children }: { children: ReactNode }) {
  const isDesignPreview = useLocation().pathname.startsWith('/design-preview/');
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.VITE_NOINDEX === 'true' && (
          <meta name="robots" content="noindex, follow" />
        )}
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <Meta />
        <Links />
      </head>
      <body>
        <a className={styles.skipLink} href="#main-content">
          К содержимому
        </a>
        {isDesignPreview ? children : <SiteLayout>{children}</SiteLayout>}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
