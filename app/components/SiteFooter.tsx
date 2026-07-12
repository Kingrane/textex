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
    <footer className={`mt-8 w-full max-w-lg px-0.5 pb-8 sm:mt-10 ${colors.text}`}>
      <nav
        className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-2 border-4 ${colors.border} ${colors.panelBg} p-2.5 sm:gap-x-3 sm:p-3 shadow-[4px_4px_0px_0px_var(--shadow-color)]`}
        style={{ ['--shadow-color' as string]: colors.shadow }}
        aria-label={t.footerNavLabel}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-sm px-1.5 py-1 text-xs font-bold underline-offset-2 hover:underline sm:text-sm ${colors.text}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className={`mt-3 px-2 text-center text-[11px] font-medium leading-snug sm:text-xs ${colors.muted}`}>
        {t.footerNote}
      </p>
    </footer>
  );
};

export default SiteFooter;
