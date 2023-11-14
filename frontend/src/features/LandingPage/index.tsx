import { Link } from 'react-router-dom';
import { Text } from '@/components/common/Text';
import { Heading } from '@/components/common/Heading';
import { Container } from '@/components/common/Container';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { InlineCode } from '@/components/common/InlineCode';
import { DarkModeSwitcher } from '../../components/common/DarkModeSwitcher';
import { FirstViewArea } from './first-view-area';
import { UiBuildingSection } from './ui-building-section';
import { FullstackJavascripterSection } from './fullstack-javascripter-section';
import { StepByStepSection } from './step-by-step-section';

export const LandingPage = () => {
  const technologyRef = useRef(null);
  const isInViewTechnology = useInView(technologyRef);

  return (
    <>
      <header className="h-[100vh] md:h-[700px] px-6 bg-gradient-to-tr from-orange-600 to-purple-500">
        <DarkModeSwitcher alwaysTextWhite />
        <FirstViewArea />
      </header>
      <article className="flex flex-col items-center pt-20 pb-20 px-8 bg-secondary">
        <UiBuildingSection />
        <div
          className="w-full flex flex-col md:items-center"
          ref={technologyRef}
        >
          <Container slideIn>
            <Heading as="h1" className="mt-32 mb-8 text-primary">
              Fullstack Javascripter
            </Heading>
          </Container>
          <FullstackJavascripterSection
            isInViewTechnology={isInViewTechnology}
          />
        </div>
        <StepByStepSection
          title="Installation"
          steps={[
            {
              title: '1. Use this boilerplate',
              description: (
                <>
                  Visit this repository and click "Use this template" button.
                  <br />
                  <Link to="https://github.com/shouheitakai9009/modern-spa">
                    <Text className="text-lg" isLink>
                      https://github.com/shouheitakai9009/modern-spa
                    </Text>
                  </Link>
                </>
              ),
            },
            {
              title: '2. Start on your localhost',
              description: (
                <>
                  Open terminal and move your directory and type this command
                  <InlineCode>yarn install</InlineCode>
                  <br />
                  After installing, type this command and start with vite
                  <InlineCode>yarn dev</InlineCode>
                  <br />
                  After installing, type this command and start backend server
                  <InlineCode>yarn server</InlineCode>
                </>
              ),
            },
            {
              title: "3. Let's start developing !!",
              description: (
                <>
                  You finally got everything you need to start developing.
                  <br />
                  Enjoy your development life!!
                </>
              ),
            },
          ]}
        />
        <StepByStepSection
          title="First customize you should do"
          steps={[
            {
              title: '1. Design the app you wanna make',
              description: (
                <>
                  First of all, Let's start to create new page to the below
                  <InlineCode>src/features</InlineCode>
                  <br />
                  Next, Realize the idea in your head using
                  <InlineCode>@shadcn/ui</InlineCode>
                  <br />
                  If I make what it is, I would installed a Menu Bar component
                  using this command
                  <InlineCode>npx shadcn-ui@latest add menubar</InlineCode>
                  <br />
                </>
              ),
            },
            {
              title: '2. Define the schema of database',
              description: (
                <>
                  First of all, Confirm installed mysql either using{' '}
                  <InlineCode>mysql --version</InlineCode>
                  <br />
                  If you don't have mysql, you should install mysql using{' '}
                  <InlineCode>brew install mysql@8.1</InlineCode>, after that
                  start on mysql <InlineCode>mysql.server start</InlineCode>
                  <br />
                  Next, Create database with a database management tool like
                  DBeaver.
                  <br />
                  Update the database connection information to the below
                  <InlineCode>
                    DATABASE_URL="mysql://user:password@localhost:5432/your-database?schema=public"
                  </InlineCode>{' '}
                  on <InlineCode>backend/.env</InlineCode>
                  <br />
                  Let's define the schema of database using Prisma.
                  <InlineCode>backend/prisma/schema.prisma</InlineCode>
                  <br />
                  Type this command on backend directory{' '}
                  <InlineCode>
                    npx prisma migrate dev --name your_favorite_word
                  </InlineCode>
                  <br />
                </>
              ),
            },
            {
              title: '3. Create the first API',
              description: (
                <>
                  Let we watch{' '}
                  <InlineCode>backend/app.controller.ts</InlineCode>
                  <br />
                  This is the endpoint routes of the above{' '}
                  <InlineCode>frontend/src/apis/index.ts</InlineCode>.<br />
                  Next, Type this command{' '}
                  <InlineCode>
                    npx nest g controller your_defined_table_name{' '}
                  </InlineCode>
                </>
              ),
            },
          ]}
        />
      </article>
    </>
  );
};
