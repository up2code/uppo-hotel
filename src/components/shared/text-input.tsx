import React from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput = ({ label, error, name, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col flex-1 relative">
      {label && (
        <label className={cn(`mb-1`, props.disabled ? "text-gray-400" : "")}>
          {label}
        </label>
      )}
      <input
        type={props.type || "text"}
        className={cn(
          `p-2 rounded bg-white border-1 focus:border-primary focus:outline-none`
        )}
        {...props}
      />
      {error && (
        <Info
          color="white"
          fill="red"
          className="absolute right-2 top-9 size-6"
        />
      )}
      {error && (
        <div data-testid={`${name}-error`} className="text-red-500">
          {error?.toString()}
        </div>
      )}
    </div>
  );
};
