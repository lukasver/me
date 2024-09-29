'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import About from './about';
import Contact from './contact';
import { Separator } from './ui/separator';
import Stack from './stack';
import Experience from './experience';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { cn, shallowPush } from '@/lib/utils';

const education = [
  {
    name: 'Fullstack web development bootcamp',
    company: 'Henry',
    date: 'August 2021 - December 2021 ',
    description: 'Remote intensive 4 months bootcamp.',
    href: 'https://soyhenry.com',
  },
  {
    name: 'AGILE MBA',
    company: 'LATAM Education',
    date: 'June 2020 - March 2021 ',
    description:
      'Executive Program in Agile Management. Top GPA of the class: 9.4/10',
    href: 'https://www.latameducation.net',
  },
  {
    name: 'Bachelor degree in Hotel Management',
    company: 'UCEL - Universidad del Centro Educativo Latinoamericano.',
    date: 'March 2008 - May 2012',
    description: 'GPA:  8.77 / 10 - Received the merit award.',
    href: 'https://www.ucel.edu.ar/',
  },
];

const tabs = [
  { name: 'about', label: 'About', content: <About /> },
  { name: 'experience', label: 'Experience', content: <Experience /> },
  {
    name: 'education',
    label: 'Education',
    content: <Experience data={education} />,
  },
  { name: 'stack', label: 'Stack', content: <Stack /> },
  { name: 'contact', label: 'Get in touch', content: <Contact /> },
] as const;

function HomeTabs({ tab = 'about' }: { tab?: string }) {
  const pathname = usePathname();
  const params = useSearchParams();

  const onTabChange = (value: string) => {
    const params = new URLSearchParams();
    params.set('tab', value);
    shallowPush({ pathname, params });
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
      <TabsList className='max-w-[320px] sm:max-w-none overflow-x-scroll justify-start sm:justify-center'>
        {tabs.map(({ name, label }) => (
          <TabsTrigger key={name} value={name}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator className='mt-2' />
      {tabs.map(({ name, content }) => {
        return (
          <TabsContent
            key={name}
            value={name}
            className={cn('flex w-full flex-1')}
          >
            {content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

export default HomeTabs;
