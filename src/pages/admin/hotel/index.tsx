import { AdminLayout } from "@/components/layouts/admin-layout";
import { paths } from "@/config/paths";
import { HotelEditPage } from "@/features/hotel/components/hotel-edit-page";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname={paths.admin.hotel()}>
      <HotelEditPage />
    </AdminLayout>
  );
};

export default Index;
