import { useRouter } from "next/router";
import SideBar from "../ui/side-bar";
import { AdminHeader } from "./admin-header";
import { Menu } from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { isFallback } = useRouter();

  return (
    <div className="block md:flex h-screen">
      <div className="flex items-center justify-between h-16 p-4 w-full bg-[#2F3E35] shadow-md z-10 text-white md:hidden">
        <div>Admin Panel Control</div>
        <div>
          <Menu className="md:hidden" />
        </div>
      </div>
      <aside className="h-full w-48 border-r bg-[#2F3E35] text-white hidden md:block pt-16">
        <SideBar />
      </aside>
      <main className="flex-1 bg-[#F6F7FD]">
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
