import Link from 'next/link';
import { Separator } from './ui/separator';

function Experience() {
  return (
    <div className='flex flex-col gap-2 justify-between w-full'>
      {experience.map((exp, index) => {
        return (
          <>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                  <p className='font-bold font-head'>{exp.name}</p>
                  <span className='text-secondary font-bold '>@</span>
                  <Link
                    href={exp.href}
                    target='_blank'
                    rel='noopener nofollow'
                    className='font-bold text-sm hover:text-primary transition-colors duration-300 ease-in-out'
                  >
                    {exp.company}
                  </Link>
                </div>
                <p className='font-sans text-sm'>{exp.date}</p>
              </div>
              <p className='text-sm sm:whitespace-pre'>{exp.description}</p>
            </div>
            {index === experience?.length - 1 ? null : (
              <Separator className='mb-2' />
            )}
          </>
        );
      })}
    </div>
  );
}

const experience = [
  {
    name: 'Fullstack developer',
    company: 'Smat',
    date: 'September 2021 - Present ',
    description:
      'Tech Lead & Project Manager. Remote - 🇨🇭 Finance startup.\nFullstack web developer.',
    href: 'https://smat.io',
  },
  {
    name: 'Fullstack developer',
    company: 'Henry',
    date: 'December 2020 - December 2021',
    description: 'Fullstack web developer. Remote - 🇦🇷 Ed-tech company.',
    href: 'https://soyhenry.com',
  },
  {
    name: 'Professor / Trainer',
    company: 'UCEL - Universidad del Centro Educativo Latinoamericano.',
    date: 'March 2017 - September 2022',
    description:
      'Transportation systems professor / Amadeus GDS Trainer - 🇦🇷 University.',
    href: 'https://ucel.edu.ar',
  },
  {
    name: 'Airport passenger service supervisor',
    company: 'LATAM Airlines Group',
    date: 'November 2013 - August 2020',
    description:
      'Airport supervisor. Rosario International Airport, Argentina. - 🇦🇷🇨🇱🇧🇷 Airline megacarrier.\nIn charge of airpor procedures and trainings.',
    href: 'https://latam.com',
  },
];

export default Experience;
