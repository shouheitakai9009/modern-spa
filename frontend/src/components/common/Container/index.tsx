import { cn } from '@/utils/classnames';
import { PropsWithChildren } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

const SIZE = {
  sm: 'sm:w-full',
  md: 'md:w-full',
  lg: 'lg:w-[1080px]',
  xl: 'xl:w-[1080px]',
};

interface ContainerProps extends PropsWithChildren<HTMLMotionProps<'div'>> {
  slideIn?: boolean;
}

export const Container = ({
  children,
  className,
  slideIn = false,
  ...props
}: ContainerProps) => {
  const styledSize = Object.values(SIZE).join(' ');

  return (
    <div className="w-full flex justify-center">
      <motion.div
        className={cn(styledSize, className)}
        initial={slideIn ? { opacity: 0, translateX: -100 } : {}}
        whileInView={slideIn ? { opacity: 1, translateX: 0 } : {}}
        viewport={{ once: true }}
        transition={slideIn ? { duration: 1 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};
