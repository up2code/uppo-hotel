import { CreateRoomTypePage } from "@/app/pages/admin/room-types/create-room-type-page";
import { AdminLayout } from "@/components/layouts/admin-layout";

export default function Create() {
  return (
    <AdminLayout>
      <CreateRoomTypePage />
    </AdminLayout>
  );
}
