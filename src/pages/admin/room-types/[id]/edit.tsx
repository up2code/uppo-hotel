import { AdminLayout } from "@/components/layouts/admin-layout";
import { EditRoomType } from "@/features/room-types/components/edit-room-type";
import React from "react";

const Edit = () => {
  return (
    <AdminLayout pathname="/admin/room-types">
      <EditRoomType id="1" />
    </AdminLayout>
  );
};

export default Edit;
