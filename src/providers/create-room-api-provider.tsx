import { useMutate } from "@/hooks/useMutate";
import { createContext, use } from "react";

interface CreateRoomApiContextProps {
  mutate: (data: Room) => Promise<void>;
  loading: boolean;
  error: Error | undefined;
}

const CreateRoomApiContext = createContext<
  CreateRoomApiContextProps | undefined
>(undefined);

interface CreateRoomResponse {
  success: boolean;
}

const createRoom = async (data: Room) => {
  console.log("Creating room", data);

  // Simulate creating room
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};

export function useCreateRoomApi() {
  const context = use(CreateRoomApiContext);
  if (!context) {
    throw new Error("useCreateRoomApi must be used within a RoomApiProvider");
  }
  return context;
}

export const CreateRoomApiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { mutate, loading, error } = useMutate<Room, CreateRoomResponse>(
    (data) => createRoom(data)
  );

  return (
    <CreateRoomApiContext
      value={{
        mutate,
        loading,
        error,
      }}
    >
      {children}
    </CreateRoomApiContext>
  );
};
