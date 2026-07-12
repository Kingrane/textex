// lib/theme.ts

export type ThemeMode = 'light' | 'mocha';

export type ThemeColors = {
  pageBg: string;
  cardBg: string;
  panelBg: string;
  border: string;
  text: string;
  muted: string;
  share: string;
  get: string;
  purple: string;
  inputBg: string;
  codeBg: string;
  buttonBg: string;
  shadow: string;
};

export function getThemeColors(isMocha: boolean): ThemeColors {
  return {
    pageBg: isMocha ? 'bg-[#11111B]' : 'bg-[#FFF8E1]',
    cardBg: isMocha ? 'bg-[#1E1E2E]' : 'bg-[#FFFBF0]',
    panelBg: isMocha ? 'bg-[#181825]' : 'bg-[#FFFBF0]',
    border: isMocha ? 'border-[#11111B]' : 'border-[#1A1A2E]',
    text: isMocha ? 'text-[#CDD6F4]' : 'text-[#1A1A2E]',
    muted: isMocha ? 'text-[#A6ADC8]' : 'text-[#6B6B7B]',
    share: isMocha ? 'bg-[#F38BA8]' : 'bg-[#FF6B6B]',
    get: isMocha ? 'bg-[#94E2D5]' : 'bg-[#4ECDC4]',
    purple: isMocha ? 'bg-[#CBA6F7]' : 'bg-[#C9B1FF]',
    inputBg: isMocha ? 'bg-[#1E1E2E]' : 'bg-[#FFFBF0]',
    codeBg: isMocha ? 'bg-[#11111B]' : 'bg-[#FFF5D6]',
    buttonBg: isMocha ? 'bg-[#313244]' : 'bg-[#FAF7F2]',
    shadow: isMocha ? '#11111B' : '#1A1A2E',
  };
}
