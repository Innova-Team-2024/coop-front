
"use client";

import Image, { StaticImageData } from "next/image";

interface ArancelesCardProps {
  titulo: string;
  matricula: string;
  cuotaActual: string;
  cuotaDesde?: string;
  logo: StaticImageData;
  logoAlt?: string;
}

export default function ArancelesCard({
  titulo,
  matricula,
  cuotaActual,
  cuotaDesde,
  logo,
  logoAlt = "Logo Institución",
}: ArancelesCardProps) {
  return (
    <section className="flex justify-center items-center py-10">
      <div className="w-full max-w-[1040px] bg-white rounded-2xl border-2 border-lime-100 relative px-6 md:px-8 py-6 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-8 md:gap-0 overflow-hidden">
        {/* Título centrado */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-8">
          <h2 className="text-lg md:text-3xl font-semibold text-zinc-900">
            {titulo} <span className="text-teal-700">2025</span>
          </h2>
        </div>

        {/* Info aranceles */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-28 pt-16 md:pt-0 md:pl-[120px]">
          {/* Matrícula */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-700" />
              <p className="text-sm md:text-xl font-medium text-slate-700">Matrícula</p>
            </div>
            <p className="text-sm md:text-xl font-normal text-slate-700">{matricula}</p>
          </div>

          {/* Cuota actual */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-700" />
              <p className="text-sm md:text-xl font-medium text-slate-700">Cuota actual</p>
            </div>
            <p className="text-sm md:text-xl font-normal text-slate-700">{cuotaActual}</p>
          </div>

          {/* Cuota desde (solo si se pasa) */}
          {cuotaDesde && (
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-700" />
                <p className="text-sm md:text-xl font-medium text-slate-700">Cuota desde</p>
              </div>
              <p className="text-sm md:text-xl font-normal text-slate-700">{cuotaDesde}</p>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="pt-2 md:pt-0 md:pr-[120px]">
          <Image
            src={logo}
            alt={logoAlt}
            width={188}
            height={188}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
