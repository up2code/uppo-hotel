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
    formState: { disabled: formDisabled },
  } = useForm();

  return (
    <Controller
      name={name}
      disabled={disabled || formDisabled}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <TextInput label={label} error={fieldState.error?.message} {...field} />
      )}
    />
  );
};
