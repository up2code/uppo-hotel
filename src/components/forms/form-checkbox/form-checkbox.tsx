import { Checkbox } from "@/components/shared/checkbox";
import { Controller } from "react-hook-form";
import { useForm } from "../form-provider/use-form";

export interface FormCheckboxProps {
  label?: string;
  name: string;
  disabled?: boolean;
  defaultValue?: boolean;
}

export const FormCheckbox = ({
  label,
  name,
  disabled,
  defaultValue,
}: FormCheckboxProps) => {
  const {
    control,
    formState: { disabled: formDisabled },
  } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? false}
      render={({ field }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={disabled || formDisabled}
            ref={field.ref}
            name={field.name}
          />
          {label && (
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
        </div>
      )}
    />
  );
};
