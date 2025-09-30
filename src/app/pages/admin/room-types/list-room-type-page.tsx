import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/shared/button";

export interface ListRoomTypePageProps {
  onClickCreate?: () => void;
}

export const ListRoomTypePage = ({ onClickCreate }: ListRoomTypePageProps) => {
  return (
    <AdminLayout>
      <div>List Room Type Page</div>
      <Button onClick={onClickCreate}>Create</Button>
    </AdminLayout>
  );
};
