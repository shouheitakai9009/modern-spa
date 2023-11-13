import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/common/Button";
import { Text } from "@/components/common/Text";
import { Heading } from "@/components/common/Heading";
import { cn } from "@/utils/classnames";
import { Container } from "@/components/common/Container";
import { useRef, useState } from "react";
import {
  TechnologyCard,
  TechnologyCardType,
  TechnologyTag,
  tagKinds,
} from "./technology-card";
import { Variants, motion, useInView } from "framer-motion";
import { technologies } from "./technologies";
import { InlineCode } from "@/components/common/InlineCode";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs/tabs";
import { DarkModeSwitcher } from "./dark-mode-switcher";
import { FirstViewArea } from "./first-view-area";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 子要素間の遅延時間
    },
  },
};

export const LandingPage = () => {
  const technologyRef = useRef(null);
  const isInViewTechnology = useInView(technologyRef);

  const [filteredTechnologies, setFilteredTechnologies] =
    useState<TechnologyCardType[]>(technologies);

  const onClickFilterTechnologies = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { textContent } = e.target as HTMLButtonElement;
    if (textContent === "All") {
      setFilteredTechnologies(technologies);
      return;
    }
    setFilteredTechnologies(
      technologies.filter((t) => t.tags.includes(textContent as TechnologyTag))
    );
  };

  return (
    <>
      <header className="h-[100vh] md:h-[700px] px-6 bg-gradient-to-tr from-orange-600 to-purple-500">
        <DarkModeSwitcher />
        <FirstViewArea />
      </header>
      <article className="flex flex-col items-center pt-20 pb-20 px-8 bg-secondary">
        {/* Builing user interface faster */}
        <Container>
          <Heading as="h1" className="mb-8 text-primary">
            Ultra-Fast UI Building
          </Heading>
          <div className="flex flex-col md:!flex-row">
            <img
              src="/images/part_mocking.png"
              className="object-cover w-full md:w-1/2 aspect-square rounded shadow-md"
            />
            <div className="md:ml-10 mt-10 md:mt-4 flex flex-col gap-4">
              <section>
                <Heading as="h2">Intuitive UI</Heading>
                <Text className="text-lg">
                  @shadcn/ui provides intuitive UI and you can create components
                  easily and quickly.
                </Text>
              </section>
              <section>
                <Heading as="h2" className="mt-8">
                  Many Components
                </Heading>
                <Text className="text-lg">
                  You can build a complex feature or a basic component quickly
                  because @shadcn/ui provides built-in components many kind.
                </Text>
              </section>
              <section>
                <Heading as="h2" className="mt-8">
                  Customize Yourself
                </Heading>
                <Text className="text-lg">
                  You can design for specific users because easily install any
                  component. For example, you can install Card component after
                  typing "npx shadcn-ui@latest" add card on your terminal.
                </Text>
              </section>
              <div className="flex justify-center mt-6">
                <Link
                  to="https://ui.shadcn.com/"
                  target="_blank"
                  className={cn(
                    "dark:text-white",
                    buttonVariants({ size: "lg", variant: "outline" })
                  )}
                >
                  View @shadcn/ui Documentation
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {/* Abount fullstack javascripter */}
        <div
          className="w-full flex flex-col md:items-center"
          ref={technologyRef}
        >
          <Container>
            <Heading as="h1" className="mt-32 mb-8 text-primary">
              Fullstack Javascripter
            </Heading>
          </Container>
          <Tabs
            defaultValue="All"
            className="w-full flex-col items-center justify-center flex"
          >
            <Container className="flex justify-center">
              <TabsList className="grid w-full grid-cols-8">
                <TabsTrigger value="All" onClick={onClickFilterTechnologies}>
                  All
                </TabsTrigger>
                {tagKinds.map((tag) => (
                  <TabsTrigger value={tag} onClick={onClickFilterTechnologies}>
                    {tag}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Container>
            <TabsContent value="All" className="pt-8">
              <motion.div
                className="flex flex-col flex-wrap justify-center md:gap-3 md:!flex-row"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {filteredTechnologies.map((technology, key) => (
                  <TechnologyCard
                    key={key}
                    name={technology.name}
                    mainTag={technology.mainTag}
                    tags={technology.tags}
                    image={technology.image}
                    link={technology.link}
                    description={technology.description}
                  />
                ))}
              </motion.div>
            </TabsContent>
            {tagKinds.map((tag) => (
              <TabsContent value={tag} className="pt-8">
                {isInViewTechnology && (
                  <motion.div
                    className="flex flex-col flex-wrap justify-center md:gap-3 md:!flex-row"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredTechnologies.map((technology, key) => (
                      <TechnologyCard
                        key={key}
                        name={technology.name}
                        mainTag={technology.mainTag}
                        tags={technology.tags}
                        image={technology.image}
                        link={technology.link}
                        description={technology.description}
                      />
                    ))}
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        {/* Installation */}
        <div className="w-full flex flex-col md:items-center">
          <Container>
            <Heading as="h1" className="mt-32 mb-8 text-primary">
              Installation
            </Heading>
            <div>
              <Heading as="h3" className="mb-4">
                1. Use this boilerplate
              </Heading>
              <Text className="text-lg">
                Visit this repository and click "Use this template" button.
                <br />
                <Link to="https://github.com/shouheitakai9009/modern-spa">
                  <Text className="text-lg" isLink>
                    https://github.com/shouheitakai9009/modern-spa
                  </Text>
                </Link>
              </Text>
              <Heading as="h3" className="mt-8 mb-4">
                2. Start on your localhost
              </Heading>
              <Text className="text-lg">
                Open terminal and move your directory and type this command
                <InlineCode>yarn install</InlineCode>
                <br />
                After installing, type this command and start with vite
                <InlineCode>yarn dev</InlineCode>
                <br />
                After installing, type this command and start backend server
                <InlineCode>yarn server</InlineCode>
              </Text>
              <Heading as="h3" className="mt-8 mb-4">
                3. Let's start developing !!
              </Heading>
              <Text className="text-lg">
                You finally got everything you need to start developing.
                <br />
                Enjoy your development life!!
              </Text>
            </div>
          </Container>
        </div>
        <Container>
          <Heading as="h1" className="mt-32 mb-8 text-primary">
            First customize you should do
          </Heading>
          <div>
            <Heading as="h3" className="mb-4">
              1. Design the app you wanna make
            </Heading>
            <Text className="text-lg">
              First of all, Let's start to create new page to the below
              <InlineCode>src/features</InlineCode>
              <br />
              Next, Realize the idea in your head using
              <InlineCode>@shadcn/ui</InlineCode>
              <br />
              If I make what it is, I would installed a Menu Bar component using
              this command
              <InlineCode>npx shadcn-ui@latest add menubar</InlineCode>
              <br />
            </Text>
            <Heading as="h3" className="mt-8 mb-4">
              2. Define the schema of database
            </Heading>
            <Text className="text-lg">
              First of all, Confirm installed mysql either using{" "}
              <InlineCode>mysql --version</InlineCode>
              <br />
              If you don't have mysql, you should install mysql using{" "}
              <InlineCode>brew install mysql@8.1</InlineCode>, after that start
              on mysql <InlineCode>mysql.server start</InlineCode>
              <br />
              Next, Create database with a database management tool like
              DBeaver.
              <br />
              Update the database connection information to the below
              <InlineCode>
                DATABASE_URL="mysql://user:password@localhost:5432/your-database?schema=public"
              </InlineCode>{" "}
              on <InlineCode>backend/.env</InlineCode>
              <br />
              Let's define the schema of database using Prisma.
              <InlineCode>backend/prisma/schema.prisma</InlineCode>
              <br />
              Type this command on backend directory{" "}
              <InlineCode>
                npx prisma migrate dev --name your_favorite_word
              </InlineCode>
              <br />
            </Text>
            <Heading as="h3" className="mt-8 mb-4">
              3. Create the first API
            </Heading>
            <Text className="text-lg">
              Let we watch <InlineCode>backend/app.controller.ts</InlineCode>
              <br />
              This is the endpoint routes of the above{" "}
              <InlineCode>frontend/src/apis/index.ts</InlineCode>.<br />
              Next, Type this command{" "}
              <InlineCode>
                npx nest g controller your_defined_table_name{" "}
              </InlineCode>
            </Text>
          </div>
        </Container>
      </article>
    </>
  );
};
