import { useMutate } from "@/hooks/useMutate";
import { createContext, use } from "react";
import { CreateRoomResponse, createRoomType } from "../api/create-room-type";
import { RoomType } from "../types/room-type";

interface CreateRoomTypeContextProps {
  requestCreate: (data: RoomType) => Promise<void>;
  loading: boolean;
  error: Error | undefined;
}

const CreateRoomTypeApiContext = createContext<
  CreateRoomTypeContextProps | undefined
>(undefined);

export function useCreateRoomType() {
  const context = use(CreateRoomTypeApiContext);
  if (!context) {
    throw new Error(
      "useCreateRoomType must be used within a CreateRoomTypeProvider",
    );
  }
  return context;
}

export const CreateRoomTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { mutate, loading, error } = useMutate<RoomType, CreateRoomResponse>(
    createRoomType,
  );

  return (
    <CreateRoomTypeApiContext
      value={{
        loading,
        error,
        requestCreate: mutate,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </CreateRoomTypeApiContext>
  );
};
