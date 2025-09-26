import { GripVertical } from "lucide-react";
import { Reorder } from "motion/react";
import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { nanoid } from "nanoid";
import { TextInput } from "@/components/shared/text-input";

interface ReorderableTextInputListProps {
  name: string;
  register: any;
  control: Control<any>;
}

// Need react-hook-form and framer-motion for this component
export const ReorderableTextInputList = ({
  name,
  control,
  register,
}: ReorderableTextInputListProps) => {
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: name,
  });
  const [items, setItems] = React.useState(fields);

  React.useEffect(() => {
    setItems(fields);
  }, [fields]);

  const onDragEnd = (newFields: Record<string, string>[]) => {
    // Ref: https://stackoverflow.com/questions/78294081/use-reorder-from-framer-motion-with-usearrayfields-from-react-hook-form
    setItems(newFields);
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
            <TextInput
              label={`Amenity #${index + 1}`}
              {...register(`${name}.${index}.value`)}
            />
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
      <button
        type="button"
        onClick={() => append({ id: nanoid(), value: "Wow" })}
        className="mt-2 bg-green-500 text-white p-2 rounded hover:opacity-75 hover:cursor-pointer"
      >
        ADD AMENITY
      </button>
    </>
  );
};
