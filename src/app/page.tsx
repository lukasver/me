import Container from '@/components/container';
import { Card, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import code from '../../public/code.jpeg';
import HomeTabs from '@/components/home-tabs';
import { PageProps } from '@/types';
import { siteConfig } from '@/config/site';

export default function RootPage({ searchParams }: PageProps) {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-scroll'>
      <section id={'hero'}>
        <Container className='flex flex-col gap-2 mb-12'>
          <div className='flex justify-center mb-12'>
            <h1 className='text-2xl font-bold'>
              Hi, I'm {siteConfig.name} 👋!
            </h1>
          </div>
          <div className='flex items-stretch justify-center gap-2'>
            <Card className='min-w-[500px] p-4'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={code}
                  alt='Cover picture'
                  fill={true}
                  className='rounded-md object-cover'
                />
              </AspectRatio>
            </Card>
            <HomeTabs tab={searchParams.tab && String(searchParams.tab)} />
          </div>
        </Container>
      </section>
      <section id={'stack'} className='bg-slate-900'>
        <h1>section two</h1>
      </section>
      <section id={'projects'}>
        <h1>section three</h1>
        <div>
          <iframe
            src={'https://stage.smat.io/public/partnerships/sphere'}
            referrerPolicy='no-referrer-when-downgrade'
            sandbox='allow-scripts allow-same-origin allow-popups'
            allow='(src https://sphere.swiss https://smat.io)'
            loading='lazy'
            width='300'
            height='600'
            title='Sphere @ Smat'
            style={{ border: 'none' }}
          />
        </div>
      </section>
    </main>
  );
}
