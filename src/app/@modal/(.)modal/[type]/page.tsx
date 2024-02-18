import Modal, { ModalImage } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function ModalTypePage({
  params,
  searchParams,
}: PageProps<{ type: string }>) {
  const { title, description, doc } = searchParams;
  const src = mapping[String(doc)];
  if (!params?.type) {
    notFound();
  }
  const { type } = params;

  return (
    <Modal title={title} description={description}>
      {type === 'certifications' ? (
        <Suspense
          fallback={<Skeleton className='p-4 rounded-md h-[300px] w-[300px]' />}
        >
          <ModalImage
            src={src}
            alt={'certificate-image'}
            fill
            className='p-4 rounded-md w-[90vw] md:w-[75vw] aspect-video'
          />
        </Suspense>
      ) : null}
    </Modal>
  );
}

const mapping: { [x: string]: string } = {
  latam: '/assets/latam-certificate.png',
  henry: '/assets/henry-certificate.png',
};
