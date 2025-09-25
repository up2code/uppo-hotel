import { cn } from "@/lib/utils";
import React from "react";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  hidden?: boolean;
}

export const Column = ({ children, hidden, ...props }: ColumnProps) => {
  if (hidden) {
    return null;
  }

  return (
    <div className={cn(`flex flex-col gap-4`, props.className)} {...props}>
      {children}
    </div>
  );
};
