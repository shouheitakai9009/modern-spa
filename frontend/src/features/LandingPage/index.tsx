import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/utils";
import { Container } from "@/components/ui/container";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useId, useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import { TechnologyCard } from "./technology-card";
import { Variants, motion, useInView } from "framer-motion";
import TypingAnimation from "@/components/animations/typing";
import { technologies } from "./technologies";
import { InlineCode } from "@/components/ui/inline-code";

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
  const { setTheme } = useTheme();
  const technologyRef = useRef(null);
  const isInViewTechnology = useInView(technologyRef);
  const darkModeId = useId();

  const onChangeDarkMode = (checked: boolean) => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      {/* Setting dark mode */}
      <header className="h-[600px] px-6 bg-gradient-to-tr from-orange-600 to-purple-500">
        <div className="h-20 flex items-center justify-between">
          <Github color="white" size="40" />
          <div className="flex items-center">
            <Label htmlFor={darkModeId} className="text-white">
              Dark mode
            </Label>
            <Switch
              id={darkModeId}
              onCheckedChange={onChangeDarkMode}
              className="ml-2"
            />
          </div>
        </div>
        {/* First view area */}
        <div className={cn("flex justify-center items-center flex-col h-full")}>
          <Heading as="h1" className="text-white">
            <TypingAnimation text="Modern SPA boilerplate" />
          </Heading>
          <Text className="text-center text-white text-lg">
            <TypingAnimation
              delay={0.01}
              text="This is the boilerplate that is a super practical and super fast development boilerplate for Javascripter."
            />
            <TypingAnimation
              delay={0.01}
              text="you will never get confused configuration using frontend and backend because the boilerplate is monorepo for javascripter."
            />
          </Text>
          <section className="mt-20">
            <Link
              to="https://github.com/shouheitakai9009/modern-spa"
              target="_blank"
              className={cn(
                "shadow-lg",
                buttonVariants({ size: "lg", variant: "default" })
              )}
            >
              <Github size={20} className="mr-2" />
              Get Standard
            </Link>
          </section>
        </div>
      </header>
      <article className="flex flex-col items-center pt-20 px-8 bg-secondary">
        {/* Builing user interface faster */}
        <Container>
          <Heading as="h1" className="mb-8 text-primary">
            Faster building UI than "anywhere"
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
          {isInViewTechnology && (
            <motion.div
              className="flex flex-col flex-wrap justify-center md:gap-3 md:!flex-row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {technologies.map((technology, key) => (
                <TechnologyCard
                  key={key}
                  name={technology.name}
                  badge={technology.badge}
                  image={technology.image}
                  link={technology.link}
                  description={technology.description}
                />
              ))}
            </motion.div>
          )}
        </div>
        {/* Installation */}
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
            </Text>
            <Link to="https://github.com/shouheitakai9009/modern-spa">
              <Text className="text-lg" isLink>
                https://github.com/shouheitakai9009/modern-spa
              </Text>
            </Link>
            <Heading as="h3" className="mt-8 mb-4">
              2. Start on your localhost
            </Heading>
            <Text className="text-lg">
              Open terminal and move your directory and type this command
              <InlineCode>yarn install</InlineCode>
            </Text>
            <Text className="text-lg">
              After installing, type this command and start with vite
              <InlineCode>yarn dev</InlineCode>
            </Text>
            <Text className="text-lg">
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
        <Container>
          <Heading as="h1" className="mt-32 mb-8 text-primary">
            First customize you should do
          </Heading>
          <div>
            <Heading as="h3" className="mb-4">
              1. Use this boilerplate
            </Heading>
            <Text className="text-lg">
              Visit this repository and click "Use this template" button.
            </Text>
            <Link to="https://github.com/shouheitakai9009/modern-spa">
              <Text className="text-lg" isLink>
                https://github.com/shouheitakai9009/modern-spa
              </Text>
            </Link>
            <Heading as="h3" className="mt-8 mb-4">
              2. Start on your localhost
            </Heading>
            <Text className="text-lg">
              Open terminal and move your directory and type this command
              <InlineCode>yarn install</InlineCode>
            </Text>
            <Text className="text-lg">
              After installing, type this command and start with vite
              <InlineCode>yarn dev</InlineCode>
            </Text>
            <Text className="text-lg">
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
      </article>
    </>
  );
};
