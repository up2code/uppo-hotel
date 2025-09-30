import { TextInput } from "@/components/shared/text-input";
import * as React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "../form-provider/use-form";
import { FormInput } from "../types";

interface FormTextInputProps extends FormInput {
  type?: string;
}

export const FormTextInput = ({
  name,
  label,
  defaultValue,
  disabled,
  type = "text",
}: FormTextInputProps) => {
  const {
    control,
    formState: { disabled: formDisabled },
  } = useForm();

  return (
    <Controller
      name={name}
      disabled={disabled || formDisabled}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, ...props }, fieldState }) => (
        <TextInput
          type={type}
          label={label}
          error={fieldState.error?.message}
          onChange={(e) =>
            type === "number" ? onChange(+e.target.value) : onChange(e)
          }
          {...props}
        />
      )}
    />
  );
};
