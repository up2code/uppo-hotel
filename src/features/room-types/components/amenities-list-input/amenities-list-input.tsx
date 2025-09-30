import { GripVertical } from "lucide-react";
import { Reorder } from "motion/react";
import React from "react";
import { FormTextInput } from "@/components/forms/form-text-input";
import { Button } from "@/components/shared/button";
import { nanoid } from "nanoid";
import { useForm } from "@/components/forms/form-provider/use-form";
import { RoomTypeFormData } from "../../types/room-type";
import { useFieldArray } from "react-hook-form";

interface AmenityItem {
  id: string;
  value: string;
}

// Need react-hook-form and framer-motion for this component
export const AmenitiesListInput = () => {
  const { control } = useForm<RoomTypeFormData>();
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "amenities",
  });
  const [items, setItems] = React.useState(fields);

  React.useEffect(() => {
    setItems(fields);
  }, [fields]);

  const onDragEnd = (newFields: AmenityItem[]) => {
    //stackoverflow.com/questions/78294081/use-reorder-from-framer-motion-with-usearrayfields-from-react-hook-form
    Ref: https: setItems(newFields);
    // Find the first index where the order differs
    const firstDiffIndex = fields.findIndex(
      (field, index) => field.id !== newFields[index].id,
    );
    if (firstDiffIndex !== -1) {
      // Find the new index of the item that was moved
      const newIndex = newFields.findIndex(
        (field) => field.id === fields[firstDiffIndex].id,
      );
      // Swap the items
      swap(firstDiffIndex, newIndex);
    }
  };

  return (
    <>
      <Reorder.Group
        className="flex flex-col gap-2"
        axis="y"
        values={items}
        onReorder={onDragEnd}
      >
        {fields.map((field, index) => (
          <Reorder.Item
            key={field.id}
            className="flex items-center gap-4 mb-2"
            value={field}
          >
            <GripVertical className="hover:cursor-grab active:cursor-grabbing" />

            <FormTextInput label="Amenity" name={`amenities.${index}.value`} />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500"
            >
              DELETE
            </button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <Button
        type="button"
        onClick={() => append({ id: nanoid(), value: "Wow" })}
      >
        ADD AMENITY
      </Button>
    </>
  );
};
