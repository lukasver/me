'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import About from './about';
import Projects from './projects';
import Stack from './stack';
import Contact from './contact';
import { Separator } from './ui/separator';

const tabs = [
  { name: 'about', label: 'About', content: About },

  { name: 'contact', label: 'Get in touch', content: Contact },
];

function HomeTabs({ tab = 'about' }: { tab?: string }) {
  const { replace } = useRouter();
  return (
    <Tabs
      defaultValue={tab}
      className='h-full p-4 rounded-xl border bg-card text-card-foreground shadow'
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
          <TabsContent key={name} value={name}>
            <Comp />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

export default HomeTabs;
