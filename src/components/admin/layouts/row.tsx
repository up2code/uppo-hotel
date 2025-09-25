import { cn } from "@/lib/utils";
import React from "react";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <div className={cn(`flex flex-row gap-4`, props.className)} {...props}>
      {children}
    </div>
  );
};
