import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";

export interface DropdownProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  options?: { value: string; label: string }[];
  className?: string;
}

export const Dropdown = ({
  label,
  options,
  value,
  onValueChange,
  disabled,
  className,
}: DropdownProps) => {
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
      disabled={disabled || !options || options.length === 0}
    >
      <SelectTrigger
        className={cn(
          "w-[200px] text-left",
          disabled && "bg-gray-300 cursor-not-allowed",
          className
        )}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
