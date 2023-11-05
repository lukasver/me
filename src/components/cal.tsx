'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
//@ts-expect-error
import Cal, { getCalApi } from '@calcom/embed-react';

function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <div className='container'>
      <Cal
        calLink='lucasverdiell/30min'
        style={{ height: '100%', overflow: 'scroll' }}
      />
    </div>
  );
}

export default CalComponent;
