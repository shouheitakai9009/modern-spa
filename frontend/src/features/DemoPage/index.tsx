import { DarkModeSwitcher } from '@/components/common/DarkModeSwitcher';
import { Heading } from '@/components/common/Heading';
import { SigninArea } from './signin-area';
import { OptionsArea } from './options';
import { LoadingArea } from './loading-area';
import { ChatArea } from './chat-area';
import { SetNumberArea } from './set-number';
import { Container } from '@/components/common/Container';
import { TodosArea } from './todos-area';
import { Link } from 'react-router-dom';

export const DemoPage = () => {
  return (
    <article className="bg-background h-[100vh]">
      <header className="px-6 flex justify-between items-center">
        <Link to="/">
          <Heading as="h3" className="flex items-center">
            <img src="/images/icon.png" className="w-10 mr-2" />
            Demo page
          </Heading>
        </Link>
        <DarkModeSwitcher alwaysTextWhite />
      </header>
      <Container>
        <main className="px-6 flex flex-col flex-wrap gap-2 max-h-screen">
          {[
            <SigninArea />,
            <ChatArea />,
            <SetNumberArea />,
            <OptionsArea />,
            <LoadingArea />,
            <TodosArea />,
          ].map((area) => (
            <div className="bg-background min-w-sm border-border border px-4 py-6 rounded-xl shadow-sm">
              {area}
            </div>
          ))}
        </main>
      </Container>
    </article>
  );
};
