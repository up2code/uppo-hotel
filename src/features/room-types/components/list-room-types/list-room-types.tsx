import * as React from "react";
import { useListRoomType } from "../../api/list-room-types";
import { RoomTypesTable } from "../room-types-table";
import { TextInput } from "@/components/shared/text-input";

export interface ListRoomTypesProps {
  query?: string;
}
const buildUrl = (searchTerm: string) => {
  // Use URLSearchParams for clean query strings
  const params = new URLSearchParams();
  if (searchTerm) {
    params.append("q", searchTerm);
  }
  return `/room-types?${params.toString()}`;
};

export const ListRoomTypes = ({ query }: ListRoomTypesProps) => {
  const [searchTerm, setSearchTerm] = React.useState(query || "");
  const key = React.useMemo(() => buildUrl(searchTerm), [searchTerm]);
  const { data } = useListRoomType(key);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Implement search functionality if needed
    setSearchTerm(value);
  };

  return (
    <div>
      <h2>Room Types</h2>
      <TextInput
        label="Search"
        placeholder="Search room types..."
        onChange={onSearchChange}
      />
      <RoomTypesTable items={data?.items} />
    </div>
  );
};
