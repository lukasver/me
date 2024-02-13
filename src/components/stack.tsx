import { cn, getPseudoRandomNumber } from '@/lib/utils';

function Stack() {
  return (
    <div className='grid-dynamic-25 sm:grid-dynamic w-full flex-1 md:mt-2 lg:my-6'>
      {stacks.map(({ name, label, type }) => {
        const icon = <i className={`text-secondary devicon-${name}-plain`} />;
        const mapping = {
          '1': 'animate-fade-in',
          '2': 'animate-fade-in-2',
          '3': 'animate-fade-in-3',
        } as const;
        const key = `${getPseudoRandomNumber(3) ?? 1}`;
        return (
          <div
            className={cn(
              'flex items-center justify-start gap-2',
              mapping[key as keyof typeof mapping]
            )}
            key={name}
          >
            {icon}
            <div className='flex flex-col'>
              <span className='font-head'>{label}</span>
              <i className='text-xs text-jade-300'>{type}</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const stacks = [
  // Languages
  { name: 'typescript', label: 'Typescript', type: 'Language' },
  // Frontend
  { name: 'nextjs', label: 'Next.js', type: 'Fullstack' },
  {
    name: 'react',
    label: 'React',
    type: 'Frontend',
  },
  {
    name: 'vuejs',
    label: 'Vue',
    type: 'Frontend',
  },
  { name: 'tailwindcss', label: 'Tailwind CSS', type: 'Frontend' },
  { name: 'materialui', label: 'Material-UI', type: 'Frontend' },
  { name: 'storybook', label: 'Storybook', type: 'Frontend' },
  // Backend
  { name: 'nestjs', label: 'Nest', type: 'Backend' },
  { name: 'prisma', label: 'Prisma', type: 'ORM' },
  { name: 'sequelize', label: 'Sequelize', type: 'ORM' },
  { name: 'postgresql', label: 'PostgreSQL', type: 'Database' },
  { name: 'mysql', label: 'MySQL', type: 'Database' },
  // Runtime
  { name: 'nodejs', label: 'Node.js', type: 'Runtime' },
  { name: 'bun', label: 'Bun', type: 'Runtime' },
  // Infra
  { name: 'docker', label: 'Docker', type: 'Infrastructure' },
  { name: 'portainer', label: 'Portainer', type: 'Infrastructure' },
  // Cloud
  { name: 'googlecloud', label: 'GCP', type: 'Cloud' },

  // Frameworks / tools
  { name: 'git', label: 'Git', type: 'Tools' },
  // DevOps
  { name: 'github', label: 'GitHub actions', type: 'Tools' },
  // Testing
  { name: 'jest', label: 'Jest', type: 'Unit testing' },
  { name: 'mocha', label: 'Mocha', type: 'Unit testing' },
  { name: 'playwright', label: 'Playwright', type: 'E2E testing' },
  // Data
  { name: 'bigquery', label: 'BigQuery', type: 'Data' },
  { name: 'looker', label: 'Looker Studio', type: 'Data' },
  { name: 'google', label: 'Analytics', type: 'Data' },
  // Mobile
  { name: 'react', label: 'React Native', type: 'Mobile' },
  { name: 'expo', label: 'Expo/Eas', type: 'Mobile' },
  { name: 'marketplace', label: 'Marketplaces', type: 'Mobile' },
  // Design
  { name: 'figma', label: 'Figma', type: 'Design' },
  // AI
  { name: 'openai', label: 'OpenAI', type: 'AI Prompting' },
];

export default Stack;
