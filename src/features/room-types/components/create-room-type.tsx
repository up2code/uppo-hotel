import React from "react";
import { RoomTypeForm } from "./room-type-form";
import { useCreateRoomType } from "../api/create-room-type";

export const CreateRoomType = () => {
  const { loading, mutate } = useCreateRoomType();

  return (
    <RoomTypeForm
      mode="create"
      defaultValues={{
        amenities: [""],
      }}
      loading={loading}
      onSubmit={mutate}
    />
  );
};
