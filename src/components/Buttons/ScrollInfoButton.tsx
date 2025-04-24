import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function ScrollInfoButton() {
  return (
    <button
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
    </button>
  );
}
