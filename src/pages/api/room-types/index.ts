import createRoomTypeHandler from "@/features/room-types/server/create-room-type";
import getRoomTypesHandler from "@/features/room-types/server/get-room-types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "POST":
      createRoomTypeHandler(req, res);
      break;
    case "GET":
      getRoomTypesHandler(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
