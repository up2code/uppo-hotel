import * as React from "react";
import { FormInput } from "../types";
import { useForm } from "../form-provider/use-form";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import { cn } from "@/lib/utils";

interface FormSelectProps extends FormInput {
  options?: { value: string; label: string }[];
}

export const FormSelect = ({
  label,
  name,
  defaultValue,
  placeholder,
  options,
  disabled,
}: FormSelectProps) => {
  const {
    control,
    formState: { disabled: formDisabled },
  } = useForm();

  const isDisabled = disabled || formDisabled;

  return (
    <Controller
      name={name}
      disabled={isDisabled}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <div>
          {label && (
            <label className={cn(`mb-1`, isDisabled ? "text-gray-400" : "")}>
              {label}
            </label>
          )}
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full" disabled={field.disabled}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-red-500 text-sm mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};
