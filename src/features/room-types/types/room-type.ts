export const DEFAULT_ROOM_TYPE_FORM_DATA: RoomTypeFormData = {
  name: "",
  roomSize: 0,
  guests: 2,
  bedType: "single",
};

export type BedType = "single" | "double" | "queen" | "king";

export interface RoomType {
  id?: string;
  name: string;
  roomSize: number;
  bedType: BedType;
  guests: number;
}

export interface RoomTypeFormData {
  name: string;
  roomSize: number;
  bedType: BedType;
  guests: number;
}
