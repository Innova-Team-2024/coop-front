
"use client";

import Image, { StaticImageData } from "next/image";

interface SucursalInfo {
  nombre: string;
  direccion: string;
  telefono: string;
  imagen: StaticImageData;
}

interface SucursalProps {
  titulo: string;
  subtitulo: string;
  sucursales: SucursalInfo[];
}

export default function Sucursal({
  titulo,
  subtitulo,
  sucursales,
}: SucursalProps) {
  return (
    <section className="mt-0 sm:mt-28 sm:mb-14">
      <div className="text-center pt-32">
        <p className="font-semibold text-[16px] sm:text-[18px]">{subtitulo}</p>
        <h1 className="font-semibold text-[32px] sm:text-[64px] pb-3">
          {titulo.split(" ")[0]}{" "}
          <span className="text-titleSucursal">{titulo.split(" ")[1]}</span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-10 px-6 sm:px-20">
        {sucursales.map((sucursal, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center sm:text-left"
          >
            <h3 className="font-semibold text-[16px] sm:text-[20px] pb-3">
              {sucursal.nombre}
            </h3>
            <p className="text-[14px] sm:text-[18px]">{sucursal.direccion}</p>
            <p className="text-[14px] sm:text-[18px] pb-3">{sucursal.telefono}</p>
            <Image
              src={sucursal.imagen}
              alt={`Mapa de ${sucursal.nombre}`}
              width={584}
              height={584}
              className="rounded-lg shadow-lg mb-14"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
