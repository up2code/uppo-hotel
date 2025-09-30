export const AdminHeader = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="h-16 bg-white shadow-xl border-b-1 border-b-gray-300/50 flex items-center justify-between px-4">
      {children}
    </div>
  );
};
