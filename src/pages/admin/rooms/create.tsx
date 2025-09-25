import { RoomForm } from "@/components/admin/forms/room-form";
import { AdminLayout } from "@/components/admin/layouts/admin-layout";
import {
  CreateRoomApiProvider,
  useCreateRoomApi,
} from "@/providers/create-room-api-provider";
import React from "react";

export default function Page() {
  return (
    <AdminLayout>
      <CreateRoomApiProvider>
        <CreatePage />
      </CreateRoomApiProvider>
    </AdminLayout>
  );
}

function CreatePage() {
  const { loading, mutate } = useCreateRoomApi();

  return (
    <RoomForm
      mode="create"
      room={{
        amenities: [""],
      }}
      loading={loading}
      onSubmit={mutate}
    />
  );
}
