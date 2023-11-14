import { DarkModeSwitcher } from '@/components/common/DarkModeSwitcher';
import { Heading } from '@/components/common/Heading';

export const DemoPage = () => {
  return (
    <article className="bg-secondary h-[100vh]">
      <header className="px-6 flex justify-between items-center">
        <Heading as="h4">Demo page</Heading>
        <DarkModeSwitcher />
      </header>
      <main className=""></main>
    </article>
  );
};
