import { useQuery } from "@/hooks/useQuery";
import { paths } from "@/config/paths";
import { Hotel } from "../types/hotel";

export const useGetHotel = () =>
  useQuery<Hotel>(paths.api.hotel(), () => getHotel());

export const getHotel = async (): Promise<Hotel> => {
  const response = await fetch(paths.api.hotel());
  const result = (await response.json()) as Hotel;

  return result;
};
