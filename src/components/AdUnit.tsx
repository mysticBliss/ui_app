import React from 'react';
import { useAdsense } from '../lib/adsense';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  style?: React.CSSProperties;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', style }) => {
  useAdsense();

  return (
    <div className="ad-container my-4">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={process.env.VITE_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;