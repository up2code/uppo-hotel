import { useQuery } from "@/hooks/useQuery";
import { useDebounce } from "@/hooks/use-debounce";
import { Booking } from "../types/bookings";
import { paths } from "@/config/paths";

export interface PaginationResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  items: T[];
}

export const useListBookings = (query: string) => {
  const debouncedSearchTerm = useDebounce(query || "", 300);

  return useQuery<PaginationResponse<Booking>>(
    `${paths.api.bookings.list()}?q=${debouncedSearchTerm}`,
    () => listBookings(),
  );
};

export const listBookings = async (): Promise<PaginationResponse<Booking>> => {
  const response = await fetch(paths.api.bookings.list());
  const result = (await response.json()) as Booking[];

  return {
    total: result.length,
    page: 0,
    pageSize: 10,
    items: result,
  } as PaginationResponse<Booking>;
};
