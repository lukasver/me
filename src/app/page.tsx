import Container from '@/components/container';
import HomeTabs from '@/components/home-tabs';
import { siteConfig } from '@/config/site';
import Carousel from '@/components/carousel';
import DevIcons from '@/components/lazy-dev-icons';
import Projects from '@/components/projects';
import About from '@/components/about';
import Experience from '@/components/experience';
import Stack from '@/components/stack';
import p1 from '../../public/assets/1.webp';
import p2 from '../../public/assets/2.webp';
import p3 from '../../public/assets/3.webp';
import p4 from '../../public/assets/4.webp';
import p5 from '../../public/assets/5.webp';

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

const sources = [p1, p2, p3, p4, p5].map((src, i) => ({
  src,
  alt: `Lucas photo ${i + 1}`,
  placeholder: 'blur' as const,
}));

export default function RootPage() {
  return (
    <>
      <main className='min-h-screen h-[unset] md:h-screen lg:snap-y lg:snap-mandatory overflow-y-scroll'>
        <section id='hero' className='dark:bg-gradient h-full'>
          <Container className='flex flex-col gap-4 xl:gap-8 2xl:gap-20 xl:-mt-20 2xl:-mt-40 px-4 mt-4 sm:mt-0'>
            <div className='flex justify-center lg:justify-normal items-center'>
              <div className='flex flex-row justify-between gap-4 items-center'>
                <div className='flex gap-2 flex-1 text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl font-head overflow-hidden whitespace-nowrap'>
                  <span className='animate-fade-in'>Hi, I'm</span>
                  <div className='w-max md:animate-typing overflow-hidden whitespace-nowrap border-r-4 text-primary'>
                    <h1>{siteConfig.name}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-stretch justify-center gap-2 xl:gap-10'>
              <div className='grow-0 shrink-0 sm:basis-[420px] sm:max-w-[420px] self-center'>
                <Carousel sources={sources} />
              </div>
              <div className='flex grow animate-fade-in-3'>
                <HomeTabs
                  about={<About />}
                  experience={<Experience />}
                  education={<Experience data={education} />}
                  stack={<Stack />}
                />
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
        </section>
      </main>
      <DevIcons />
    </>
  );
}
