import { TextInput } from "@/components/shared/text-input";
import * as React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "../form-provider/use-form";
import { FormInput } from "../types";

export const FormTextInput = ({
  name,
  label,
  defaultValue,
  disabled,
}: FormInput) => {
  const {
    control,
    formState: { errors, disabled: formDisabled },
  } = useForm();

  return (
    <Controller
      name={name}
      disabled={disabled || formDisabled}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextInput
          label={label}
          error={errors[name]?.message as string | undefined}
          {...field}
        />
      )}
    />
  );
};
