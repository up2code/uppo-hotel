export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label?: string;
  error?: string;
}
export const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col flex-1">
      {label && <label className="mb-1">{label}</label>}
      <input
        type={props.type || "text"}
        className="p-2 border rounded-md bg-white border-gray-300"
        {...props}
      />
      {error && <div className="text-red-500">{error?.toString()}</div>}
    </div>
  );
};
