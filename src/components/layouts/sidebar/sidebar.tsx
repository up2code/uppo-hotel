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
import { paths } from "@/config/paths";

export interface SidebarProps {
  pathname?: string;
}

export const Sidebar = ({ pathname }: SidebarProps) => {
  return (
    <ul className="flex flex-col bg-sidebar-primary">
      <div className="w-full flex items-center justify-center h-16">LOGO</div>
      <MenuItem
        path={paths.admin.bookings.list()}
        label="Customer Booking"
        icon={<BriefcaseBusiness className="opacity-60" />}
        active={pathname === paths.admin.bookings.list()}
      />
      <MenuItem
        path={paths.admin.rooms.list()}
        label="Rooms Management"
        icon={<ClipboardCheck className="opacity-60" />}
        active={pathname === paths.admin.rooms.list()}
      />
      <MenuItem
        path={paths.admin.hotel()}
        label="Hotel Management"
        icon={<Hotel className="opacity-60" />}
        active={pathname === paths.admin.hotel()}
      />
      <MenuItem
        path={paths.admin.roomTypes.list()}
        label="Room & Property"
        icon={<Box className="opacity-60" />}
        active={pathname === paths.admin.roomTypes.list()}
      />
      <MenuItem
        path={paths.admin.dashboard()}
        label="Analytics Dashboard"
        icon={<ChartPie className="opacity-60" />}
        active={pathname === paths.admin.dashboard()}
      />
      <MenuItem
        path={paths.admin.chatbot()}
        label="Chatbot Setup"
        icon={<MessageSquareText className="opacity-60" />}
        active={pathname === paths.admin.chatbot()}
      />
      <div className="w-full h-24" />
      <div className="w-full border-1 border-[#455C50]" />
      <MenuItem path="/" label="Log Out" icon={<LogOut />} />
    </ul>
  );
};
