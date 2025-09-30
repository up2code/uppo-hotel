import { nanoid } from "nanoid";

export const DEFAULT_ROOM_TYPE_FORM_DATA: RoomTypeFormData = {
  name: "",
  roomSize: 0,
  guests: 2,
  bedType: "single",
  pricePerNight: 0,
  promotionPrice: 0,
  hasPromoPrice: false,
  amenities: [{ id: nanoid(), value: "" }],
};

export type BedType = "single" | "double" | "queen" | "king";

export interface RoomType {
  id?: string;
  name: string;
  roomSize: number;
  bedType: BedType;
  guests: number;
  pricePerNight: number;
  promotionPrice?: number;
  hasPromoPrice?: boolean;
  amenities: string[];
}

export interface AmenityFormItem {
  id?: string;
  value: string;
}

export interface RoomTypeFormData {
  name: string;
  roomSize: number;
  bedType: BedType;
  guests: number;
  pricePerNight: number;
  promotionPrice?: number;
  hasPromoPrice?: boolean;
  amenities: AmenityFormItem[];
}
