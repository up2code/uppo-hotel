import { cn } from "@/lib/utils";
import Link from "next/link";

export interface MenuItemProps {
  path: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
}

export const MenuItem = ({ path, label, active, icon }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={path}
        className={cn(
          "min-h-20 hover:cursor-pointer px-4 flex items-center gap-4 hover:text-white w-full",
          active
            ? "bg-sidebar-accent text-white"
            : "bg-sidebar-primary text-sidebar-primary-foreground hover:opacity-75 hover:bg-sidebar-accent",
        )}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};
