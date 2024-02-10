import { ReactNode, Ref, forwardRef } from 'react';

import { cn } from '@/lib/utils';

function Container(
  {
    children,
    className = '',
  }: {
    children: ReactNode;
    className?: string;
  },
  ref: Ref<HTMLDivElement>
) {
  return (
    <main ref={ref} className={cn('mx-auto md:container', className)}>
      {children}
    </main>
  );
}

export default forwardRef(Container);
