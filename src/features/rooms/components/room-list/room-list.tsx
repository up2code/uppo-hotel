import * as React from "react";
import { AdminHeader } from "@/components/layouts/admin-header";
import { TextInput } from "@/components/shared/text-input";
import { CenterLoading } from "@/components/ui/center-loading";
import { RoomTable } from "../room-table";
import { useListRooms } from "../../api/list-rooms";
import { Button } from "@/components/shared/button";

export interface RoomListProps {
  query?: string;
  onQueryChange?: (newQuery: string) => void;
}

export const RoomList = ({ query, onQueryChange }: RoomListProps) => {
  const { data, isLoading } = useListRooms(query || "");
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
        <h1 className="flex-1">Room Management</h1>
        <div className="flex gap-4 items-center justify-center min-w-[400px]">
          <TextInput
            placeholder="Search..."
            onChange={onSearchChange}
            value={query}
          />
          <Button className="btn-primary">+ Create Room</Button>
        </div>
      </AdminHeader>
      <div className="p-8 bg-gray-100">
        <RoomTable items={data?.items} />
        {isLoading && (
          <div className="p-4">
            {" "}
            <CenterLoading />{" "}
          </div>
        )}
      </div>
    </div>
  );
};
