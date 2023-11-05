import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <section id={'hero'} className='bg-green-500'>
        <h1>section one</h1>
      </section>
      <section id={'stack'} className='bg-blue-500'>
        <h1>section two</h1>
      </section>
      <section id={'projects'} className='bg-red-500'>
        <h1>section three</h1>
        <div className='flex gap-4'>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
