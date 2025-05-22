import { FaRegUserCircle } from "react-icons/fa";

export default function ButtonAccount() {
  const handleRedirect = () => {
    window.open('https://migestarcoop.com.ar/GrandBourg/login', '_blank')
  }

  return (
    <button
      onClick={handleRedirect}
      className="flex items-center p-0 px-[17px] w-[160px] h-[48px] justify-center gap-2 py-2 bg-white text-[#0F172A] shadow-md mt-10 mb-10 border border-gray-300 rounded-[64px] hover:bg-gray-100 transition"
    >
      <FaRegUserCircle className="mb-0.5" size={18} />
      <span className="mr-1 font-semibold">Mi cuenta</span>
    </button>
  );
}
