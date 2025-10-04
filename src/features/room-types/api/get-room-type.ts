import { useQuery } from "@/hooks/useQuery";
import { RoomType } from "../types/room-type";
import { paths } from "@/config/paths";

export const useGetRoomType = (id: string) =>
  useQuery<RoomType>(`/room-types/${id}`, () => getRoomType(id));

export const getRoomType = async (id: string): Promise<RoomType> => {
  const response = await fetch(paths.api.roomTypes.details(id));
  const result = (await response.json()) as RoomType;

  return result;
};
