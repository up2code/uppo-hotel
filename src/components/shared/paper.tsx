import React from "react";

export interface PaperProps {
  className?: string;
  children: React.ReactNode;
}

export const Paper = ({ children, className }: PaperProps) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
};
