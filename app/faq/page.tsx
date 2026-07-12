// app/faq/page.tsx
'use client';

import ContentShell from '@/app/components/ContentShell';
import { getFaqItems } from '@/lib/content';
import { useI18n } from '@/lib/useI18n';

export default function FaqPage() {
  const { locale, t } = useI18n();
  const items = getFaqItems(locale);

  return (
    <ContentShell title={t.faqPageTitle}>
      {items.map((item) => (
        <section key={item.question}>
          <h2 className="text-base font-black uppercase mb-1">{item.question}</h2>
          <p>{item.answer}</p>
        </section>
      ))}
    </ContentShell>
  );
}
