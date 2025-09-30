import { useRouter } from "next/router";
import { AdminHeader } from "./admin-header";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export interface AdminLayoutProps {
  children: React.ReactNode;
  pathname?: string;
}

const AdminLayout = ({ children, pathname }: AdminLayoutProps) => {
  const { isFallback } = useRouter();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex items-center justify-between h-16 p-4 w-full bg-[#2F3E35] shadow-md z-10 text-white md:hidden">
        <div>Admin Panel Control</div>
        <div>
          <Menu className="md:hidden" />
        </div>
      </div>
      <aside className="w-64 border-r bg-[#2F3E35] text-white hidden md:block md:h-full">
        <Sidebar pathname={pathname} />
      </aside>
      <main className="flex-1 bg-[#F6F7FD] min-h-0 overflow-auto">
        {isFallback ? <div>Loading...</div> : children}
      </main>
    </div>
  );
};

const AdminContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-8">{children}</div>;
};

AdminLayout.Header = AdminHeader;
AdminLayout.Content = AdminContent;

export { AdminLayout };
