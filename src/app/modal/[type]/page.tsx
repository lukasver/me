import Modal from '@/components/modal';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function ModalTypePage({
  params,
  searchParams,
}: PageProps<{ type: string }>) {
  const { type } = await params;
  if (!type) {
    notFound();
  }
  const { title, description } = await searchParams;

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
