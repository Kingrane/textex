// app/about/page.tsx
'use client';

import ContentShell from '@/app/components/ContentShell';
import { getAboutSections, GITHUB_URL } from '@/lib/content';
import { useI18n } from '@/lib/useI18n';

export default function AboutPage() {
  const { locale, t } = useI18n();
  const sections = getAboutSections(locale);

  return (
    <ContentShell title={t.aboutPageTitle}>
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-base font-black uppercase mb-1">{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-2 py-2 px-4 font-bold border-4 border-[#1A1A2E] bg-[#4ECDC4] text-[#11111B] shadow-[4px_4px_0px_0px_#1A1A2E] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
      >
        GitHub
      </a>
    </ContentShell>
  );
}
