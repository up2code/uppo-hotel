import React, { useEffect } from "react";
import { RoomTypeForm } from "@/features/room-types/components/room-type-form/room-type-form";
import { useCreateRoomType } from "@/features/room-types/api/create-room-type";
import { useNotify } from "@/hooks/useNotify";
import {
  DEFAULT_ROOM_TYPE_FORM_DATA,
  RoomType,
  RoomTypeFormData,
} from "@/features/room-types/types/room-type";

export interface CreateRoomTypeProps {
  onCancel?: () => void;
  onSuccess?: (data?: RoomType) => void;
}

export const CreateRoomType = ({
  onSuccess,
  onCancel,
}: CreateRoomTypeProps) => {
  const notify = useNotify();
  const { data: createdResponse, loading, mutate } = useCreateRoomType();

  const onCreate = (data: RoomTypeFormData) => {
    const payload: Omit<RoomType, "id"> = {
      ...data,
    };
    mutate(payload);
  };

  useEffect(() => {
    if (createdResponse) {
      notify("Room type created successfully");
      onSuccess?.();
    }
  }, [createdResponse, notify, onSuccess]);

  return (
    <RoomTypeForm
      mode="create"
      defaultValues={DEFAULT_ROOM_TYPE_FORM_DATA}
      loading={loading}
      onSubmit={onCreate}
      onCancel={onCancel}
    />
  );
};
