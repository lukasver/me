'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { cn, shallowPush } from '@/lib/utils';
import dynamic from 'next/dynamic';

// The contact form (react-hook-form + zod) only loads once its tab opens.
const Contact = dynamic(() => import('./contact'), {
  loading: () => <Skeleton className='h-[280px] w-full rounded-md' />,
});

const tabMeta = [
  { name: 'about', label: 'About' },
  { name: 'experience', label: 'Experience' },
  { name: 'education', label: 'Education' },
  { name: 'stack', label: 'Stack' },
  { name: 'contact', label: 'Get in touch' },
] as const;

type TabName = (typeof tabMeta)[number]['name'];

const isTabName = (value: string | null): value is TabName =>
  tabMeta.some(({ name }) => name === value);

/** Server-rendered tab panels, passed in so they stay out of the client bundle. */
export type HomeTabsSlots = Record<Exclude<TabName, 'contact'>, ReactNode>;

function HomeTabs(slots: HomeTabsSlots) {
  const pathname = usePathname();
  // The page is static, so the ?tab= param is read on the client after mount.
  const [tab, setTab] = useState<TabName>('about');
  const [initialTab, setInitialTab] = useState<TabName>('about');
  const [contactLoaded, setContactLoaded] = useState(false);

  const onTabChange = (value: string) => {
    if (!isTabName(value)) return;
    setTab(value);
    if (value === 'contact') setContactLoaded(true);
    const params = new URLSearchParams();
    params.set('tab', value);
    shallowPush({ pathname, params });
  };

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('tab');
    if (isTabName(fromUrl) && fromUrl !== 'about') {
      setTab(fromUrl);
      setInitialTab(fromUrl);
      if (fromUrl === 'contact') setContactLoaded(true);
    }
  }, []);

  const panels: Record<TabName, ReactNode> = {
    ...slots,
    contact: contactLoaded ? <Contact /> : null,
  };

  return (
    <Tabs
      onValueChange={onTabChange}
      value={tab}
      className={cn(
        'h-full p-4 rounded-xl border bg-card text-card-foreground shadow shadow-primary/50 w-full sm:max-h-[420px] overflow-y-scroll no-scrollbar',
        initialTab === 'about' && 'overflow-hidden'
      )}
    >
      <TabsList className='max-w-[320px] sm:max-w-none overflow-x-scroll justify-start sm:justify-center'>
        {tabMeta.map(({ name, label }) => (
          <TabsTrigger key={name} value={name}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator className='mt-2' />
      {tabMeta.map(({ name }) => (
        <TabsContent
          key={name}
          value={name}
          forceMount
          className={cn('flex w-full flex-1 data-[state=inactive]:hidden')}
        >
          {panels[name]}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default HomeTabs;
