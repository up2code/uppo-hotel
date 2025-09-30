import { CreateRoomTypePage } from "@/app/pages/admin/room-types/create-room-type-page";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const handleOnSuccess = () => {
    router.push("/admin/room-types");
  };

  const handleOnCancel = () => {
    router.push("/admin/room-types");
  };

  return (
    <CreateRoomTypePage onSuccess={handleOnSuccess} onCancel={handleOnCancel} />
  );
}
