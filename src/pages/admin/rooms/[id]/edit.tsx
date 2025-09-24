import { AdminLayout } from "@/components/admin/layouts/admin-layout";
import { useMutate } from "@/hooks/useMutate";
import { useQuery } from "@/hooks/useQuery";
import { useRouter } from "next/router";
import React from "react";
import { RoomForm } from "@/components/admin/forms/room-form";

interface UpdateRoomResponse {
  success: boolean;
}

const fetchRoomById = async (id: string) => {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulated room data
  const room: Room = {
    id,
    name: "Sample Room ja",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
  };

  return room;
};

const updateRoomById = async (id: string, data: Room) => {
  console.log("Updating room", id, data);

  // Simulate updating room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};

const Spinner = () => <div>Loading...</div>;

export default function EditRoomPage() {
  return (
    <AdminLayout>
      <EditRoomPageContent />
    </AdminLayout>
  );
}

function EditRoomPageContent() {
  const {
    query: { id },
    isFallback,
  } = useRouter();

  // Fetch room data
  const {
    data: room,
    loading: fetching,
    error: fetchError,
  } = useQuery<Room>(`room-${id}`, () => fetchRoomById(id as string));

  // Mutation for updating room
  const {
    mutate: updateRoom,
    loading: updating,
    error: updateError,
  } = useMutate<Room, UpdateRoomResponse>((data) =>
    updateRoomById(id as string, data)
  );

  if (isFallback || fetching) {
    return <Spinner />;
  }

  const handleUpdateRoom = (data: Room) => {
    console.log(`data`, data);
    updateRoom(data);
  };

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <RoomForm
      mode="edit"
      room={room}
      loading={updating}
      onSubmit={handleUpdateRoom}
    />
  );
}
