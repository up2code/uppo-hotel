import Link from "next/link";

export const MenuItem = ({
  path,
  label,
  active,
}: {
  path: string;
  label: string;
  active?: boolean;
}) => {
  return (
    <li
      className={`min-h-9 hover:cursor-pointer bg-[#2F3E35] text-white ${active ? "font-bold bg-[#5D7B6A]" : ""}`}
    >
      <Link href={path}>{label}</Link>
    </li>
  );
};
