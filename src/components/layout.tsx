import { SiteHeader } from '@/components/site-header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className={cn(className, 'flex-1')}>{children}</main>
    </>
  );
}
