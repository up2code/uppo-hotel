import { AdminLayout } from "@/components/layouts/admin-layout";
import { CreateRoomType } from "@/features/room-types/components/create-room-type";
import React from "react";

export const CreateRoomTypePage = () => {
  return (
    <AdminLayout>
      <CreateRoomType />
    </AdminLayout>
  );
};
