import type { NextApiRequest, NextApiResponse } from "next";
import { Room } from "../types/room";
import { mockRoomList } from "../__test__/mock-room-data";

export default async function getRoomsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Room[]>,
) {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json(mockRoomList);
}
