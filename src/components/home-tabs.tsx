'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import About from './about';
import Contact from './contact';
import { Separator } from './ui/separator';
import Stack from './stack';
import Experience from './experience';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'about', label: 'About', content: About },
  { name: 'experience', label: 'Experience', content: Experience },
  { name: 'stack', label: 'Stack', content: Stack },

  { name: 'contact', label: 'Get in touch', content: Contact },
] as const;

function HomeTabs({ tab = 'about' }: { tab?: string }) {
  const { push } = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const onTabChange = (value: string) => {
    const params = new URLSearchParams();
    params.set('tab', value);
    push(pathname + `?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    // set tab from url on initial render if it exists
    if (params.get('tab') && params.get('tab') !== tab) {
      onTabChange(params.get('tab') || 'about');
    }
  }, []);
  return (
    <Tabs
      onValueChange={onTabChange}
      defaultValue={tab}
      className={cn(
        'h-full p-4 rounded-xl border bg-card text-card-foreground shadow shadow-primary/50 w-full sm:max-h-[420px] overflow-y-scroll no-scrollbar',
        tab === 'about' && 'overflow-hidden'
      )}
    >
      <TabsList>
        {tabs.map(({ name, label }) => (
          <TabsTrigger key={name} value={name}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator className='mt-2' />
      {tabs.map(({ name, content }) => {
        const Comp = content || null;
        return (
          <TabsContent
            key={name}
            value={name}
            className={cn('flex w-full flex-1')}
          >
            <Comp />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

export default HomeTabs;
