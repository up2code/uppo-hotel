import { RoomType } from "../types/room-type";

export const getRoomType = async (id: string) => {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulated room data
  const room: RoomType = {
    id,
    name: "Sample Room ja",
    roomSize: 30,
    bedType: "queen",
    // amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
  };

  return room;
};
