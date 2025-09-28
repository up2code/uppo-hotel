import { cn } from '@/lib/utils';
import React from 'react';

export const Row = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`flex flex-row gap-4`, props.className)} {...props}>
      {children}
    </div>
  );
};
