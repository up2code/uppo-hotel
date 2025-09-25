import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { AdminHeader } from "../layouts/admin-header";
import Stack from "../layouts/stack";
import { ImageInput } from "./image-input";
import { Divider } from "../ui/divider";
import { Textarea } from "./text-area";
import { ReorderableTextInputList } from "./reorderable-text-input-list";
import { TextInput, TextInputProps } from "@/components/input/text-input";
import { Button } from "@/components/ui/button";

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

interface CreateRoomHeaderProps {
  onCancel: () => void;
  onCreate: () => void;
}

const CreateRoomHeader = ({ onCancel, onCreate }: CreateRoomHeaderProps) => {
  return (
    <AdminHeader>
      <div>Create New Room</div>
      <div className="mr-4 flex gap-2">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="default" type="submit" onClick={onCreate}>
          Create
        </Button>
      </div>
    </AdminHeader>
  );
};

interface UpdateRoomHeaderProps {
  title: string;
  onSubmit: () => void;
}

const UpdateRoomHeader = ({ title, onSubmit }: UpdateRoomHeaderProps) => {
  return (
    <AdminHeader>
      <div>{title}</div>
      <div className="mr-4 flex gap-2">
        <Button variant="default" type="submit" onClick={onSubmit}>
          Update
        </Button>
      </div>
    </AdminHeader>
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

  return (
    <form
      onSubmit={handleSubmit(parseFormData)}
      className="min-h-screen bg-gray-100 pb-8"
    >
      {mode === "edit" ? (
        <UpdateRoomHeader
          title={room?.name || "Edit Room"}
          onSubmit={handleSubmit(parseFormData)}
        />
      ) : (
        <CreateRoomHeader
          onCancel={() => {}}
          onCreate={handleSubmit(parseFormData)}
        />
      )}
      <div className="p-4 space-y-4 bg-white rounded-lg shadow m-8">
        <h2 className="text-2xl font-bold mb-4">
          {mode === "edit" ? "Edit" : "Create"} Room
        </h2>

        <TextInput label="Room Type *" {...register("name")} />

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
