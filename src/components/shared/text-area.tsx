export const Textarea = ({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>}
      <textarea
        className="p-2 border rounded-md bg-white border-gray-300"
        {...props}
      />
      {error && <div className="text-red-500">{error?.toString()}</div>}
    </div>
  );
};
