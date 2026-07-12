// app/components/SiteFooter.tsx
'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/useI18n';
import { getThemeColors } from '@/lib/theme';

type SiteFooterProps = {
  isMocha?: boolean;
};

const SiteFooter: React.FC<SiteFooterProps> = ({ isMocha = false }) => {
  const { t } = useI18n();
  const colors = getThemeColors(isMocha);

  const links = [
    { href: '/about', label: t.navAbout },
    { href: '/faq', label: t.navFaq },
    { href: '/privacy', label: t.navPrivacy },
    { href: '/contacts', label: t.navContacts },
  ];

  return (
    <footer className={`mt-10 w-full max-w-lg pb-8 ${colors.text}`}>
      <nav
        className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-4 ${colors.border} ${colors.panelBg} p-3 shadow-[4px_4px_0px_0px_var(--shadow-color)]`}
        style={{ ['--shadow-color' as string]: colors.shadow }}
        aria-label={t.footerNavLabel}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-bold underline-offset-2 hover:underline ${colors.text}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className={`mt-3 text-center text-xs font-medium ${colors.muted}`}>
        {t.footerNote}
      </p>
    </footer>
  );
};

export default SiteFooter;
