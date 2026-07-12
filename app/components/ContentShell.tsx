// app/components/ContentShell.tsx
'use client';

import Link from 'next/link';
import { getThemeColors } from '@/lib/theme';
import { useI18n } from '@/lib/useI18n';
import SiteFooter from './SiteFooter';

type ContentShellProps = {
  title: string;
  children: React.ReactNode;
};

const ContentShell: React.FC<ContentShellProps> = ({ title, children }) => {
  const { t } = useI18n();
  const colors = getThemeColors(false);

  return (
    <main className={`flex min-h-screen flex-col items-center p-4 pt-10 pb-4 ${colors.pageBg}`}>
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 mb-4 px-3 py-2 text-sm font-bold border-4 ${colors.border} ${colors.get} text-[#11111B] shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
          style={{ ['--shadow-color' as string]: colors.shadow }}
        >
          ← {t.backHome}
        </Link>

        <article
          className={`w-full p-6 sm:p-8 space-y-5 ${colors.cardBg} border-4 ${colors.border} shadow-[8px_8px_0px_0px_var(--shadow-color)]`}
          style={{ ['--shadow-color' as string]: colors.shadow }}
        >
          <h1 className={`text-3xl font-black uppercase tracking-tight ${colors.text}`}>
            {title}
          </h1>
          <div className={`space-y-5 text-sm font-medium leading-relaxed ${colors.text}`}>
            {children}
          </div>
        </article>

        <SiteFooter isMocha={false} />
      </div>
    </main>
  );
};

export default ContentShell;
