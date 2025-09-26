import { AdminLayout } from "@/components/layouts/admin-layout";
import { RoomTypeForm } from "@/features/room-types/components/room-type-form";
import {
  EditRoomTypeProvider,
  useEditRoomType,
} from "@/features/room-types/providers/edit-room-type-provider";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const {
    query: { id },
  } = useRouter();

  return (
    <AdminLayout>
      <EditRoomTypeProvider id={id as string}>
        <EditRoomPage />
      </EditRoomTypeProvider>
    </AdminLayout>
  );
}

function EditRoomPage() {
  const { data, loading, requestUpdate } = useEditRoomType();

  return (
    <RoomTypeForm
      mode="edit"
      room={data || undefined}
      loading={requestUpdate.loading}
      onSubmit={requestUpdate.mutate}
    />
  );
}
