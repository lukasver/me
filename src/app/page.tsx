import Container from '@/components/container';
import HomeTabs from '@/components/home-tabs';
import { PageProps } from '@/types';
import { siteConfig } from '@/config/site';
import Carousel from '@/components/carousel';
import { getPseudoRandomNumber } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import Projects from '@/components/projects';

const DevIcons = dynamic(() => import('@/components/dev-icons'), {
  ssr: false,
  loading: () => <Skeleton className='h-6 w-6 rounded-full' />,
});

export default function RootPage({ searchParams }: PageProps) {
  return (
    <>
      <main className='min-h-screen h-[unset] md:h-screen lg:snap-y lg:snap-mandatory overflow-y-scroll'>
        <section id='hero' className='dark:bg-gradient h-full'>
          <Container className='flex flex-col gap-4 xl:gap-8 2xl:gap-20 xl:-mt-20 2xl:-mt-40 px-4 mt-4 sm:mt-0'>
            <div className='flex justify-center lg:justify-normal'>
              <div className='flex flex-row justify-between gap-4 items-center'>
                <div className='flex gap-2 flex-1 text-3xl md:text-5xl xl:text-5xl 2xl:text-8xl font-head overflow-hidden whitespace-nowrap'>
                  <span>Hi, I'm</span>
                  <div className='w-max md:animate-typing overflow-hidden whitespace-nowrap border-r-4 text-primary'>
                    <h1>{siteConfig.name}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-stretch justify-center gap-2 xl:gap-10 animate-fade-in-2'>
              <div className='grow-0 shrink-0 sm:basis-[420px] sm:max-w-[420px] self-center'>
                <Carousel
                  sources={Array.from({ length: 5 }).map(() => ({
                    src: `/assets/${getPseudoRandomNumber(5)}.webp`,
                    alt: `Lucas photo`,
                    height: 420,
                    width: 420,
                  }))}
                />
              </div>
              <div className='flex grow animate-fade-in-3'>
                <HomeTabs tab={searchParams.tab && String(searchParams.tab)} />
              </div>
            </div>
          </Container>
        </section>
        <section
          id={'projects'}
          className='min-h-full h-fit dark:bg-gradient-bottom grid place-content-center xl:place-content-stretch pt-[140px] xl:pt-[80px] 2xl:pt-0'
        >
          <Container className='w-full xl:w-[75%]'>
            <Projects />
          </Container>
          {/* <div>
          <iframe
            src={'https://app.smat.io/public/partnerships/sphere'}
            referrerPolicy='no-referrer-when-downgrade'
            sandbox='allow-scripts allow-same-origin allow-popups'
            loading='lazy'
            width='300'
            height='600'
            title='Sphere @ Smat'
            style={{ border: 'none' }}
          />
        </div>
        <div>
          <iframe
            src={'https://app.smat.io/public/partnerships/sphere?bg=off'}
            referrerPolicy='no-referrer-when-downgrade'
            sandbox='allow-scripts allow-same-origin allow-popups'
            loading='lazy'
            width='1080'
            height='380'
            title='Sphere @ Smat'
            style={{ border: 'none' }}
          />
        </div> */}
        </section>
      </main>
      <DevIcons />
    </>
  );
}
