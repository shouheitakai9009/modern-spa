import { cn } from "@/utils";
import { PropsWithChildren } from "react";

interface TypographyProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>> {
  isLink?: boolean;
}
export const Text = ({
  isLink = false,
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <p
      className={cn(
        isLink ? "!text-primary underline" : "text-secondary-foreground",
        "leading-7 [&:not(:first-child)]:mt-1",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
