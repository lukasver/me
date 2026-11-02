import { Suspense } from 'react';

import { ModalImage } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';

const CERTIFICATE_DOC_SRC: Record<string, string> = {
  latam: '/assets/latam-certificate.png',
  henry: '/assets/henry-certificate.png',
};

function resolveDocKey(
  doc: string | string[] | undefined
): string | undefined {
  if (Array.isArray(doc)) {
    return doc[0];
  }
  return doc;
}

export function getCertificateSrc(
  doc: string | string[] | undefined
): string | undefined {
  const key = resolveDocKey(doc);
  if (!key) {
    return undefined;
  }
  return CERTIFICATE_DOC_SRC[key];
}

export function CertificateModalBody({
  doc,
}: {
  doc: string | string[] | undefined;
}) {
  const src = getCertificateSrc(doc);
  if (!src) {
    return null;
  }

  return (
    <Suspense
      fallback={<Skeleton className='p-4 rounded-md h-[300px] w-[300px]' />}
    >
      <ModalImage
        src={src}
        alt='certificate-image'
        fill
        className='p-4 rounded-md w-[90vw] md:w-[75vw] aspect-video'
      />
    </Suspense>
  );
}
