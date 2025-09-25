import { useMutate } from "@/hooks/useMutate";
import { useQuery } from "@/hooks/useQuery";
import { createContext, use } from "react";

interface RoomApiContextProps {
  data: Room | null;
  loading: boolean;
  error: Error | undefined;
  requestUpdate: {
    mutate: (data: Room) => Promise<void>;
    loading: boolean;
    error: Error | undefined;
  };
  requestCreate: {
    mutate: (data: Room) => Promise<void>;
    loading: boolean;
    error: Error | undefined;
  };
}

const RoomApiContext = createContext<RoomApiContextProps | undefined>(
  undefined
);

const fetchRoomById = async (id: string) => {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulated room data
  const room: Room = {
    id,
    name: "Sample Room ja",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
  };

  return room;
};

interface UpdateRoomResponse {
  success: boolean;
}

interface CreateRoomResponse {
  success: boolean;
}

const updateRoomById = async (id: string, data: Room) => {
  console.log("Updating room", id, data);

  // Simulate updating room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};

const createRoom = async (data: Room) => {
  console.log("Creating room", data);

  // Simulate creating room
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};

export function useRoomApi() {
  const context = use(RoomApiContext);
  if (!context) {
    throw new Error("useRoomApi must be used within a RoomApiProvider");
  }
  return context;
}

export const RoomApiProvider = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { data, loading, error } = useQuery<Room>(`room-${id}`, () =>
    fetchRoomById(id)
  );

  const requestUpdate = useMutate<Room, UpdateRoomResponse>((data) =>
    updateRoomById(id as string, data)
  );

  const requestCreate = useMutate<Room, CreateRoomResponse>((data) =>
    createRoom(data)
  );

  return (
    <RoomApiContext
      value={{
        data,
        loading,
        error,
        requestCreate,
        requestUpdate,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </RoomApiContext>
  );
};
