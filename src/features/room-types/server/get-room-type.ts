import type { NextApiRequest, NextApiResponse } from "next";
import { RoomType } from "../types/room-type";

export default async function getRoomTypeHandler(
  req: NextApiRequest,
  res: NextApiResponse<RoomType>,
) {
  const { id } = req.query;
  if (typeof id !== "string") {
    res.status(400).json({} as RoomType);
    return;
  }
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

  res.status(200).json(room);
}
