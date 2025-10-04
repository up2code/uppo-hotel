import { ColumnDef } from "@tanstack/react-table";
import { Room } from "../../types/room";

export const roomColumns: ColumnDef<Room>[] = [
  { accessorKey: "roomNumber", header: "Room Number" },
  { accessorKey: "roomType", header: "Room Type" },
  { accessorKey: "bedType", header: "Bed Type" },
  { accessorKey: "status", header: "Status" },
];
