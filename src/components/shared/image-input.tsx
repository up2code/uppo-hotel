import { Plus, X } from "lucide-react";
import Image from "next/image";

export interface ImageInputProps {
  label?: string;
  value?: string;
}

export const ImageInput = ({ value }: ImageInputProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 bg-gray-200 size-48 rounded text-primary">
      {value ? (
        <>
          <Image
            src={value}
            width={480}
            height={480}
            alt="Uploaded"
            className="absolute inset-0 h-full w-full object-cover rounded"
          />
          <button className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1">
            <X color="white" className="size-4" />
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Plus className="mb-2" />
          <span>Upload photo</span>
        </div>
      )}
    </div>
  );
};
