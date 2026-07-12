// app/about/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О сервисе',
  description:
    'qtxt — анонимный обмен текстом по короткому коду. Без регистрации, хранение 10 минут, лимит 20 KB.',
  alternates: { canonical: 'https://qqtxt.me/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
