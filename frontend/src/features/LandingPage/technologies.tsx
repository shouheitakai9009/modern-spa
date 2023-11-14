import { TechnologyCardType } from './technology-card';

export const technologies: TechnologyCardType[] = [
  {
    name: 'Prisma',
    mainTag: 'ORM',
    tags: ['Backend'],
    image: '/images/part_prisma.png',
    link: 'https://www.prisma.io/docs/guides',
    description: (
      <>
        Streamlines database workflows with auto-generated queries, ensuring
        efficient, type-safe database access.
      </>
    ),
  },
  {
    name: 'NestJS',
    mainTag: 'Server framework',
    tags: ['Backend'],
    image: '/images/part_nestjs.png',
    link: 'https://nestjs.com/',
    description: (
      <>
        Offers a robust backend framework with TypeScript, promoting clean,
        scalable code architecture.
      </>
    ),
  },
  {
    name: 'Monorepo',
    mainTag: 'Repository',
    tags: ['Build', 'Other'],
    image: '/images/part_monorepo.png',
    link: 'https://github.com/shouheitakai9009/modern-spa/blob/main/package.json',
    description: (
      <>
        Centralizes code management, simplifying dependency tracking and
        fostering unified project development.
      </>
    ),
  },
  {
    name: 'Vite',
    mainTag: 'Build tool',
    tags: ['Build', 'Frontend'],
    image: '/images/part_vite.png',
    link: 'https://vitejs.dev/',
    description: (
      <>
        Provides a fast, modern frontend tool with hot module replacement,
        optimizing development and build times.
      </>
    ),
  },
  {
    name: 'Recoil',
    mainTag: 'Global state management',
    tags: ['Frontend', 'State'],
    image: '/images/part_recoil.png',
    link: 'https://recoiljs.org/',
    description: (
      <>
        Manages state globally in React apps with simplicity and performance,
        improving state management.
      </>
    ),
  },
  {
    name: 'TanStack Query',
    mainTag: 'API caching',
    tags: ['Frontend', 'State'],
    image: '/images/part_rq.png',
    link: 'https://tanstack.com/query/v3/',
    description: (
      <>
        Simplifies data fetching, caching, and state synchronization, enhancing
        server-state management.
      </>
    ),
  },
  {
    name: 'Storybook',
    mainTag: 'UI testing',
    tags: ['Frontend', 'Testing'],
    image: '/images/part_storybook.jpg',
    link: 'https://storybook.js.org/',
    description: (
      <>
        Isolates components, enabling interactive UI development and testing,
        fostering better component design.
      </>
    ),
  },
  {
    name: 'Vitest',
    mainTag: 'Unit testing',
    tags: ['Frontend', 'Testing'],
    image: '/images/part_vitest.svg',
    link: 'https://vitest.dev/',
    description: (
      <>
        A fast unit-testing framework optimized for Vite, ensuring reliable,
        efficient JavaScript testing.
      </>
    ),
  },
  {
    name: '@shadcn/ui',
    mainTag: 'Component library',
    tags: ['Frontend', 'Styling'],
    image: '/images/part_mocking.png',
    link: 'https://ui.shadcn.com/docs',
    description: (
      <>
        Provides a collection of reusable UI components, speeding up UI
        development with consistent design.
      </>
    ),
  },
  {
    name: 'Tailwind CSS',
    mainTag: 'Styling',
    tags: ['Styling'],
    image: '/images/part_tailwind.webp',
    link: 'https://tailwindcss.com/',
    description: (
      <>
        Facilitates rapid, responsive design with utility-first CSS, enhancing
        styling productivity.
      </>
    ),
  },
  {
    name: 'Lucide',
    mainTag: 'Icons',
    tags: ['Styling'],
    image: '/images/part_lucide.png',
    link: 'https://lucide.dev/',
    description: (
      <>
        Offers a versatile icon library, enriching UIs with easily customizable
        vector icons.
      </>
    ),
  },
  {
    name: 'Framer Motion',
    mainTag: 'Animation',
    tags: ['Styling'],
    image: '/images/part_framer.webp',
    link: 'https://www.framer.com/motion/',
    description: (
      <>
        Enables smooth, complex animations in React, enhancing UI interactivity
        and user experience.
      </>
    ),
  },
];
