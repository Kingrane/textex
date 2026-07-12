// lib/ads.ts

/** Yandex RTB is off by default. Set NEXT_PUBLIC_YANDEX_ADS=1 after RSЯ approval. */
export function isYandexAdsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_YANDEX_ADS === '1';
}

export const YANDEX_FLOOR_BLOCK_ID = 'R-A-17962443-2';
