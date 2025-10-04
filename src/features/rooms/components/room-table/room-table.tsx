import * as React from "react";
import { DataTable } from "@/components/ui/data-table";
import { roomColumns } from "./room-columns";
import { Room } from "../../types/room";

export interface RoomTableProps {
  items?: Room[];
}

export const RoomTable = ({ items = [] }: RoomTableProps) => {
  return <DataTable items={items} columns={roomColumns} />;
};
