import { Skeleton } from '@/components/ui/skeleton';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const CalComponent = dynamic(() => import('@/components/cal'), {
  loading: () => (
    <div className='flex gap-2 min-h-[calc(100%dvh-20%)] w-full justify-center'>
      <Skeleton className='h-96 w-44' />
      <Skeleton className='h-96 w-[30%]' />
      <Skeleton className='h-96 w-44' />
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className='p-6 container grid place-items-center mt-8'>
      <CalComponent />
    </div>
  );
}
