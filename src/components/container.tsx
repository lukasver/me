import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn('mx-auto md:container', className)}>{children}</main>
  );
}

export default Container;
