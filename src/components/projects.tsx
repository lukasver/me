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
import { Icons } from './icons';
import Link from 'next/link';

function Projects({ show = true }) {
  return !show ? (
    <p className='animate-fade-in h-[1.15em] font-head sm:text-6xl text-3xl text-primary dark:text-gradient -mt-14 drop-shadow-4xl'>
      Coming soon!
    </p>
  ) : (
    <Card className='animate-fade-in p-4 w-[90vw] lg:w-[800px] xl:w-full mb-28 md:mb-0'>
      <Accordion
        type='single'
        collapsible
        className='w-full'
        defaultValue={accordionElements[0].value}
      >
        {accordionElements.map((el) => (
          <AccordionItem key={el.value} value={el.value}>
            <AccordionTrigger>{el.trigger}</AccordionTrigger>
            <AccordionContent>
              <ContentComponent>{el.content}</ContentComponent>
            </AccordionContent>
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
          width={40}
          height={40}
        />
      </picture>
      <h1 className='font-head text-lg'>{name}</h1>
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
        <li>
          In charge of coordinating a team of 4 backend and frontend developers
          to carry out implementations considering requests from founders &
          feedback from users, working with AGILE practices & iterations
          ensuring high quality deliverables.{' '}
        </li>
        <li className='mt-2'>
          Successfully refactored whole frontend app from Javascript with
          vanilla{' '}
          <a href={'https://reactjs.org/'} rel='noopener nofollow noreferer'>
            React
          </a>{' '}
          to Typescript with{' '}
          <a href={'https://playwright.dev/'} rel='noopener nofollow noreferer'>
            NextJS
          </a>{' '}
          (pages router) with code splitting & client side rendering
          considerably reducing bugs, loading times & web vitals metrics:{' '}
          <a href={'https://app.smat.io/'} rel='noopener nofollow'>
            Smat app
          </a>
        </li>
        <li>
          Implemented automation end-to-end testing with{' '}
          <a href={'https://playwright.dev/'} rel='noopener nofollow noreferer'>
            Playwright
          </a>{' '}
          leading to an important reduction in bugs & regression issues and
          improving deployment pipelines.
        </li>
        <li>
          Planned and contributing in the creation of the company's data
          warehouse using{' '}
          <a
            href={'https://cloud.google.com/storage'}
            rel='noopener nofollow noreferer'
          >
            Cloud Storage
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com/functions'}
            rel='noopener nofollow noreferer'
          >
            Cloud functions
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com/bigquery'}
            rel='noopener nofollow noreferer'
          >
            BigQuery
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com/looker'}
            rel='noopener nofollow noreferer'
          >
            Looker Studio
          </a>{' '}
          &{' '}
          <a
            href={'https://analytics.google.com/'}
            rel='noopener nofollow noreferer'
          >
            Google Analytics
          </a>{' '}
        </li>

        <li>
          Migrated in-house auth module to external provider using{' '}
          <a href={'https://zitadel.com/'} rel='noopener nofollow'>
            Zitadel
          </a>{' '}
          cloud to improving overall security processes & allowing for
          machine-to-machine communication between apps and services.
        </li>
        <li>
          In charge of creating and maintaining deployment pipelines with{' '}
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
            Google Cloud
          </a>{' '}
          with different environments.
        </li>
        <li>
          <a
            href={'https://cloud.google.com'}
            rel='noopener nofollow noreferer'
          >
            Google Cloud
          </a>{' '}
          & IAM admin.
        </li>
        <li>
          Developed a multiplatform mobile app using{' '}
          <a
            href={'https://https://reactnative.dev'}
            rel='noopener nofollow noreferer'
          >
            React Native
          </a>{' '}
          &{' '}
          <a href={'https://expo.dev/eas'} rel='noopener nofollow noreferer'>
            Expo EAS
          </a>
          :{' '}
          <a href={'https://smatapp.app.link/site'} rel='noopener nofollow'>
            Smat mobile app
          </a>
          .{' '}
        </li>

        <li>
          Designed app's user stories and{' '}
          <a href={'https://www.figma.com'} rel='noopener nofollow noreferer'>
            Figma
          </a>{' '}
          mockups ready for development.{' '}
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
          with NextJS and SSR:{' '}
          <a href={'https://token.smat.io'} rel='noopener nofollow'>
            Smat token dashboard
          </a>{' '}
          .
        </li>
        <li>
          Implemented an AI chat system that bases its responses from a LLM
          model with feeded context from custom document files using
          <a href={'https://openai.com/'} rel='noopener nofollow'>
            OpenAI
          </a>{' '}
          &{' '}
          <a href={'https://llamaindex.ai'} rel='noopener nofollow'>
            Llamaindex
          </a>
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>QA Manual / Automation</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Fullstack Developer</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Tech Lead / Project Manager</p>
      </div>
    </div>
  );
};

const HenryComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <div className='flex flex-col gap-2 list-inside [&>p>a]:text-secondary [&>p>a]:font-semibold [&>li>a]:font-semibold'>
        <p className='mt-2'>
          Developed{' '}
          <a href={'https://talent.soyhenry.com'} rel='noopener nofollow'>
            Henry Talent
          </a>{' '}
          , a management platform to help recruiters find IT talent easily. Made
          from scratch to production working with <b>Typescript</b>,
          <b> React</b>,<b> Redux</b>, <b> PostgreSQL</b>, <b> Sequelize</b>,
          <b> OpenAPI</b>, <b> testing (Mocha/Chai)</b>, <b> CI/CD </b>
          pipelines between other technologies, frameworks and libraries.
          <br />
          <br /> Always maintaining an AGILE mindset and working with Scrum.
        </p>
      </div>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Teaching assistant</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Fullstack developer</p>
      </div>
    </div>
  );
};

const UcelComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <div className='flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <p className='mt-2'>
          Professor in the “Transportation Systems” course within the Bachelor
          of Tourism program. Thanks to an agreement between UCEL & Amadeus I
          got certified as trainer for the Rosario (Santa Fe, Argentina) region.
          In this role, I was responsible for planning, organizing, and
          conducting courses on Amadeus Selling Platform Connect, including
          reservations, fares, ticketing, and reissue. Some of the audiences I
          have taught include:
        </p>
        <ul className='list-disc list-inside'>
          <li>University students (UCEL & UNR)</li>
          <li>Members of the Regional Chamber for Travel Agencies (CAVyT)</li>
          <li>Staff members from airlines at ROS Airport (GOL & LATAM)</li>
          <li>
            Local clients of Amadeus, including travel agencies like OLA, Carey,
            Grupo3, etc...
          </li>
        </ul>
        <p>
          Overall, I have conducted both onsite and online courses for a wide
          audiences of over 200 students and professionals in Rosario area.
        </p>
      </div>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Passenger service Agent</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>ICPT (In Charge of Procedures and Trainings)</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Airport supervisor</p>
      </div>
    </div>
  );
};

const LatamComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <div className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <p className='mt-2'>
          In charge of coordinating passenger service teams of arround 14 people
          and working alongside involved actors such as Customs and Immigrations
          offices, airport authorities, airlines, etc. so as to guarantee an
          efficient reception, turn-arround, and dispatch of international
          flights at ROS International Airport while delivering an outstanding
          passenger service following airline's standards.
        </p>
        <p>
          Distinction in conflict resolutions, contingencies, and critical
          situations. Networking, local KPI analysis, and continuous
          improvement.
        </p>
        <p>
          In charge of procedures and trainings (ICPT), coordinating
          certification, courses, & revalidations for the airline's airport
          staff.
        </p>
        <p>
          Was awarded with a{' '}
          <Link
            className={'font-bold text-secondary'}
            href={'/modal/certifications?doc=latam'}
          >
            Service Leader national{' '}
          </Link>
          award by the airline management.
        </p>
      </div>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Passenger Service Lead</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>ICPT</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Airport supervisor</p>
      </div>
    </div>
  );
};

const accordionElements = [
  {
    value: 'item-1',
    trigger: <TriggerComponent name={'Smat'} src={'/assets/smat.png'} />,
    content: <SmatContent />,
  },
  {
    value: 'item-2',
    trigger: <TriggerComponent name={'Henry'} src={'/assets/henry.png'} />,
    content: <HenryComponent />,
  },
  {
    value: 'item-3',
    trigger: <TriggerComponent name={'UCEL'} src={'/assets/ucel.jpg'} />,
    content: <UcelComponent />,
  },
  {
    value: 'item-4',
    trigger: (
      <TriggerComponent name={'Latam Airlines'} src={'/assets/latam.png'} />
    ),
    content: <LatamComponent />,
  },
];

export default Projects;
