import { PiUserCircleFill } from "react-icons/pi";

export default function ButtonAccount() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-md mt-10 mb-10 border border-gray-300 hover:bg-gray-100 transition">
      <PiUserCircleFill size={24} />
      <span>Mi cuenta</span>
    </button>
  );
}
