import { useForm } from "react-hook-form";
import { TextInput, TextInputProps } from "@/components/shared/text-input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { RoomType } from "../types/room-type";

const roomTypeFormDataSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
});

interface RoomTypeFormData extends Omit<RoomType, "amenities"> {
  amenities?: Record<string, string>[];
}

export interface RoomTypeFormProps {
  mode: "create" | "edit";
  defaultValues: RoomType;
  loading: boolean;
  onChange?: (data: RoomType) => void;
  onSubmit: (data: RoomType) => void;
}

export const RoomTypeForm = ({
  mode,
  defaultValues: room,
  loading,
  onSubmit,
}: RoomTypeFormProps) => {
  // Hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...room,
    },
    resolver: zodResolver(roomTypeFormDataSchema),
  });

  const parseFormData = async (data: RoomTypeFormData) => {
    // Transform amenities from array of objects to array of strings
    const transformedData: RoomType = {
      ...data,
    };

    onSubmit(transformedData);
  };

  return (
    <form
      onSubmit={handleSubmit(parseFormData)}
      className={cn(
        `min-h-screen bg-gray-100 pb-8`,
        loading && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="p-4 space-y-4 bg-white rounded-lg shadow m-8">
        <h2 className="text-2xl font-bold mb-4">
          {mode === "edit" ? "Edit" : "Create"} Room
        </h2>

        <Button type="submit" disabled={loading} className="mb-4">
          {mode === "edit" ? "Update Room" : "Create Room"}
        </Button>

        <TextInput
          label="Room Type"
          disabled={loading}
          error={errors.name?.message as TextInputProps["error"]}
          {...register("name")}
        />
      </div>
    </form>
  );
};
