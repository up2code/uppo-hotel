import { FieldValues, useFormContext } from "react-hook-form";

export const useForm = <T extends FieldValues>() => {
  return useFormContext<T>();
};
