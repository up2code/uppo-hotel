import { useMutate } from "@/hooks/useMutate";
import { Hotel } from "../types/hotel";
import { paths } from "@/config/paths";

export interface UpdateHotelResponse {
  success: boolean;
  data: Hotel;
}

export const useUpdateHotel = () =>
  useMutate<Hotel, UpdateHotelResponse>((data) => updateHotel(data));

export const updateHotel = async (
  data: Hotel,
): Promise<UpdateHotelResponse> => {
  // Simulate updating room data by ID

  const response = await fetch(paths.api.hotel(), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update hotel");
  }

  return response.json();
};
