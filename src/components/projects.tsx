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
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold mt-2'>
        <li>
          Lead full stack developer and cloud engineer at a Swiss finance
          startup, remote since Sep 2021. I take features from design to
          production on web and mobile.
        </li>
        <li>
          I lead a team of 4 backend and frontend developers. I set the code
          standards, the monorepo layout and the microservice patterns, and run
          the sprints (dailies, weeklies, planning) on{' '}
          <a
            href={'https://github.com/features/issue-tracking'}
            rel='noopener nofollow noreferrer'
          >
            GitHub Projects
          </a>
          .
        </li>
        <li>
          Rewrote the{' '}
          <a href={'https://app.smat.io/'} rel='noopener nofollow noreferrer'>
            main app
          </a>{' '}
          from vanilla JavaScript React to TypeScript and{' '}
          <a href={'https://nextjs.org/'} rel='noopener nofollow noreferrer'>
            Next.js
          </a>{' '}
          (pages router). Code splitting cut load times and the bug count went
          down considerably.
        </li>
        <li>
          Added end-to-end tests with{' '}
          <a
            href={'https://playwright.dev/'}
            rel='noopener nofollow noreferrer'
          >
            Playwright
          </a>{' '}
          and{' '}
          <a href={'https://vitest.dev/'} rel='noopener nofollow noreferrer'>
            Vitest
          </a>{' '}
          and wired them into the deploy pipeline, so regressions get caught
          before prod.
        </li>
        <li>
          Built the{' '}
          <a
            href={'https://reactnative.dev/'}
            rel='noopener nofollow noreferrer'
          >
            React Native
          </a>{' '}
          and{' '}
          <a href={'https://expo.dev/eas'} rel='noopener nofollow noreferrer'>
            Expo EAS
          </a>{' '}
          <a
            href={'https://smatapp.app.link/site'}
            rel='noopener nofollow noreferrer'
          >
            mobile app
          </a>{' '}
          for iOS and Android.
        </li>
        <li>
          Shipped more products on the same stack: a multi-store admin
          dashboard, an{' '}
          <a href={'https://ams.smat.io/'} rel='noopener nofollow noreferrer'>
            asset-management SaaS
          </a>
          , and a{' '}
          <a href={'https://token.smat.io/'} rel='noopener nofollow noreferrer'>
            token presale dashboard
          </a>{' '}
          with smart-contract integration, built on Postgres,{' '}
          <a href={'https://www.prisma.io/'} rel='noopener nofollow noreferrer'>
            Prisma
          </a>{' '}
          and Next.js SSR.
        </li>
        <li>
          Moved our in-house auth to{' '}
          <a href={'https://zitadel.com/'} rel='noopener nofollow noreferrer'>
            Zitadel
          </a>
          . The main reason was machine-to-machine auth between our services,
          which the old module couldn&apos;t do cleanly.
        </li>
        <li>
          Designed the company data warehouse on Google Cloud:{' '}
          <a
            href={'https://cloud.google.com/storage'}
            rel='noopener nofollow noreferrer'
          >
            Cloud Storage
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com/functions'}
            rel='noopener nofollow noreferrer'
          >
            Cloud Functions
          </a>
          ,{' '}
          <a
            href={'https://cloud.google.com/bigquery'}
            rel='noopener nofollow noreferrer'
          >
            BigQuery
          </a>
          , and{' '}
          <a
            href={'https://cloud.google.com/looker'}
            rel='noopener nofollow noreferrer'
          >
            Looker Studio
          </a>{' '}
          for reporting.
        </li>
        <li>
          Own the infra: CI/CD with{' '}
          <a
            href={'https://github.com/features/actions'}
            rel='noopener nofollow noreferrer'
          >
            GitHub Actions
          </a>{' '}
          and{' '}
          <a href={'https://www.docker.com'} rel='noopener nofollow noreferrer'>
            Docker
          </a>
          , infrastructure as code with{' '}
          <a
            href={'https://www.terraform.io/'}
            rel='noopener nofollow noreferrer'
          >
            Terraform
          </a>{' '}
          across several environments, plus{' '}
          <a href={'https://vercel.com'} rel='noopener nofollow noreferrer'>
            Vercel
          </a>
          , Portainer and Google Cloud IAM admin.
        </li>
        <li>
          Built an AI chat assistant that answers from our own documents, using{' '}
          <a href={'https://openai.com/'} rel='noopener nofollow noreferrer'>
            OpenAI
          </a>{' '}
          and{' '}
          <a
            href={'https://www.llamaindex.ai/'}
            rel='noopener nofollow noreferrer'
          >
            LlamaIndex
          </a>
          .
        </li>
        <li>
          Write the user stories and{' '}
          <a href={'https://www.figma.com'} rel='noopener nofollow noreferrer'>
            Figma
          </a>{' '}
          mockups before anything gets built.
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>QA Manual / Automation</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Full Stack Developer</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Tech Lead</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Lead Full Stack Developer / Cloud Engineer</p>
      </div>
    </div>
  );
};

const HenryComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold mt-2'>
        <li>
          Built{' '}
          <a
            href={'https://talent.soyhenry.com'}
            rel='noopener nofollow noreferrer'
          >
            Henry Talent
          </a>{' '}
          from scratch to production, as part of a core team of 4. It&apos;s a
          platform where recruiters find developers coming out of the Henry
          bootcamp.
        </li>
        <li>
          We worked in Scrum with TDD and CI on{' '}
          <a
            href={'https://github.com/features/actions'}
            rel='noopener nofollow noreferrer'
          >
            GitHub Actions
          </a>
          , and kept the API contract in OpenAPI so frontend and backend could
          move in parallel.
        </li>
        <li>
          Before that I was a teaching assistant. I led daily stand-ups and
          mentored 15+ bootcamp students on CS fundamentals.
        </li>
        <li>
          Stack: TypeScript, JavaScript, React, Redux, PostgreSQL, Sequelize,
          OpenAPI, Mocha/Chai.
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Teaching assistant</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
};

const UcelComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold mt-2'>
        <li>
          Professor of &quot;Transportation Systems&quot; in the Bachelor of
          Tourism, Mar 2017 to Sep 2022. I designed the curriculum myself.
        </li>
        <li>
          Certified Amadeus trainer for the Rosario and Santa Fe region through
          a UCEL and Amadeus partnership (Amadeus Train the Trainers, 2017).
        </li>
        <li>
          Planned and taught Amadeus Selling Platform Connect courses
          (reservations, fares, ticketing, reissue), onsite and online, to 200+
          people.
        </li>
        <li>
          Audiences included:
          <ul className='list-[circle] list-inside ml-6'>
            <li>University students (UCEL and UNR)</li>
            <li>Members of the Regional Chamber for Travel Agencies (CAVyT)</li>
            <li>Airline staff at ROS Airport (GOL and LATAM)</li>
            <li>
              Local Amadeus clients, including travel agencies like OLA, Carey
              and Grupo3
            </li>
          </ul>
        </li>
        <li>
          Teaching is a big part of how I lead dev teams now: explain the why,
          then let people run.
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Professor</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Amadeus Certified Trainer</p>
      </div>
    </div>
  );
};

const LatamComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold mt-2'>
        <li>
          Seven years at Rosario International Airport (ROS), Nov 2013 to Aug
          2020, ending as airport passenger service supervisor.
        </li>
        <li>
          Ran passenger service teams of around 14 people on international
          flights: reception, turnaround and dispatch. Ground ops is
          coordination: customs, immigration, the airport authority and other
          airlines all have to line up on a tight clock.
        </li>
        <li>
          Handled the contingencies: delays, cancellations and conflicts on the
          floor. I used local KPIs to fix what kept repeating.
        </li>
        <li>
          As ICPT (In Charge of Procedures and Training), I ran certifications,
          courses and revalidations for the airport staff.
        </li>
        <li>
          Worked the systems end to end: sales (Amadeus ARD, Sabre Interact),
          check-in (Amadeus DCS CM, Sabre Interact) and lost luggage
          (WorldTracer).
        </li>
        <li>
          Named a national{' '}
          <Link
            className={'font-bold text-secondary'}
            href={'/modal/certifications?doc=latam'}
          >
            Service Leader
          </Link>{' '}
          by LATAM Argentina.
        </li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Passenger Service Agent</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Lead Passenger Service Agent / ICPT</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Airport Passenger Service Supervisor</p>
      </div>
    </div>
  );
};

