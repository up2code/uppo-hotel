import * as React from "react";
import { RoomType } from "../../types/room-type";

export interface RoomTypesTableProps {
  items?: RoomType[];
}

export const RoomTypesTable = ({ items }: RoomTypesTableProps) => {
  return (
    <ul>
      {items?.map((roomType) => (
        <li key={roomType.id}>
          {roomType.name} - ${roomType.pricePerNight} - Amenities:{" "}
          {roomType.amenities.join(", ")}
        </li>
      ))}
    </ul>
  );
};
