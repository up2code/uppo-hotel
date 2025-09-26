import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({
  path,
  label,
  active,
}: {
  path: string;
  label: string;
  active?: boolean;
}) => {
  return (
    <li className={`min-h-8 hover:cursor-pointer ${active ? "font-bold" : ""}`}>
      <Link href={path}>{label}</Link>
    </li>
  );
};

export default function SideBar() {
  const pathname = usePathname();
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
}
