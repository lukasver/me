import LazyCal from '@/components/lazy-cal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className='p-6 container grid place-items-center mt-8'>
      <LazyCal />
    </div>
  );
}
