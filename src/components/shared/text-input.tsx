import React from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col flex-1 relative bg-red">
      {label && (
        <label className={cn(`mb-1`, props.disabled ? "text-gray-400" : "")}>
          {label}
        </label>
      )}
      <input
        type={props.type || "text"}
        className={cn(
          `p-2 border rounded bg-white focus:border-primary focus:outline-none `,
          error ? "border-red-500" : "border-gray-300",
          props.disabled
            ? "bg-gray-200 cursor-not-allowed"
            : "hover:border-gray-400",
          props.className
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
      {error && <div className="text-red-500">{error?.toString()}</div>}
    </div>
  );
};
