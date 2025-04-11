import Image from "next/image";
import { SucursalImage } from "@/public"; 
export default function Sucursal() {
return(
    <>
    <div className="#000">
    <div>
    <p className="font-semibold text-[16px] text-center pt-32">Más información</p>
    <h1 className="font-semibold text-[64px] text-center pb-3">Nuestras <span className="text-[#0096D7]">sucursales</span></h1>
    </div>
    <div className="flex flex-row justify-center ">
        <div className="flex flex-col px-10">
    <h3 className=" font-semibold text-[20px] pb-3 text-center">Sede central</h3>
    <p className="text-center text-[18px]">Av. El callao 1328, Grand Bourg, Buenos Aires.</p>
    <p className="text-center text-[18px] pb-1">Atención comercial 02320 - 483000</p>
    <Image src={SucursalImage} alt="Sucursal image" width={584} height={584}></Image>
    </div>

<div className="flex flex-col ">
    <h3 className="font-semibold text-[20px] pb-3 text-center">Sucursal Pablo Nogués</h3>
    <p className="text-center text-[18px]">Ejército de los Andes 2622 - Pablo Nogués.</p>
    <p className="text-center text-[18px] pb-1">Atención comercial 02320 - 486000</p>
    <Image src={SucursalImage} alt="Sucursal image" width={584} height={584} className="pb-28"></Image>
    </div>
    </div>
    </div>
 
    </>
)
}