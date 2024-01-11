import '@styles/globals.css';
import Script from 'next/script';
import { draftMode } from 'next/headers';
import { catamaran, dosis } from '@lib/fonts/fonts';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    const { isEnabled } = draftMode();

    return (
      <html lang="en" className={`${catamaran.variable} ${dosis.variable}`}>
        <body>{children}</body>
        {isEnabled && <Script src="/live-preview.mjs" />}
      </html>
    )
  }