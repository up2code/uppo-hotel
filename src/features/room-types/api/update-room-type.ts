import { useMutate } from "@/hooks/useMutate";
import { RoomType } from "../types/room-type";

export interface UpdateRoomResponse {
  success: boolean;
  data: RoomType;
}

export const useUpdateRoomType = (id: string) =>
  useMutate<RoomType, UpdateRoomResponse>((data) =>
    updateRoomType(`/room-types/${id}`, data),
  );

export const updateRoomType = async (id: string, data: RoomType) => {
  // Simulate updating room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true, data: { ...data, id } } as UpdateRoomResponse;
};
