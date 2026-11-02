'use client';

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const LazyCal = dynamic(() => import('@/components/cal'), {
  ssr: false,
  loading: () => (
    <div className='flex gap-2 min-h-[calc(100%dvh-20%)] w-full justify-center'>
      <Skeleton className='h-96 w-44' />
      <Skeleton className='h-96 w-[30%]' />
      <Skeleton className='h-96 w-44' />
    </div>
  ),
});

export default LazyCal;
