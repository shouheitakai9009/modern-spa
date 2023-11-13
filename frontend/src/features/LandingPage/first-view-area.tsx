import TypingAnimation from "@/components/animations/typing";
import { buttonVariants } from "@/components/common/Button";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { cn } from "@/utils/classnames";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export const FirstViewArea = () => {
  return (
    <div
      className={cn(
        "flex justify-center items-center flex-col h-[calc(100%-5rem)]"
      )}
    >
      <img src="/images/icon.png" className="w-20 mb-10" />
      <Heading as="h1" className="text-white mb-4 !text-5xl md:!text-7xl">
        <TypingAnimation
          text="Modern SPA boilerplate"
          className="text-center"
        />
      </Heading>
      <Text className="text-center text-white text-lg">
        <TypingAnimation
          delay={0.01}
          text="Designed for JavaScript developers, the Modern SPA boilerplate offers rapid UI construction, easy setup, and high extensibility."
        />
        <TypingAnimation
          delay={0.01}
          text="It supports a monorepo approach for seamless full-stack development, enabling efficient and organized coding in JavaScript."
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
  );
};
