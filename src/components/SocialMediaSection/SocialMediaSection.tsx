
"use client";

import Image, { StaticImageData } from "next/image";

interface SocialMediaButton {
  label: string;
  href: string;
}

interface SocialMediaSectionProps {
  categoria: string;
  tituloPrincipal1: string;
  tituloPrincipal2: string;
  descripcion: string;
  botones: SocialMediaButton[];
  imagen: StaticImageData;
  imagenAlt?: string;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  categoria,
  tituloPrincipal1,
  tituloPrincipal2,
  descripcion,
  botones,
  imagen,
  imagenAlt = "",
}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-[60px]">
      {/* MOBILE: estructura vertical */}
      <div className="flex flex-col md:hidden items-center text-center gap-4">
        <p className="text-sm font-medium text-indigo-800">{categoria}</p>

        <h2 className="text-3xl font-semibold text-zinc-900 leading-10">
          {tituloPrincipal1} <span className="text-rose-500">{tituloPrincipal2}</span>
        </h2>

        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-violet-500 rounded-lg" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-rose-500 rounded-lg" />
          <Image
            src={imagen}
            alt={imagenAlt}
            className="relative rounded-lg w-[312px] h-auto"
          />
        </div>

        <p className="text-base font-normal text-zinc-900 opacity-75 leading-tight">
          {descripcion}
        </p>

        <div className="flex gap-4">
          {botones.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-2 border border-rose-500 rounded-lg text-rose-500 text-sm font-normal hover:bg-rose-50 transition"
            >
              <span>{btn.label}</span>
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#FF3F63"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* DESKTOP: como estaba antes */}
      <div className="hidden md:flex flex-row items-start gap-10">
        <div className="md:w-[469px] pt-2">
          <p className="text-sm font-medium text-indigo-800 mb-2">{categoria}</p>
          <h2 className="text-3xl font-semibold text-zinc-900 leading-10">
            {tituloPrincipal1} <span className="text-rose-500">{tituloPrincipal2}</span>
          </h2>
          <p className="text-base font-normal text-zinc-900 opacity-75 leading-tight my-4">
            {descripcion}
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {botones.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2 border border-rose-500 rounded-lg text-rose-500 text-sm font-normal w-fit hover:bg-rose-50 transition"
              >
                <span>{btn.label}</span>
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="#FF3F63"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="relative mt-2">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-violet-500 rounded-lg" />
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-rose-500 rounded-lg" />
          <Image
            src={imagen}
            alt={imagenAlt}
            className="relative rounded-lg max-w-full"
            width={658}
            height={371}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
