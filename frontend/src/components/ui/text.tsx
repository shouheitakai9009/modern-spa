import { cn } from "@/utils";
import { PropsWithChildren } from "react";

interface TypographyProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>> {}
export const Text = ({ children, className, ...props }: TypographyProps) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 text-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
