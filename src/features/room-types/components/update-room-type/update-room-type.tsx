import React, { useEffect } from "react";
import { RoomTypeForm } from "@/features/room-types/components/room-type-form/room-type-form";
import { useUpdateRoomType } from "@/features/room-types/api/update-room-type";
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

export const UpdateRoomType = ({
  id,
  onSuccess,
  onCancel,
}: UpdateRoomTypeProps) => {
  const notify = useNotify();
  const { data: updatedResponse, loading, mutate } = useUpdateRoomType(id);
  const { data: roomTypeData, loading: fetching } = useGetRoomType(id);
  useEffect(() => {
    if (updatedResponse) {
      notify("Room type updated successfully");
      onSuccess?.();
    }
  }, [updatedResponse, notify, onSuccess]);

  const onUpdate = (data: RoomTypeFormData) => {
    const payload: Omit<RoomType, "id"> = {
      ...data,
      amenities: data.amenities.map((item) => item.value),
    };
    mutate(payload);
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
