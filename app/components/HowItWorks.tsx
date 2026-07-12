// app/components/HowItWorks.tsx
'use client';

import { getThemeColors } from '@/lib/theme';
import { useI18n } from '@/lib/useI18n';

type HowItWorksProps = {
  isMocha: boolean;
};

const HowItWorks: React.FC<HowItWorksProps> = ({ isMocha }) => {
  const { t } = useI18n();
  const colors = getThemeColors(isMocha);

  const steps = [
    { n: '1', title: t.howStep1Title, body: t.howStep1Body },
    { n: '2', title: t.howStep2Title, body: t.howStep2Body },
    { n: '3', title: t.howStep3Title, body: t.howStep3Body },
  ];

  return (
    <section
      className={`mt-8 w-full max-w-lg p-6 space-y-4 ${colors.cardBg} border-4 ${colors.border} shadow-[8px_8px_0px_0px_var(--shadow-color)]`}
      style={{ ['--shadow-color' as string]: colors.shadow }}
      aria-labelledby="how-it-works-title"
    >
      <h2 id="how-it-works-title" className={`text-xl font-black uppercase ${colors.text}`}>
        {t.howTitle}
      </h2>
      <p className={`text-sm font-medium ${colors.muted}`}>{t.howLead}</p>
      <ol className="space-y-3">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center border-2 ${colors.border} ${colors.share} text-sm font-black text-[#11111B]`}
            >
              {step.n}
            </span>
            <div>
              <p className={`font-bold ${colors.text}`}>{step.title}</p>
              <p className={`text-sm font-medium ${colors.muted}`}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={`text-sm font-medium ${colors.text}`}>{t.howLimits}</p>
    </section>
  );
};

export default HowItWorks;
