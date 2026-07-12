// app/contacts/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с автором qtxt через GitHub: баги, идеи и вопросы о сервисе.',
  alternates: { canonical: 'https://qqtxt.me/contacts' },
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
