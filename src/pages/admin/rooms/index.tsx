import { AdminLayout } from "@/components/layouts/admin-layout";
import { paths } from "@/config/paths";
import { RoomList } from "@/features/rooms/components/room-list";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname={paths.admin.rooms.list()}>
      <RoomList />
    </AdminLayout>
  );
};

export default Index;
