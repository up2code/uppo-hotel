import { useQuery } from "@/hooks/useQuery";
import { RoomType } from "../types/room-type";

export const useGetRoomType = (id: string) => {
  return useQuery<RoomType>(`/room-types/${id}`, () => getRoomType(id));
};

export const getRoomType = async (id: string) => {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Simulated room data
  const room: RoomType = {
    id,
    name: "Sample Room ja",
    roomSize: 30,
    bedType: "queen",
    guests: 4,
    pricePerNight: 3000,
    promotionPrice: 2000,
    mainImageUrl: "https://picsum.photos/200",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
  };

  return room;
};
