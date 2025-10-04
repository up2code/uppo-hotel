import { useQuery } from "@/hooks/useQuery";
import { RoomType } from "../types/room-type";
import { useDebounce } from "@/hooks/use-debounce";

export interface PaginationResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  items: T[];
}

export const useListRoomType = (query: string) => {
  const debouncedSearchTerm = useDebounce(query || "", 300);

  return useQuery<PaginationResponse<RoomType>>(
    `/room-types?q=${debouncedSearchTerm}`,
    () => listRoomTypes(),
  );
};

export const listRoomTypes = async (): Promise<
  PaginationResponse<RoomType>
> => {
  const response = await fetch("/api/room-types");
  const result = (await response.json()) as RoomType[];

  return {
    total: result.length,
    page: 0,
    pageSize: 10,
    items: result,
  } as PaginationResponse<RoomType>;
};
