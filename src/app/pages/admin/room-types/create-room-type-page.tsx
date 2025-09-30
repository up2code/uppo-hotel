import { AdminLayout } from "@/components/layouts/admin-layout";
import { CreateRoomType } from "@/features/room-types/components/create-room-type";
import React from "react";

export interface CreateRoomTypePageProps {
  onCancel?: () => void;
  onSuccess?: () => void;
}

export const CreateRoomTypePage = ({
  onSuccess,
  onCancel,
}: CreateRoomTypePageProps) => {
  return (
    <AdminLayout>
      <CreateRoomType onSuccess={onSuccess} onCancel={onCancel} />
    </AdminLayout>
  );
};
