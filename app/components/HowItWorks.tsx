// app/components/HowItWorks.tsx
'use client';

import { useId, useState } from 'react';
import { getThemeColors } from '@/lib/theme';
import { useI18n } from '@/lib/useI18n';

type HowItWorksProps = {
  isMocha: boolean;
};

const HowItWorks: React.FC<HowItWorksProps> = ({ isMocha }) => {
  const { t } = useI18n();
  const colors = getThemeColors(isMocha);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const steps = [
    { n: '1', title: t.howStep1Title, body: t.howStep1Body },
    { n: '2', title: t.howStep2Title, body: t.howStep2Body },
    { n: '3', title: t.howStep3Title, body: t.howStep3Body },
  ];

  return (
    <section
      className={`mt-6 w-full max-w-lg ${colors.cardBg} border-4 ${colors.border} shadow-[6px_6px_0px_0px_var(--shadow-color)]`}
      style={{ ['--shadow-color' as string]: colors.shadow }}
      aria-labelledby="how-it-works-title"
    >
      <button
        type="button"
        id="how-it-works-title"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 ${colors.text}`}
      >
        <span className="text-base font-black uppercase tracking-tight sm:text-lg">
          {t.howTitle}
        </span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center border-2 ${colors.border} ${colors.get} text-[#11111B] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`space-y-4 border-t-4 ${colors.border} px-4 py-4 sm:px-5`}>
            <p className={`text-sm font-medium ${colors.muted}`}>{t.howLead}</p>
            <ol className="space-y-3">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border-2 ${colors.border} ${colors.share} text-sm font-black text-[#11111B]`}
                  >
                    {step.n}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-bold ${colors.text}`}>{step.title}</p>
                    <p className={`text-sm font-medium leading-snug ${colors.muted}`}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={`text-sm font-medium ${colors.text}`}>{t.howLimits}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
