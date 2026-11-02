'use client';

import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const LazyDevIcons = dynamic(() => import('@/components/dev-icons'), {
  ssr: false,
  loading: () => <Skeleton className='h-6 w-6 rounded-full' />,
});

export default LazyDevIcons;
