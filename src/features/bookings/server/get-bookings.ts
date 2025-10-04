import type { NextApiRequest, NextApiResponse } from "next";
import { mockBookingData } from "../__test__/mock-booking-data";
import { Booking } from "../types/bookings";

export default async function getBookingsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Booking[]>,
) {
  // Simulate fetching booking data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json(mockBookingData);
}
