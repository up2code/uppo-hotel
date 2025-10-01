import * as React from "react";
import { useListRoomType } from "../../api/list-room-types";

export const ListRoomTypes = () => {
  const { data } = useListRoomType();

  return (
    <div>
      <h2>Room Types</h2>
      <ul>
        {data?.items.map((roomType) => (
          <li key={roomType.id}>
            {roomType.name} - ${roomType.pricePerNight} - Amenities:{" "}
            {roomType.amenities.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};
