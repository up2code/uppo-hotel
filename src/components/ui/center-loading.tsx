import { LoaderCircle } from "lucide-react";

export const CenterLoading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <LoaderCircle className="animate-spin" size={48} />
    </div>
  );
};
