import React from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name?: string;
}

export const TextInput = ({ label, error, name, ...props }: TextInputProps) => {
  const inputId = props.id || `input-${name}`;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="flex flex-col flex-1 relative">
      {label && (
        <label
          htmlFor={inputId}
          className={cn(`mb-1`, props.disabled ? "text-gray-400" : "")}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={props.type || "text"}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className={cn(
          `p-2 rounded bg-white border-1 focus:border-primary focus:outline-none`,
          error ? "border-red-500" : "",
        )}
        {...props}
      />
      {error && (
        <Info
          color="white"
          fill="red"
          className="absolute right-2 top-9 size-6"
          aria-hidden="true"
        />
      )}
      {error && (
        <div
          id={errorId}
          data-testid={`${name}-error`}
          className="text-red-500"
          role="alert"
        >
          {error?.toString()}
        </div>
      )}
    </div>
  );
};
