import {
  FormProvider as RHFFormProvider,
  useForm as useRHFForm,
  FieldValues,
  SubmitHandler,
  DefaultValues,
  Resolver,
} from "react-hook-form";

interface FormProviderProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit?: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
  resolver?: Resolver<T, unknown, T>;
}

export const FormProvider = <T extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: FormProviderProps<T>) => {
  const methods = useRHFForm<T>({
    defaultValues,
    resolver: resolver,
  });
  const handleSubmit: SubmitHandler<T> = (data: T) => onSubmit?.(data);

  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </RHFFormProvider>
  );
};
