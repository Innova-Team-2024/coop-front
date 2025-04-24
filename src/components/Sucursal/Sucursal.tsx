import Image from "next/image";
import { SucursalImage } from "@/public";
import React from "react";

export default function Sucursal() {
  return (
    <>
      <div className="bg-[#f9f9ff] mt-28 mb-14">
        <div className="text-center pt-32">
          <p className="font-semibold text-[16px] sm:text-[18px]">
            Más información
          </p>
          <h1 className="font-semibold text-[32px] sm:text-[64px] pb-3">
            Nuestras <span className="text-[#0096D7]">sucursales</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 px-6 sm:px-20">
          {/* Sede Central */}
          <div className="flex flex-col items-center text-center sm:text-left">
            <h3 className="font-semibold text-[16px] sm:text-[20px] pb-3">
              Sede central
            </h3>
            <p className="text-[14px] sm:text-[18px]">
              Av. El Callao 1328, Grand Bourg, Buenos Aires.
            </p>
            <p className="text-[14px] sm:text-[18px] pb-3">
              Atención comercial 02320 - 483000
            </p>
            <Image
              src={SucursalImage}
              alt="Sucursal image"
              width={584}
              height={584}
              className="rounded-lg shadow-lg mb-14"
            />
          </div>

          {/* Sucursal Pablo Nogués */}
          <div className="flex flex-col items-center text-center sm:text-left">
            <h3 className="font-semibold text-[16px] sm:text-[20px] pb-3">
              Sucursal Pablo Nogués
            </h3>
            <p className="text-[14px] sm:text-[18px]">
              Ejército de los Andes 2622 - Pablo Nogués.
            </p>
            <p className="text-[14px] sm:text-[18px] pb-3">
              Atención comercial 02320 - 486000
            </p>
            <Image
              src={SucursalImage}
              alt="Sucursal image"
              width={584}
              height={584}
              className="rounded-lg shadow-lg mb-14"
            />
          </div>
        </div>
      </div>
    </>
  );
}
