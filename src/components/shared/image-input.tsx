import { useUploadImage } from "@/hooks/useUploadImage";
import { Plus, X, Upload, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState, DragEvent, ChangeEvent } from "react";

export interface ImageInputProps {
  label?: string;
  name: string;
  value?: string;
  disabledPreview?: boolean;
  onChange?: (imageUrl: string | null) => void;
}

export const ImageInput = ({
  value,
  name,
  disabledPreview,
  onChange,
}: ImageInputProps) => {
  const { uploadImage, loading, progress, error } = useUploadImage();
  const [imageUrl, setImageUrl] = useState<string | null>(value || null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        onChange?.(imageUrl);
        setImageUrl(imageUrl);
      }
    } catch {}
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleFileUpload(file);
    }
  };

  const handleClick = () => {
    if (!loading) {
      fileInputRef.current?.click();
    }
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    onChange?.(null);
    setImageUrl(null);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    const file = files[0];

    if (file && file.type.startsWith("image/")) {
      await handleFileUpload(file);
    }
  };

  return (
    <div className="relative">
      <div
        className={`relative flex flex-col items-center justify-center gap-2 size-48 rounded text-primary cursor-pointer transition-all duration-200 ${
          isDragOver
            ? "bg-blue-100 border-2 border-dashed border-blue-400"
            : value
              ? "bg-gray-100"
              : "bg-gray-200 hover:bg-gray-300"
        } ${loading ? "pointer-events-none" : ""}`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <Loader2 className="animate-spin mb-2" />
            <span className="text-sm">Uploading... {progress}%</span>
            {progress > 0 && (
              <div className="w-32 h-2 bg-gray-300 rounded mt-2">
                <div
                  className="h-full bg-blue-500 rounded transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        ) : imageUrl && !disabledPreview ? (
          <>
            <Image
              src={imageUrl}
              width={480}
              height={480}
              alt="Uploaded"
              className="  absolute inset-0 h-full w-full object-cover rounded"
            />
            <button
              onClick={handleRemove}
              className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1 hover:bg-red-700 transition-colors"
              type="button"
            >
              <X color="white" className="size-4" />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            {isDragOver ? (
              <>
                <Upload className="mb-2" />
                <span>Drop image here</span>
              </>
            ) : (
              <>
                <Plus className="mb-2" />
                <span>Upload photo</span>
              </>
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <input type="hidden" value={imageUrl || ""} name={name} />
    </div>
  );
};
