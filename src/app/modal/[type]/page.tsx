import Modal from '@/components/modal';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function ModalTypePage({
  params,
  searchParams,
}: PageProps<{ type: string }>) {
  if (!params?.type) {
    notFound();
  }
  const { type } = params;
  const { title, description } = searchParams;

  return (
    <Modal title={title} description={description}>
      {type === 'certifications' ? (
        <Suspense fallback={'loading...'}>
          <div>
            <h1>content</h1>
          </div>
        </Suspense>
      ) : null}
    </Modal>
  );
}
