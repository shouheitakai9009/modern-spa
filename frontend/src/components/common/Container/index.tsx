import { cn } from "@/utils/classnames";
import { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const SIZE = {
  sm: "sm:w-full",
  md: "md:w-full",
  lg: "lg:w-[1080px]",
  xl: "xl:w-[1080px]",
};

interface ContainerProps extends PropsWithChildren<HTMLMotionProps<"div">> {}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  const styledSize = Object.values(SIZE).join(" ");

  return (
    <motion.div
      className={cn(styledSize, className)}
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
