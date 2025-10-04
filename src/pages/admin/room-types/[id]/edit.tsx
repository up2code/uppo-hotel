import { AdminLayout } from "@/components/layouts/admin-layout";
import { CenterLoading } from "@/components/ui/center-loading";
import { paths } from "@/config/paths";
import { EditRoomType } from "@/features/room-types/components/edit-room-type";
import { useRouter } from "next/router";
import React from "react";

const Edit = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <AdminLayout pathname={paths.admin.roomTypes.list()}>
      {id ? <EditRoomType id={id as string} /> : <CenterLoading />}
    </AdminLayout>
  );
};

export default Edit;
