import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/select';
import { cn } from '@/lib/utils';
import React from 'react';

export interface DropdownProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  options?: { value: string; label: string }[];
  className?: string;
}

export const Dropdown = ({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
}: DropdownProps) => {
  return (
    <div className="flex flex-col relative">
      {label && (
        <label className={cn(`mb-1`, disabled ? 'text-gray-400' : '')}>
          {label}
        </label>
      )}
      <Select
        value={value}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        disabled={disabled || !options || options.length === 0}
      >
        <SelectTrigger
          className={cn(
            'text-left',
            disabled && 'bg-gray-300 cursor-not-allowed',
            className,
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
    </div>
  );
};
