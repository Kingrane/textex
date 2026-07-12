// app/faq/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Частые вопросы о qtxt: как поделиться текстом, сколько хранится код, лимиты размера и анонимность.',
  alternates: { canonical: 'https://qqtxt.me/faq' },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
