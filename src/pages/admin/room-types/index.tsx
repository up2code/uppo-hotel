import { ListRoomTypePage } from "@/app/pages/admin/room-types/list-room-type-page";
import { useRouter } from "next/navigation";
import React from "react";

const Index = () => {
  const router = useRouter();

  return (
    <ListRoomTypePage
      onClickCreate={() => router.push("/admin/room-types/create")}
    />
  );
};

export default Index;
