export const ImageInput = ({
  label,
  name,
}: {
  label?: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>}
      <input type="file" name={name} className="p-2 border rounded-md" />
    </div>
  );
};
