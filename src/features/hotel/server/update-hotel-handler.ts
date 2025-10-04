import type { NextApiRequest, NextApiResponse } from "next";
import { Hotel } from "../types/hotel";

export default async function updateHotelHandler(
  req: NextApiRequest,
  res: NextApiResponse<Hotel>,
) {
  const { id } = req.query;
  if (typeof id !== "string") {
    res.status(400).json({} as Hotel);
    return;
  }
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const room: Hotel = {
    name: "Sample Hotel",
    description: "A lovely place to stay.",
    logoUrl: "https://picsum.photos/200",
  };

  res.status(200).json(room);
}
