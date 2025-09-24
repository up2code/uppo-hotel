import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { AdminHeader } from "../layouts/admin-header";
import { TextInput, TextInputProps } from "./text-input";
import Stack from "../layouts/stack";
import { ImageInput } from "./image-input";
import { Divider } from "../ui/divider";
import { Textarea } from "./text-area";
import { ReorderableTextInputList } from "./reorderable-text-input-list";

interface RoomFormData extends Omit<Room, "amenities"> {
  amenities: Record<string, string>[];
}

const PromotionPriceInput = ({ label, ...props }: TextInputProps) => {
  return (
    <div className="flex flex-col flex-1">
      {label && <label className="mb-1">{label}</label>}
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          ฿
        </span>
        <input
          type={props.type || "text"}
          className="p-2 border rounded-r-md bg-white border-gray-300 flex-1"
          {...props}
        />
      </div>
    </div>
  );
};

export interface RoomFormProps {
  mode: "create" | "edit";
  room?: Room;
  loading: boolean;
  onSubmit: (data: Room) => void;
}

export const RoomForm = ({ mode, room, loading, onSubmit }: RoomFormProps) => {
  // Hook form
  const { handleSubmit, register, control } = useForm<RoomFormData>({
    defaultValues: {
      ...room,
      amenities:
        room?.amenities?.map((amenity) => ({ id: nanoid(), value: amenity })) ||
        [],
    },
  });

  const parseFormData = (data: RoomFormData) => {
    // Transform amenities from array of objects to array of strings
    const transformedData: Room = {
      ...data,
      amenities: data.amenities?.map((item) => item.value) || [],
    };

    onSubmit(transformedData);
  };

  const submittingText = mode === "edit" ? "Updating..." : "Creating...";
  const submitText = mode === "edit" ? "Update Room" : "Create Room";

  return (
    <form
      onSubmit={handleSubmit(parseFormData)}
      className="min-h-screen bg-gray-100 pb-8"
    >
      <AdminHeader>
        <div>{mode === "edit" ? "Edit" : "Create"} Room</div>
        <div className="mr-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:opacity-75 hover:cursor-pointer"
          >
            {loading ? submittingText : submitText}
          </button>
        </div>
      </AdminHeader>
      <div className="p-4 space-y-4 bg-white rounded-lg shadow m-8">
        <h2 className="text-2xl font-bold mb-4">
          {mode === "edit" ? "Edit" : "Create"} Room
        </h2>

        <TextInput label="Name" error="Please fill" {...register("name")} />

        <Stack direction="row">
          <TextInput label="Room size(sqm)*" {...register("roomSize")} />
          <TextInput label="Bed type" {...register("bedType")} />
        </Stack>

        <Stack direction="row">
          <TextInput type="number" label="Guest(s)*" {...register("guests")} />
          <div className="flex flex-1" />
        </Stack>

        <Stack direction="row">
          <TextInput label="Price per Night(THB)*" {...register("price")} />
          <PromotionPriceInput
            label="Promotion Price"
            {...register("promotionPrice")}
          />
        </Stack>

        <Textarea label="Room Description *" {...register("description")} />

        <Divider />

        <h3>Room Image</h3>

        <ImageInput label="Main Image" {...register("mainImage")} />

        <Divider />

        <ReorderableTextInputList
          name="amenities"
          control={control}
          register={register}
        />
      </div>
    </form>
  );
};
