import Script from 'next/script';
import React from 'react';

function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;
  return (
    <>
      <Script
        id='gtag'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
      `}
      </Script>
    </>
  );
}

export default Analytics;
