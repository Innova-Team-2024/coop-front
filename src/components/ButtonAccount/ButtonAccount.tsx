import { PiUserCircleFill } from "react-icons/pi";

export default function ButtonAccount() {
  return (
//     <div className="w-40 h-12 px-4 bg-white rounded-[64px] shadow-[0px_2px_4px_0px_rgba(148,163,184,1.00)] inline-flex justify-center items-center gap-1.5">
//     <div className="w-5 h-5 relative overflow-hidden">
//         <div className="w-5 h-5 left-0 top-0 absolute overflow-hidden">
//             <div className="w-5 h-5 left-0 top-0 absolute overflow-hidden">
//                 <div className="w-4 h-4 left-[2.06px] top-[2.06px] absolute bg-Grises-900" />
//             </div>
//         </div>
//     </div>
//     <div className="text-justify justify-start text-Grises-900 text-lg font-normal font-['Roboto'] tracking-wide">Mi cuenta</div>
// </div>
    <button className="outline-none bg-white rounded-lg shadow-md mt-10 mb-10">
      <PiUserCircleFill size={24} />
      <span>Mi cuenta</span>
    </button>
  );
}
