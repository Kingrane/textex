// app/components/YandexFloorAd.tsx
'use client';

import Script from 'next/script';
import { isYandexAdsEnabled, YANDEX_FLOOR_BLOCK_ID } from '@/lib/ads';

const YandexFloorAd: React.FC = () => {
  if (!isYandexAdsEnabled()) {
    return null;
  }

  return (
    <div className="mt-8 w-full max-w-lg">
      <Script
        id="yandex-floor-ad-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.yaContextCb = window.yaContextCb || [];
              window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                  blockId: '${YANDEX_FLOOR_BLOCK_ID}',
                  type: 'floorAd',
                  platform: 'desktop'
                });
              });
            `,
        }}
      />
    </div>
  );
};

export default YandexFloorAd;
