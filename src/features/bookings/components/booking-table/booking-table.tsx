import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Booking } from "../../types/bookings";

export interface BookingTableProps {
  items?: Booking[];
}

const columns: ColumnDef<Booking>[] = [
  { accessorKey: "customerName", header: "Customer name" },
  { accessorKey: "guests", header: "Guest(s)" },
  { accessorKey: "roomType", header: "Room type" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "checkIn", header: "Check-in date" },
  { accessorKey: "checkOut", header: "Check-out date" },
  { accessorKey: "bedType", header: "Bed type" },
];

export const BookingTable = ({ items = [] }: BookingTableProps) => {
  return <DataTable items={items} columns={columns} />;
};
