import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface Props {
  link?: string;
}

export default function ScrollInfoButton({ link = "#" }: Props) {
  return (
    <Link
      href={link}
      className="text-sm mt-10 flex items-center justify-center gap-2 font-normal outline-none"
      style={{
        color: "rgba(35, 37, 39, 1)",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      Consultar más información{" "}
      <MdKeyboardDoubleArrowDown
        size={24}
        style={{ color: "rgba(255, 64, 98, 1)" }}
      />
    </Link>
  );
}
