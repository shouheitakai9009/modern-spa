import { cn } from "@/utils";
import { PropsWithChildren } from "react";

const SIZE = {
  sm: "sm:w-full",
  md: "md:w-full",
  lg: "lg:w-[1080px]",
  xl: "xl:w-[1080px]",
};

interface ContainerProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  const styledSize = Object.values(SIZE).join(" ");

  return (
    <div className={cn(styledSize, className)} {...props}>
      {children}
    </div>
  );
};
