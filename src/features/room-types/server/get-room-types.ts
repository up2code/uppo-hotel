import type { NextApiRequest, NextApiResponse } from "next";
import { RoomType } from "../types/room-type";
import { mockRoomTypes } from "../components/room-types-table/__test__/sample-data";

export default async function getRoomTypesHandler(
  req: NextApiRequest,
  res: NextApiResponse<RoomType[]>,
) {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json(mockRoomTypes);
}
