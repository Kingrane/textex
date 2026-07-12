// app/privacy/page.tsx
'use client';

import ContentShell from '@/app/components/ContentShell';
import { getPrivacySections } from '@/lib/content';
import { useI18n } from '@/lib/useI18n';

export default function PrivacyPage() {
  const { locale, t } = useI18n();
  const sections = getPrivacySections(locale);

  return (
    <ContentShell title={t.privacyPageTitle}>
      <p className="text-[#6B6B7B]">
        {locale === 'ru' ? 'Дата обновления: 12 июля 2026' : 'Last updated: July 12, 2026'}
      </p>
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-base font-black uppercase mb-1">{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </ContentShell>
  );
}
