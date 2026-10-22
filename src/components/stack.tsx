import { cn, getPseudoRandomNumber } from '@/lib/utils';

function Stack() {
  return (
    <div className='grid-dynamic-25 sm:grid-dynamic w-full flex-1 md:mt-2 lg:my-6'>
      {stacks.map(({ name, label, type, icon: iconName }) => {
        const icon = (
          <i className={`text-secondary devicon-${iconName ?? name}-plain`} />
        );
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
  { name: 'typescript', label: 'TypeScript', type: 'Language' },
  // Frontend
  { name: 'nextjs', label: 'Next.js', type: 'Fullstack' },
  {
    name: 'tanstack-start',
    label: 'TanStack Start',
    type: 'Fullstack',
    icon: 'react',
  },
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
  // Backend
  { name: 'nestjs', label: 'NestJS', type: 'Backend' },
  { name: 'prisma', label: 'Prisma', type: 'ORM' },
  {
    name: 'kysely',
    label: 'Kysely',
    type: 'ORM',
    icon: 'azuresqldatabase',
  },
  { name: 'postgresql', label: 'PostgreSQL', type: 'Database' },
  {
    name: 'pgvector',
    label: 'pgvector',
    type: 'Database',
    icon: 'postgresql',
  },
  // Runtime
  { name: 'nodejs', label: 'Node.js', type: 'Runtime' },
  { name: 'bun', label: 'Bun', type: 'Runtime' },
  // Infra
  { name: 'docker', label: 'Docker', type: 'Infrastructure' },
  { name: 'terraform', label: 'Terraform', type: 'Infrastructure' },
  // Cloud
  { name: 'googlecloud', label: 'GCP', type: 'Cloud' },
  { name: 'cloudflareworkers', label: 'Cloudflare Workers', type: 'Cloud' },
  { name: 'vercel', label: 'Vercel', type: 'Cloud' },
  { name: 'digitalocean', label: 'DigitalOcean', type: 'Cloud' },
  { name: 'railway', label: 'Railway', type: 'Cloud' },

  // Frameworks / tools
  { name: 'git', label: 'Git', type: 'Tools' },
  // DevOps
  { name: 'github', label: 'GitHub actions', type: 'Tools' },
  // Testing
  { name: 'vitest', label: 'Vitest', type: 'Unit testing' },
  { name: 'playwright', label: 'Playwright', type: 'E2E testing' },
  // Mobile
  { name: 'react', label: 'React Native', type: 'Mobile' },
  { name: 'expo', label: 'Expo / EAS', type: 'Mobile' },
  // Design
  { name: 'figma', label: 'Figma', type: 'Design' },
  // AI
  {
    name: 'llm-rag',
    label: 'LLMs / RAG',
    type: 'AI Engineering',
    icon: 'jupyter',
  },
];

export default Stack;
