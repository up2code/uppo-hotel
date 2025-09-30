import * as React from "react";
import { MenuItem } from "./menu-item";

export interface SidebarProps {
  pathname?: string;
}

export const Sidebar = ({ pathname }: SidebarProps) => {
  return (
    <ul className="flex flex-col gap-2 p-4">
      <MenuItem
        path="/admin/bookings"
        label="Customer Booking"
        active={pathname === "/admin/bookings"}
      />
      <MenuItem
        path="/admin/rooms"
        label="Rooms Management"
        active={pathname === "/admin/rooms"}
      />
      <MenuItem
        path="/admin/hotel"
        label="Hotel Management"
        active={pathname === "/admin/hotel"}
      />
      <MenuItem
        path="/admin/properties"
        label="Room & Property"
        active={pathname === "/admin/properties"}
      />
      <MenuItem
        path="/admin/analytics"
        label="Analytics Dashboard"
        active={pathname === "/admin/analytics"}
      />
      <MenuItem
        path="/admin/chatbot"
        label="Chatbot Setup"
        active={pathname === "/admin/chatbot"}
      />
    </ul>
  );
};
