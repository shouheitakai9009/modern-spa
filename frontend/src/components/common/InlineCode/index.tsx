import { cn } from '@/utils/classnames';
import { PropsWithChildren } from 'react';

interface InlineCodeProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLElement>> {}

export const InlineCode = ({
  children,
  className,
  ...props
}: InlineCodeProps) => {
  return (
    <code
      className={cn(
        'mx-1 relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
};