const FreelanceComponent: React.FC<unknown> = () => {
  return (
    <div>
      <h3 className='font-head text-secondary'>Achievements:</h3>
      <Separator />
      <p className='mt-2'>
        Since 2024 I also take on freelance and consulting work, mostly AI,
        automation and web3 projects for small companies.
      </p>
      <h4 className='font-head font-bold mt-2'>
        RAG knowledge base and support chatbot (2025 to present)
      </h4>
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li>
          A RAG knowledge base and support chatbot for a client, answering
          customer questions from a curated set of the company&apos;s own
          documents.
        </li>
        <li>
          Answers stay grounded in the client&apos;s documentation, not in the
          model&apos;s general knowledge.
        </li>
        <li>
          The hard part isn&apos;t the LLM, it&apos;s trust. A big part of the
          work has been hardening the test suite, so the pipeline can keep
          changing with confidence.
        </li>
        <li>Stack: TypeScript, Bun, Postgres, pgvector, pg-boss.</li>
      </ul>
      <h4 className='font-head font-bold mt-2'>
        Facturador: AFIP invoicing automation (2022 to present)
      </h4>
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li>
          AFIP, Argentina&apos;s tax authority, makes you issue invoices one by
          one in its web portal. I built a system that issues them for a client
          in bulk and keeps going when the portal doesn&apos;t cooperate.
        </li>
        <li>
          The client gets a web app to load and track invoices. Behind it sit an
          API, a queue and workers on Cloudflare Workers and Queues, so each
          invoice is its own job with retries and error handling instead of one
          long script.
        </li>
        <li>
          The workers drive the AFIP portal with headless Playwright over the
          Chrome DevTools Protocol. Each invoice gets a timeout so one slow page
          doesn&apos;t stall the rest. Once the flow reaches the final submit,
          the timeout is disarmed on purpose, so it never cuts off an invoice
          that&apos;s actually being issued.
        </li>
        <li>
          I open-sourced the automation layer:{' '}
          <a
            href={'https://github.com/lukasver/facturador'}
            rel='noopener nofollow noreferrer'
          >
            github.com/lukasver/facturador
          </a>{' '}
          (MIT).
        </li>
        <li>
          Stack: TypeScript, TanStack Start, SQLite, Cloudflare Workers and
          Queues, Playwright, Chrome DevTools Protocol.
        </li>
      </ul>
      <h4 className='font-head font-bold mt-2'>
        Cerveza HB: storefront for a craft brewery (2024)
      </h4>
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li>
          Landing page and online store for a craft brewery:{' '}
          <a href={'https://cervezahb.com'} rel='noopener nofollow noreferrer'>
            cervezahb.com
          </a>
          .
        </li>
        <li>
          Payments through{' '}
          <a href={'https://stripe.com'} rel='noopener nofollow noreferrer'>
            Stripe
          </a>{' '}
          and{' '}
          <a
            href={'https://www.mercadopago.com'}
            rel='noopener nofollow noreferrer'
          >
            Mercado Pago
          </a>
          .
        </li>
        <li>
          The interesting bit is WhatsApp. I integrated the WhatsApp Business
          Cloud API in coexistence mode, so automated sales and support messages
          go out from the same number the brewery already uses in its WhatsApp
          app. They didn&apos;t have to change numbers or give up the app.
        </li>
        <li>
          Stack: Next.js, Stripe, Mercado Pago, WhatsApp Business Cloud API.
        </li>
      </ul>
      <h4 className='font-head font-bold mt-2'>
        Token sale launchpad for a tokenized-asset company (2024 to present)
      </h4>
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li>
          Designed and built the private-sale launchpad for a tokenized-asset
          company&apos;s token offering.
        </li>
        <li>
          Multi-chain smart-contract integration through{' '}
          <a href={'https://thirdweb.com'} rel='noopener nofollow noreferrer'>
            Thirdweb
          </a>
          , plus one payment processor for both fiat and crypto, so buyers
          don&apos;t need a wallet to take part.
        </li>
        <li>
          Also built their public docs site, statically generated with{' '}
          <a href={'https://nextra.site'} rel='noopener nofollow noreferrer'>
            Nextra
          </a>{' '}
          on Next.js, so it&apos;s fast and easy to keep up to date in Markdown.
        </li>
        <li>
          Stack: Next.js, TypeScript, Thirdweb, Nextra, shadcn/ui, Tailwind CSS
          v4.
        </li>
      </ul>
      <h4 className='font-head font-bold mt-2'>
        NFT marketplace for a web3 game (2024 to present)
      </h4>
      <ul className='list-disc list-inside flex flex-col gap-2 [&>li>a]:text-secondary [&>li>a]:font-semibold'>
        <li>
          Built solo, end to end: the NFT marketplace integration for a web3
          game.
        </li>
        <li>
          Players can export items they earned in the game and mint them as NFTs
          they actually own.
        </li>
        <li>
          I used{' '}
          <a href={'https://thirdweb.com'} rel='noopener nofollow noreferrer'>
            Thirdweb
          </a>{' '}
          with a mix of standard (ERC-20, ERC-721) and custom smart contracts.
          The standard ones cover tokens and items, and the custom ones cover
          the game logic the standards don&apos;t.
        </li>
        <li>Stack: Thirdweb, smart contracts (ERC-20, ERC-721), TypeScript.</li>
      </ul>
      <h3 className='font-head text-secondary mt-2'>Progression:</h3>
      <Separator />
      <div className='mt-2 font-head font-bold flex flex-row gap-2 items-center'>
        <p>Freelance Developer</p>
        <Icons.chevronRight className='size-5 text-secondary' />
        <p>Independent Consultant</p>
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
      <TriggerComponent name={'LATAM Airlines'} src={'/assets/latam.png'} />
    ),
    content: <LatamComponent />,
  },
  {
    value: 'item-5',
    trigger: (
      <TriggerComponent
        name={'Freelance / Independent'}
        src={'/assets/memoji.png'}
      />
    ),
    content: <FreelanceComponent />,
  },
];

export default Projects;
