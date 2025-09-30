import React from "react";
import { RoomTypeForm } from "./room-type-form";
import { useCreateRoomType } from "../api/create-room-type";
import { useNotify } from "@/hooks/useNotify";
import { DEFAULT_ROOM_TYPE_FORM_DATA, RoomType } from "../types/room-type";

export const CreateRoomType = () => {
  const notify = useNotify();
  const { data: createdResponse, loading, mutate } = useCreateRoomType();

  const onCreate = (data: RoomType) => {
    mutate(data);
  };

  if (createdResponse) {
    notify("Room type created successfully");
  }

  return (
    <RoomTypeForm
      mode="create"
      defaultValues={DEFAULT_ROOM_TYPE_FORM_DATA}
      loading={loading}
      onSubmit={onCreate}
    />
  );
};
