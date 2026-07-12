// app/contacts/page.tsx
'use client';

import ContentShell from '@/app/components/ContentShell';
import { GITHUB_URL } from '@/lib/content';
import { useI18n } from '@/lib/useI18n';

export default function ContactsPage() {
  const { t } = useI18n();

  return (
    <ContentShell title={t.contactsPageTitle}>
      <p>{t.contactsIntro}</p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block py-3 px-4 font-bold border-4 border-[#1A1A2E] bg-[#4ECDC4] text-[#11111B] shadow-[4px_4px_0px_0px_#1A1A2E] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
      >
        {t.contactsGithub}
      </a>
      <p className="text-[#6B6B7B]">{t.contactsGithubHint}</p>
      <p>{t.contactsEmailHint}</p>
      <p className="font-mono text-xs break-all">{GITHUB_URL}</p>
    </ContentShell>
  );
}
