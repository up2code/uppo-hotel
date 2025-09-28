import { useMutate } from "@/hooks/useMutate";
import { useQuery } from "@/hooks/useQuery";
import { createContext, use } from "react";
import { updateRoom, UpdateRoomResponse } from "../api/update-room-type";
import { getRoomType } from "../api/get-room-type";
import { RoomType } from "../types/room-type";

interface EditRoomTypeContextProps {
  data: RoomType | null;
  loading: boolean;
  error: Error | undefined;
  requestUpdate: {
    mutate: (data: RoomType) => Promise<void>;
    loading: boolean;
    error: Error | undefined;
  };
}

const EditRoomTypeApiContext = createContext<
  EditRoomTypeContextProps | undefined
>(undefined);

export function useEditRoomType() {
  const context = use(EditRoomTypeApiContext);
  if (!context) {
    throw new Error(
      "useEditRoomType must be used within a EditRoomTypeProvider",
    );
  }
  return context;
}

export const EditRoomTypeProvider = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { data, loading, error } = useQuery<RoomType>(`room-${id}`, () =>
    getRoomType(id),
  );

  const requestUpdate = useMutate<RoomType, UpdateRoomResponse>((data) =>
    updateRoom(id as string, data),
  );

  return (
    <EditRoomTypeApiContext
      value={{
        data,
        loading,
        error,
        requestUpdate,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </EditRoomTypeApiContext>
  );
};
