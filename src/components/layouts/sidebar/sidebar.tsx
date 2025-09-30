import * as React from "react";
import { MenuItem } from "./menu-item";
import {
  BriefcaseBusiness,
  Hotel,
  ChartPie,
  Box,
  ClipboardCheck,
  MessageSquareText,
  LogOut,
} from "lucide-react";

export interface SidebarProps {
  pathname?: string;
}

export const Sidebar = ({ pathname }: SidebarProps) => {
  return (
    <ul className="flex flex-col bg-sidebar-primary">
      <div className="w-full flex items-center justify-center h-16">LOGO</div>
      <MenuItem
        path="/admin/bookings"
        label="Customer Booking"
        icon={<BriefcaseBusiness className="opacity-60" />}
        active={pathname === "/admin/bookings"}
      />
      <MenuItem
        path="/admin/rooms"
        label="Rooms Management"
        icon={<ClipboardCheck className="opacity-60" />}
        active={pathname === "/admin/rooms"}
      />
      <MenuItem
        path="/admin/hotel"
        label="Hotel Management"
        icon={<Hotel className="opacity-60" />}
        active={pathname === "/admin/hotel"}
      />
      <MenuItem
        path="/admin/room-types"
        label="Room & Property"
        icon={<Box className="opacity-60" />}
        active={pathname === "/admin/room-types"}
      />
      <MenuItem
        path="/admin/analytics"
        label="Analytics Dashboard"
        icon={<ChartPie className="opacity-60" />}
        active={pathname === "/admin/analytics"}
      />
      <MenuItem
        path="/admin/chatbot"
        label="Chatbot Setup"
        icon={<MessageSquareText className="opacity-60" />}
        active={pathname === "/admin/chatbot"}
      />
      <div className="w-full h-24" />
      <div className="w-full border-1 border-[#455C50]" />
      <MenuItem path="/" label="Log Out" icon={<LogOut />} />
    </ul>
  );
};
