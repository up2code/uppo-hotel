import React from "react";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name?: string;
}

export const TextInput = ({
  label,
  error,
  name,
  disabled,
  ...props
}: TextInputProps) => {
  const inputId = props.id || `input-${name}`;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div
      className={cn(
        "flex flex-col flex-1 relative w-full",
        disabled ? "opacity-50 cursor-not-allowed" : "",
      )}
    >
      {label ? (
        <label
          htmlFor={inputId}
          className={cn(`mb-1`, disabled ? "text-gray-400" : "")}
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        name={name}
        type={props.type || "text"}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className={cn(
          `p-2 rounded bg-white border-1 focus:border-primary focus:outline-none`,
          error ? "border-red-500" : "",
          disabled ? "bg-gray-100" : "",
        )}
        disabled={disabled}
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
