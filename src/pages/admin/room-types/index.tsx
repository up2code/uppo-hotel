import { ListRoomTypePage } from "@/app/pages/admin/room-types/list-room-type-page";
import { AdminLayout } from "@/components/layouts/admin-layout";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname="/admin/room-types">
      <ListRoomTypePage />
    </AdminLayout>
  );
};

export default Index;
