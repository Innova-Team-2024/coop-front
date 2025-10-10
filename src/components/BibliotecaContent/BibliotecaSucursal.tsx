
"use client";

import Image from "next/image";
import { MapaBiblioteca } from "../../../public";

export default function BibliotecaSucursal() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-20 pt-20 pb-28 flex flex-col items-center gap-10">
      {/* Texto superior */}
      <p className="text-neutral-950 text-lg font-semibold leading-relaxed">
        Más información
      </p>

      {/* Título principal en UNA sola línea */}
      <h2 className="text-[36px] md:text-6xl font-semibold leading-[1.2] text-neutral-950 text-center whitespace-nowrap">
        <span className="text-neutral-950">Nuestra</span>{" "}
        <span className="text-sky-600">sucursal</span>
      </h2>

      {/* Datos de ubicación */}
      <div className="flex flex-col items-center gap-2 max-w-[1200px] w-full">
        <p className="text-xl font-medium leading-loose text-[#222427] text-center">
          Biblioteca Segundo Severino Lago
        </p>
        <p className="text-lg font-normal leading-normal text-[#222427] text-center">
          Paso de los Patos 450 - Grand Bourg
          <br />
          Atención al cliente 02320 – 685242
          <br />
          Lunes, martes y viernes: 10:00 a 13:00
          <br />
          Miércoles y jueves: 14:00 a 17:00
        </p>

        <Image
          src={MapaBiblioteca}
          alt="Ubicación de la Biblioteca"
          width={1000}
          height={500}
          className="rounded-xl mt-4"
        />
      </div>
    </section>
  );
}
