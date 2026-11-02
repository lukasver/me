import { CertificateModalBody } from '@/components/certificate-modal';
import Modal from '@/components/modal';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

export default async function ModalTypePage({
  params,
  searchParams,
}: PageProps<{ type: string }>) {
  const { title, description, doc } = await searchParams;
  const { type } = await params;
  if (!type) {
    notFound();
  }

  return (
    <Modal title={title} description={description}>
      {type === 'certifications' ? <CertificateModalBody doc={doc} /> : null}
    </Modal>
  );
}
