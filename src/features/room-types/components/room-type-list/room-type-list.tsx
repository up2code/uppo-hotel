import * as React from "react";
import { useListRoomType } from "../../api/list-room-types";
import { RoomTypesTable } from "../room-types-table";
import { TextInput } from "@/components/shared/text-input";
import { AdminHeader } from "@/components/layouts/admin-header";
import { Button } from "@/components/shared/button";
import Link from "next/link";
import { paths } from "@/config/paths";
import { CenterLoading } from "@/components/ui/center-loading";

export interface RoomTypeListProps {
  query?: string;
  onQueryChange?: (newQuery: string) => void;
  onClickCreate?: () => void;
}

export const RoomTypeList = ({
  query,
  onQueryChange,
  onClickCreate,
}: RoomTypeListProps) => {
  const { data, isLoading } = useListRoomType(query || "");
  const onSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      onQueryChange?.(newQuery);
    },
    [onQueryChange]
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

          <Link href={paths.admin.roomTypes.create()}>
            <Button className="btn-primary" onClick={onClickCreate}>
              + Create Room
            </Button>
          </Link>
        </div>
      </AdminHeader>
      <div className="p-8 bg-gray-100">
        <RoomTypesTable items={data?.items} />
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
