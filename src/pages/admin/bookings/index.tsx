import { AdminLayout } from "@/components/layouts/admin-layout";
import { BookingList } from "@/features/bookings/components/booking-list";
import React from "react";

const Index = () => {
  return (
    <AdminLayout pathname="/admin/bookings">
      <BookingList />
    </AdminLayout>
  );
};

export default Index;
