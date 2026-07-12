// app/layout.tsx
import type { Metadata } from 'next';
import { Comfortaa, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-comfortaa',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qqtxt.me'),
  title: {
    default: 'qtxt — поделиться текстом по короткому коду',
    template: '%s | qtxt',
  },
  description:
    'Бесплатный анонимный обмен текстом: вставь текст, получи короткий код, открой на другом устройстве. Без регистрации. Текст хранится 10 минут.',
  keywords: [
    'поделиться текстом',
    'текст по коду',
    'временный текст онлайн',
    'share text online',
    'paste by code',
    'qtxt',
  ],
  authors: [{ name: 'qtxt' }],
  creator: 'qtxt',
  applicationName: 'qtxt',
  alternates: {
    canonical: 'https://qqtxt.me',
  },
  openGraph: {
    title: 'qtxt — поделиться текстом по короткому коду',
    description:
      'Вставь текст, получи короткий код, открой на другом устройстве. Без регистрации, 10 минут.',
    url: 'https://qqtxt.me',
    siteName: 'qtxt',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'qtxt — share text via short code',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'qtxt — поделиться текстом по короткому коду',
    description:
      'Вставь текст, получи короткий код, открой на другом устройстве. Без регистрации, 10 минут.',
    images: ['/preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: '6Xu4pyUJkcU3bEFDuEwuwBunJqOH1b1q19Yyue9pK18',
    yandex: 'ba6e446af5df7a4c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${comfortaa.variable} ${comfortaa.className} ${inter.variable}`}>
        {/* Yandex.RTB Loader Code */}
        <Script id="yandex-rtb-loader" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `window.yaContextCb=window.yaContextCb||[]`
        }} />
        <Script src="https://yandex.ru/ads/system/context.js" async strategy="beforeInteractive" />

        {children}
      </body>
    </html>
  );
}
