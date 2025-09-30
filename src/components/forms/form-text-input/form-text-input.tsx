import { TextInput } from "@/components/shared/text-input";
import * as React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "../form-provider/use-form";

interface FormTextInputProps {
  name: string;
  label: string;
}

export const FormTextInput = ({ name, label }: FormTextInputProps) => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Controller
      name={name}
      control={control}
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
