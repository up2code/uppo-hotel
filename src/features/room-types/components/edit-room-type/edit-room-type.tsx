import React from "react";
import { RoomTypeForm } from "@/features/room-types/components/room-type-form/room-type-form";
import {
  UpdateRoomResponse,
  useUpdateRoomType,
} from "@/features/room-types/api/update-room-type";
import { useNotify } from "@/hooks/useNotify";
import {
  RoomType,
  RoomTypeFormData,
} from "@/features/room-types/types/room-type";
import { useGetRoomType } from "../../api/get-room-type";

export interface UpdateRoomTypeProps {
  id: string;
  onCancel?: () => void;
  onSuccess?: (data?: RoomType) => void;
}

export const EditRoomType = ({
  id,
  onSuccess,
  onCancel,
}: UpdateRoomTypeProps) => {
  const notify = useNotify();
  const { loading, mutate } = useUpdateRoomType(id);
  const { data: roomTypeData, isLoading: fetching } = useGetRoomType(id);

  const onUpdateSuccess = (res: UpdateRoomResponse) => {
    notify("Room type updated successfully");
    onSuccess?.(res.data);
  };

  const onUpdateError = (error: Error) => {
    notify(`Update failed: ${error.message}`);
  };

  const onUpdate = (data: RoomTypeFormData) => {
    const payload: Omit<RoomType, "id"> = {
      ...data,
      amenities: data.amenities.map((item) => item.value),
    };
    mutate(payload, {
      onSuccess: onUpdateSuccess,
      onError: onUpdateError,
    });
  };

  const formatToFormData = (data: RoomType): RoomTypeFormData => ({
    ...data,
    amenities: data.amenities.map((value) => ({ value })),
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (!roomTypeData) {
    return <div>Room type not found</div>;
  }

  return (
    <RoomTypeForm
      mode="edit"
      defaultValues={formatToFormData(roomTypeData)}
      loading={loading}
      onSubmit={onUpdate}
      onCancel={onCancel}
    />
  );
};
