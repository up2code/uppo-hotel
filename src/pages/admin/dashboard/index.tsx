import { AdminLayout } from "@/components/layouts/admin-layout";
import { DashboardPage } from "@/features/dashboard/components/dashboard-page";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname="/admin/dashboard">
      <DashboardPage />
    </AdminLayout>
  );
};

export default Index;
