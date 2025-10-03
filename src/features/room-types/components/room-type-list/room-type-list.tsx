import * as React from "react";
import { useListRoomType } from "../../api/list-room-types";
import { RoomTypesTable } from "../room-types-table";
import { TextInput } from "@/components/shared/text-input";
import { AdminHeader } from "@/components/layouts/admin-header";
import { Button } from "@/components/shared/button";

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
      <AdminHeader>
        <h1 className="flex-1">Room and Property</h1>
        <div className="flex gap-4 items-center justify-center min-w-[400px]">
          <TextInput
            placeholder="Search room types..."
            onChange={onSearchChange}
            value={query}
          />

          <Button className="btn-primary">+ Create Room</Button>
        </div>
      </AdminHeader>
      <div className="p-8 bg-gray-100">
        {isLoading && <p>Loading...</p>}
        <RoomTypesTable items={data?.items} />
      </div>
    </div>
  );
};
