'use client';

import { useEffect } from 'react';
//@ts-expect-error
import Cal, { getCalApi } from '@calcom/embed-react';

function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns?.['15min']?.('ui', {
        styles: { branding: { brandColor: '#3d3f67' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      namespace='15min'
      calLink='lucasverdiell/15min'
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
export default CalComponent;
