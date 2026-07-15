// app/layout.tsx
import type { Metadata } from 'next';
import { Comfortaa, Inter } from 'next/font/google';
import Script from 'next/script';
import { isYandexAdsEnabled } from '@/lib/ads';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
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
  const adsEnabled = isYandexAdsEnabled();

  return (
    <html lang="ru">
      <body className={`${comfortaa.variable} ${comfortaa.className} ${inter.variable}`}>
        {adsEnabled && (
          <>
            <Script
              id="yandex-rtb-loader"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.yaContextCb=window.yaContextCb||[]`,
              }}
            />
            <Script
              src="https://yandex.ru/ads/system/context.js"
              async
              strategy="beforeInteractive"
            />
          </>
        )}

        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=110760679','ym');

ym(110760679,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/110760679"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}
