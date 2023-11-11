import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/utils";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { useTheme } from "@/components/theme-provider";

export const LandingPage = () => {
  const { setTheme } = useTheme();
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
            Modern SPA boilerplate
          </Heading>
          <Text className="text-center text-white">
            This is the boilerplate that is a super practical and super fast
            development boilerplate for Javascripter.
            <br />
            you will never get confused configuration using frontend and backend
            because the boilerplate is monorepo for javascripter.
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
      {/* Builing user interface faster */}
      <article className="flex flex-col items-center pt-20 bg-background px-8">
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
                <Text className="text-md">
                  多種多様なビルトインコンポーネントが用意されているため、開発者は基本的な要素から複雑な機能まで迅速に組み立てることができます。
                </Text>
              </section>
              <section>
                <Heading as="h2" className="mt-8">
                  Customize Yourself
                </Heading>
                <Text className="text-md">
                  カスタムコンポーネントを簡単に追加し、既存のコンポーネントを調整することで、ユーザー固有のニーズに合わせたデザインが可能です。
                </Text>
              </section>
              <div className="flex justify-center mt-6">
                <Link
                  to="https://ui.shadcn.com/"
                  target="_blank"
                  className={cn(
                    "",
                    buttonVariants({ size: "lg", variant: "secondary" })
                  )}
                >
                  View @shadcn/ui Documentation
                </Link>
              </div>
            </div>
          </div>
        </Container>
        {/* Abount fullstack javascripter */}
        <div className="w-full flex flex-col md:items-center">
          <Container>
            <Heading as="h1" className="mt-32 mb-8 text-primary">
              Fullstack Javascripter
            </Heading>
          </Container>
          <div className="flex flex-col md:gap-2 md:!flex-row">
            <Card className="sm:w-full md:max-w-[350px] mb-4">
              <CardHeader>
                <CardTitle>Prisma</CardTitle>
                <CardDescription className="h-20">
                  You can use quickly and easily Prisma ORM with TypeScript.
                  <br />
                  Let's define schemas on backend/prisma/schema.prisma right
                  now.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/part_prisma.png"
                  className="w-full object-cover aspect-square rounded"
                />
              </CardContent>
              <CardFooter className="flex items-center">
                <Link
                  to="https://www.prisma.io/docs/guides"
                  target="_blank"
                  className={cn(
                    "w-full",
                    buttonVariants({ size: "lg", variant: "secondary" })
                  )}
                >
                  View Documentation
                </Link>
              </CardFooter>
            </Card>
            <Card className="sm:w-full md:max-w-[350px] mb-4">
              <CardHeader>
                <CardTitle>NestJS</CardTitle>
                <CardDescription className="h-20">
                  This is the framework that is good compatibility with Prisma
                  and made by Node.js You can write a safe code more because
                  NestJS supported Typescript.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/part_nestjs.png"
                  className="w-full object-cover aspect-square rounded"
                />
              </CardContent>
              <CardFooter className="flex items-center">
                <Link
                  to="https://nestjs.com/"
                  target="_blank"
                  className={cn(
                    "w-full",
                    buttonVariants({ size: "lg", variant: "secondary" })
                  )}
                >
                  View Documentation
                </Link>
              </CardFooter>
            </Card>
            <Card className="sm:w-full md:max-w-[350px] mb-4">
              <CardHeader>
                <CardTitle>Monorepo</CardTitle>
                <CardDescription className="h-20">
                  You don't need to build a difficult environment because this
                  repository apply mono-repo. You can start developing frontend
                  and backend quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/part_monorepo.png"
                  className="w-full object-cover aspect-square rounded"
                />
              </CardContent>
              <CardFooter className="flex items-center">
                <Link
                  to="https://github.com/shouheitakai9009/modern-spa/blob/main/package.json"
                  target="_blank"
                  className={cn(
                    "w-full",
                    buttonVariants({ size: "lg", variant: "secondary" })
                  )}
                >
                  View Documentation
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};
