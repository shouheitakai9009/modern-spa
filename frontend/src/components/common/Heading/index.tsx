import { cn } from "@/utils";
import { PropsWithChildren } from "react";

interface TypographyProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>> {
  as?: "h1" | "h2" | "h3" | "h4";
}
export const Heading = ({
  as = "h1",
  children,
  className,
  ...props
}: TypographyProps) => {
  const Component = as;
  return (
    <Component
      className={cn(
        "text-secondary-foreground",
        as === "h1" &&
          "scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl",
        as === "h2" &&
          "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
        as === "h3" &&
          "scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl",
        as === "h4" &&
          "scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
