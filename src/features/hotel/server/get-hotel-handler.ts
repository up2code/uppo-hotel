import type { NextApiRequest, NextApiResponse } from "next";
import { Hotel } from "../types/hotel";

export default async function getHotelHandler(
  req: NextApiRequest,
  res: NextApiResponse<Hotel>,
) {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data: Hotel = {
    name: "Sample Hotel",
    description: "A lovely place to stay.",
    logoUrl: "https://picsum.photos/200",
  };

  res.status(200).json(data);
}
