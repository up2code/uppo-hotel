import { Reorder } from "motion/react";
import * as React from "react";
import { useFieldArray } from "react-hook-form";
import { RoomTypeFormData } from "../../types/room-type";
import { useForm } from "@/components/forms/form-provider/use-form";
import Image from "next/image";
import { X } from "lucide-react";
import { nanoid } from "nanoid";
import { ImageInput } from "@/components/shared/image-input";

interface GalleryItem {
  id: string;
  value: string;
}

export const GalleryListInput = () => {
  const { control } = useForm<RoomTypeFormData>();
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "imageUrls",
  });
  const [items, setItems] = React.useState(fields);

  React.useEffect(() => {
    setItems(fields);
  }, [fields]);

  const onDragEnd = (newFields: GalleryItem[]) => {
    //stackoverflow.com/questions/78294081/use-reorder-from-framer-motion-with-usearrayfields-from-react-hook-form
    Ref: https: setItems(newFields);
    // Find the first index where the order differs
    const firstDiffIndex = fields.findIndex(
      (field, index) => field.id !== newFields[index].id
    );
    if (firstDiffIndex !== -1) {
      // Find the new index of the item that was moved
      const newIndex = newFields.findIndex(
        (field) => field.id === fields[firstDiffIndex].id
      );
      // Swap the items
      swap(firstDiffIndex, newIndex);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Reorder.Group
          className="flex gap-2"
          axis="x"
          values={items}
          onReorder={onDragEnd}
        >
          {fields.map((field, index) => (
            <Reorder.Item
              key={field.id}
              className="flex items-center gap-4 mb-2"
              value={field}
            >
              <div className="relative">
                <Image
                  src={field.value}
                  alt={`Gallery Image ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-cover pointer-events-none rounded"
                />
                <button
                  onClick={() => remove(index)}
                  className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1 hover:bg-red-700 transition-colors"
                  type="button"
                >
                  <X color="white" className="size-4" />
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <div>
          <ImageInput
            name="imageUrls"
            disabledPreview
            onChange={(value) => {
              if (!value) return;

              append({ id: nanoid(), value: value });
            }}
          />
        </div>
      </div>
    </>
  );
};
