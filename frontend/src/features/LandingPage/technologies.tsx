import { TechnologyCardType } from "./technology-card";

export const technologies: TechnologyCardType[] = [
  {
    name: "Prisma",
    badge: "ORM",
    image: "/images/part_prisma.png",
    link: "https://www.prisma.io/docs/guides",
    description: (
      <>
        You can use quickly and easily Prisma ORM with TypeScript.
        <br />
        Let's define schemas on backend/prisma/schema.prisma right now.
      </>
    ),
  },
  {
    name: "NestJS",
    badge: "Server framework",
    image: "/images/part_nestjs.png",
    link: "https://nestjs.com/",
    description: (
      <>
        This is the framework that is good compatibility with Prisma and made by
        Node.js.
        <br />
        You can write a safe code more because NestJS supported Typescript.
      </>
    ),
  },
  {
    name: "Monorepo",
    badge: "Repository",
    image: "/images/part_monorepo.png",
    link: "https://github.com/shouheitakai9009/modern-spa/blob/main/package.json",
    description: (
      <>
        You don't need to build a difficult environment because this repository
        apply mono-repo.
        <br />
        You can start developing frontend and backend quickly.
      </>
    ),
  },
  {
    name: "Vite",
    badge: "Build tool",
    image: "/images/part_vite.png",
    link: "https://vitejs.dev/",
    description: <></>,
  },
  {
    name: "Recoil",
    badge: "Global state management",
    image: "/images/part_recoil.png",
    link: "https://recoiljs.org/",
    description: (
      <>
        Implement persistence, routing, time-travel debugging, or undo by
        observing all state changes across your app, without impairing
        code-splitting.
      </>
    ),
  },
  {
    name: "TanStack Query",
    badge: "API caching",
    image: "/images/part_rq.png",
    link: "https://tanstack.com/query/v3/",
    description: (
      <>
        TanStack Query gives you declarative, always-up-to-date auto-managed
        queries and mutations that directly improve both your developer and user
        experiences.
      </>
    ),
  },
  {
    name: "Storybook",
    badge: "UI testing",
    image: "/images/part_storybook.jpg",
    link: "https://storybook.js.org/",
    description: (
      <>
        Storybook is a frontend workshop for building UI components and pages in
        isolation. Thousands of teams use it for UI development, testing, and
        documentation. It's open source and free.
      </>
    ),
  },
  {
    name: "Vitest",
    badge: "Unit testing",
    image: "/images/part_vitest.svg",
    link: "https://vitest.dev/",
    description: (
      <>
        Reuse Vite's config and plugins - consistent across your app and tests.
        But it's not required to use Vitest!
      </>
    ),
  },
  {
    name: "@shadcn/ui",
    badge: "Component library",
    image: "/images/part_mocking.png",
    link: "https://ui.shadcn.com/docs",
    description: (
      <>
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </>
    ),
  },
  {
    name: "Tailwind CSS",
    badge: "Styling",
    image: "/images/part_tailwind.webp",
    link: "https://tailwindcss.com/",
    description: (
      <>
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </>
    ),
  },
  {
    name: "Lucide",
    badge: "Icons",
    image: "/images/part_lucide.png",
    link: "https://tailwindcss.com/",
    description: (
      <>
        Icons are lightweight, highly optimized scalable vector graphics (SVG).
        <br />
        Designed with a strict set of design rules for consistency in style and
        readability.
      </>
    ),
  },
  {
    name: "Framer Motion",
    badge: "Animation",
    image: "/images/part_framer.webp",
    link: "https://www.framer.com/motion/",
    description: (
      <>
        Complete documentation of the Framer Motion animation library. A
        production-ready motion library for React.
      </>
    ),
  },
];