import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { RoomType } from "../../types/room-type";
import { DataTable } from "@/components/ui/data-table";
import Image from "next/image";

export interface RoomTypesTableProps {
  items?: RoomType[];
}

const columns: ColumnDef<RoomType>[] = [
  {
    accessorKey: "mainImageUrl",
    header: "Image",
    cell: (info) => {
      return (
        <Image
          src={info.getValue() as string}
          alt="Room Image"
          width={144}
          height={80}
          className="w-36 h-20 object-cover rounded"
        />
      );
    },
  },
  { accessorKey: "name", header: "Room type" },
  {
    accessorKey: "pricePerNight",
    header: "Price",
  },
  { accessorKey: "promotionPrice", header: "Promotion Price" },
  {
    accessorKey: "guests",
    header: "Guests(s)",
  },
  {
    accessorKey: "bedType",
    header: "Bed Type",
  },
  {
    accessorKey: "roomSize",
    header: "Room Size",
    cell: (info) => `${info.getValue()} sqm`,
  },
];

export const RoomTypesTable = ({ items = [] }: RoomTypesTableProps) => {
  return <DataTable items={items} columns={columns} />;
};
