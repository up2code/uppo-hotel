import { useMutate } from "@/hooks/useMutate";
import { RoomType } from "../types/room-type";

export interface CreateRoomResponse {
  success: boolean;
}

export const useCreateRoomType = () => {
  return useMutate<RoomType, CreateRoomResponse>(createRoomType);
};

export const createRoomType = async (data: RoomType) => {
  console.log("Creating room", data);

  // Simulate creating room
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};
