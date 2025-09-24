export const AdminHeader = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="h-16 bg-white shadow-xl flex items-center justify-between px-4">
      {children}
    </div>
  );
};
