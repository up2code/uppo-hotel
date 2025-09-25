import { AdminLayout } from "@/components/admin/layouts/admin-layout";
import { useRouter } from "next/router";
import React from "react";
import { RoomApiProvider, useRoomApi } from "@/providers/room-api-provider";
import { RoomForm } from "@/components/admin/forms/room-form";

export default function Page() {
  const {
    query: { id },
  } = useRouter();

  return (
    <AdminLayout>
      <RoomApiProvider id={id as string}>
        <EditRoomPage />
      </RoomApiProvider>
    </AdminLayout>
  );
}

function EditRoomPage() {
  const { data, loading, requestUpdate } = useRoomApi();

  return (
    <RoomForm
      mode="edit"
      room={data || undefined}
      loading={requestUpdate.loading}
      onSubmit={requestUpdate.mutate}
    />
  );
}
