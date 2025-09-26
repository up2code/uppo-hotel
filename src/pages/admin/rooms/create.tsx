import { AdminLayout } from "@/components/layouts/admin-layout";
import { RoomTypeForm } from "@/features/room-types/components/room-type-form";
import {
  CreateRoomTypeProvider,
  useCreateRoomType,
} from "@/features/room-types/providers/create-room-type-provider";
import React from "react";

export default function Page() {
  return (
    <AdminLayout>
      <CreateRoomTypeProvider>
        <CreatePage />
      </CreateRoomTypeProvider>
    </AdminLayout>
  );
}

function CreatePage() {
  const { loading, requestCreate } = useCreateRoomType();

  return (
    <RoomTypeForm
      mode="create"
      room={{
        amenities: [""],
      }}
      loading={loading}
      onSubmit={requestCreate}
    />
  );
}
