import * as React from "react";
import { useListRoomType } from "../../api/list-room-types";
import { RoomTypesTable } from "../room-types-table";
import { TextInput } from "@/components/shared/text-input";

export interface RoomTypeListProps {
  query?: string;
  onQueryChange?: (newQuery: string) => void;
}

export const RoomTypeList = ({ query, onQueryChange }: RoomTypeListProps) => {
  const { data, isLoading } = useListRoomType(query || "");
  const onSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      onQueryChange?.(newQuery);
    },
    [onQueryChange],
  );

  return (
    <div>
      <h2>Room Types</h2>
      <p>Search term: {query}</p>
      <TextInput
        label="Search"
        placeholder="Search room types..."
        onChange={onSearchChange}
        value={query}
      />
      {isLoading && <p>Loading...</p>}
      <RoomTypesTable items={data?.items} />
    </div>
  );
};
