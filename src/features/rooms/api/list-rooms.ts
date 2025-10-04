import { useQuery } from "@/hooks/useQuery";
import { useDebounce } from "@/hooks/use-debounce";
import { paths } from "@/config/paths";
import { Room } from "../types/room";

export interface PaginationResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  items: T[];
}

export const useListRooms = (query: string) => {
  const debouncedSearchTerm = useDebounce(query || "", 300);

  return useQuery<PaginationResponse<Room>>(
    `${paths.api.rooms.list()}?q=${debouncedSearchTerm}`,
    () => listRooms(),
  );
};

export const listRooms = async (): Promise<PaginationResponse<Room>> => {
  const response = await fetch(paths.api.rooms.list());
  const result = (await response.json()) as Room[];

  return {
    total: result.length,
    page: 0,
    pageSize: 10,
    items: result,
  } as PaginationResponse<Room>;
};
