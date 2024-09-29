'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal?.('ui', {
        styles: { branding: { brandColor: '#3d3f67' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      calLink='lucasverdiell/15min'
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
export default CalComponent;
