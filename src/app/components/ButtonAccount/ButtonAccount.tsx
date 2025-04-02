import { FaRegUserCircle } from "react-icons/fa";

export default function ButtonAccount() {
  return (
    <button className="flex items-center p-0 px-[17px] w-[160px] h-[48px] justify-center gap-2 py-2 bg-white text-[#0F172A] shadow-md mt-10 mb-10 border border-gray-300 rounded-[64px] hover:bg-gray-100 transition">
      <FaRegUserCircle size={24}  />
      <span className="mr-1">Mi cuenta</span>
    </button>
  );
}