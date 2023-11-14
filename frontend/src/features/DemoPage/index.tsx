import { DarkModeSwitcher } from '@/components/common/DarkModeSwitcher';
import { Heading } from '@/components/common/Heading';
import { SigninArea } from './signin-area';
import { TodosArea } from './todos-area';

export const DemoPage = () => {
  return (
    <article className="bg-background h-[100vh]">
      <header className="px-6 flex justify-between items-center">
        <Heading as="h4">Demo page</Heading>
        <DarkModeSwitcher />
      </header>
      <main className="px-6 flex flex-col flex-wrap gap-2 max-h-screen">
        {[<SigninArea />, <TodosArea />].map((area) => (
          <div className="min-w-sm max-w-sm border-border border px-4 py-6 rounded-xl">
            {area}
          </div>
        ))}
      </main>
    </article>
  );
};
