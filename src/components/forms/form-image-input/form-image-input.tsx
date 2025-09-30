import { ImageInput } from "@/components/shared/image-input";
import * as React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "../form-provider/use-form";

export interface FormImageInputProps {
  label?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const FormImageInput = ({
  label,
  name,
  defaultValue,
  disabled,
}: FormImageInputProps) => {
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
      render={({ field: { onChange, ...props } }) => (
        <ImageInput
          label={label}
          onChange={onChange}
          value={props.value}
          name={props.name}
        />
      )}
    />
  );
};
