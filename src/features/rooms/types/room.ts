export type RoomStatus = "available" | "occupied" | "maintenance";
export interface Room {
  roomNumber: string;
  roomType: string;
  bedType: string;
  status: RoomStatus;
}
