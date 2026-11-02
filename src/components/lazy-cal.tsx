'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const loadCal = () => import('@/components/cal');

const Cal = dynamic(loadCal, {
  ssr: false,
  loading: () => (
    <div
      role='status'
      aria-label='Loading calendar'
      className='flex gap-2 min-h-96 w-full justify-center'
    >
      <Skeleton className='h-96 w-44' />
      <Skeleton className='h-96 w-[30%]' />
      <Skeleton className='h-96 w-44' />
    </div>
  ),
});

/**
 * The Cal.com embed pulls about 1.5 MB of third-party JS, so it only loads
 * after the visitor asks for it. Hover or focus warms up the chunk.
 */
function LazyCal() {
  const [open, setOpen] = useState(false);

  if (open) return <Cal />;

  return (
    <section
      aria-labelledby='book-call-heading'
      className='flex min-h-96 w-full max-w-xl flex-col items-center justify-center gap-4 rounded-xl border bg-card p-8 text-center text-card-foreground shadow shadow-primary/50'
    >
      <h1 id='book-call-heading' className='font-head text-2xl'>
        Let&apos;s talk
      </h1>
      <p className='text-sm text-muted-foreground sm:text-base'>
        Pick a time that works for you. The calendar opens right here.
      </p>
      <Button
        size='lg'
        onClick={() => setOpen(true)}
        onPointerEnter={loadCal}
        onFocus={loadCal}
      >
        Book a 15-min call
      </Button>
    </section>
  );
}

export default LazyCal;
