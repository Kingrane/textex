// app/privacy/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности qtxt: какие данные обрабатываются, срок хранения 10 минут, cookie и реклама.',
  alternates: { canonical: 'https://qqtxt.me/privacy' },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
