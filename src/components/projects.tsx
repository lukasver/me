import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Card } from './ui/card';
import { ReactNode } from 'react';
import { Separator } from './ui/separator';

function Projects({ show = true }) {
  return !show ? (
    <p className='animate-fade-in h-[1.15em] font-head sm:text-6xl text-3xl text-primary dark:text-gradient -mt-14 drop-shadow-4xl'>
      Coming soon!
    </p>
  ) : (
    <Card className='animate-fade-in p-4 w-[90vw] lg:w-[800px] xl:w-full'>
      <Accordion
        type='single'
        collapsible
        className='w-full'
        defaultValue={accordionElements[0].value}
      >
        {accordionElements.map((el) => (
          <AccordionItem key={el.value} value={el.value}>
            <AccordionTrigger>{el.trigger}</AccordionTrigger>
            <AccordionContent>{el.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
}

const TriggerComponent = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className='flex flex-1 gap-4 items-center'>
      <picture>
        <Image
          className='rounded'
          src={src}
          alt={`${name}-logo`}
          width={32}
          height={32}
        />
      </picture>
      <h1 className='font-head'>{name}</h1>
    </div>
  );
};

const ContentComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='w-full'>{children}</div>;
};

//✅ ✨
const SmatContent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li className='mt-2'>
          Implemented automation end-to-end testing with{' '}
          <a href={'https://playwright.dev/'} rel='noopener nofollow noreferer'>
            Playwright
          </a>
        </li>
        <li>
          Successfully refactored whole frontend app from vanilla `Javascript`
          with{' '}
          <a href={'https://reactjs.org/'} rel='noopener nofollow noreferer'>
            React
          </a>{' '}
          to Typescript with{' '}
          <a href={'https://playwright.dev/'} rel='noopener nofollow noreferer'>
            NextJS
          </a>{' '}
          (pages router) with client side rendering:{' '}
          <a href={'https://app.smat.io/'} rel='noopener nofollow'>
            Smat app
          </a>
        </li>
        <li>
          Implemented auth module using{' '}
          <a href={'https://zitadel.com/'} rel='noopener nofollow'>
            Zitadel
          </a>{' '}
          cloud.
        </li>
        <li>
          In charge of create and maintain deployment pipelines with{' '}
          <a
            href={'https://github.com/features/actions'}
            rel='noopener nofollow noreferer'
          >
            Github Actions
          </a>
          ,{' '}
          <a href={'https://www.docker.com'} rel='noopener nofollow noreferer'>
            Docker
          </a>
          ,{' '}
          <a
            href={'https://www.portainer.io'}
            rel='noopener nofollow noreferer'
          >
            Portainer
          </a>
          ,{' '}
          <a href={'https://vercel.com'} rel='noopener nofollow noreferer'>
            Vercel
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com'}
            rel='noopener nofollow noreferer'
          >
            Google cloud
          </a>{' '}
          with different environments.
        </li>

        <li>
          Designed apps user stories and mockups{' '}
          <a href={'https://www.figma.com'} rel='noopener nofollow noreferer'>
            Figma
          </a>{' '}
          ready for development.{' '}
        </li>
        <li>
          Carried out sprint daily and weekly meetings, and sprint plannings
          using{' '}
          <a href={'https://www.github.com'} rel='noopener nofollow noreferer'>
            Github
          </a>{' '}
          projects.
        </li>
        <li>
          Coordinated backend and frontend teams to carry out new
          implementations considering requests from founders & users.{' '}
        </li>
        <li>
          Planned, developed & deployed an ICO dashboard for creating token pre
          sales. Used{' '}
          <a
            href={'https://www.postgresql.org'}
            rel='noopener nofollow noreferer'
          >
            Postgres
          </a>{' '}
          &{' '}
          <a href={'https://www.prisma.io'} rel='noopener nofollow noreferer'>
            Prisma ORM
          </a>{' '}
          with NextJS and SSR.
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <p className='mt-2'>
        QA Manual / Automation → Fullstack Developer → Tech Lead / Project
        Manager
      </p>
    </div>
  );
};

const accordionElements = [
  {
    value: 'item-1',
    trigger: <TriggerComponent name={'Smat'} src={'/assets/smat.png'} />,
    content: (
      <ContentComponent>
        <SmatContent />
      </ContentComponent>
    ),
  },
  {
    value: 'item-2',
    trigger: <TriggerComponent name={'Henry'} src={'/assets/henry.png'} />,
    content: 'TODO',
  },
  {
    value: 'item-3',
    trigger: <TriggerComponent name={'UCEL'} src={'/assets/ucel.jpg'} />,
    content: 'TODO',
  },
  {
    value: 'item-4',
    trigger: (
      <TriggerComponent name={'Latam Airlines'} src={'/assets/latam.png'} />
    ),
    content: 'TODO',
  },
];

export default Projects;
