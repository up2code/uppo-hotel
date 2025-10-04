import * as React from "react";
import { useListBookings } from "../../api/list-bookings";
import { AdminHeader } from "@/components/layouts/admin-header";
import { TextInput } from "@/components/shared/text-input";
import { BookingTable } from "../booking-table";
import { CenterLoading } from "@/components/ui/center-loading";

export interface BookingListProps {
  query?: string;
  onQueryChange?: (newQuery: string) => void;
}

export const BookingList = ({ query, onQueryChange }: BookingListProps) => {
  const { data, isLoading } = useListBookings(query || "");
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
            placeholder="Search..."
            onChange={onSearchChange}
            value={query}
          />
        </div>
      </AdminHeader>
      <div className="p-8 bg-gray-100">
        <BookingTable items={data?.items} />
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
