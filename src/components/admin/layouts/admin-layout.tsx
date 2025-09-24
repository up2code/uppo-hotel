import SideBar from "../ui/side-bar";
import { AdminHeader } from "./admin-header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <aside className="h-full w-48 border-r bg-[#2F3E35] text-white">
        <SideBar />
      </aside>
      <main className="flex-1 bg-[#F6F7FD]">{children}</main>
    </div>
  );
};

const AdminContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-8">{children}</div>;
};

AdminLayout.Header = AdminHeader;
AdminLayout.Content = AdminContent;

export { AdminLayout };
