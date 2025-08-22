
"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface NosotrosSectionProps {
  titulo: string;
  textoCompleto: string;
  imagen: StaticImageData;
  imagenAlt?: string;
  colorCategoria: string; // ej: "text-blue-600"
  colorValor: string;     // ej: "text-green-700"
}

export default function NosotrosSection({
  titulo,
  textoCompleto,
  imagen,
  imagenAlt = "Imagen sección Nosotros",
  colorCategoria = "text-blue-600",
  colorValor = "text-green-700",
}: NosotrosSectionProps) {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  const [esEscritorio, setEsEscritorio] = useState(false);

  useEffect(() => {
    const actualizarVista = () => {
      setEsEscritorio(window.innerWidth >= 768);
    };

    actualizarVista();
    window.addEventListener("resize", actualizarVista);
    return () => window.removeEventListener("resize", actualizarVista);
  }, []);

  const primerParrafo = textoCompleto.split("Acompañamos")[0] + "Acompañamos...";

  return (
    <section className="w-full px-6 md:px-[120px] py-[60px]">
      <div className="flex flex-col lg:flex-row gap-10 items-start max-w-[1200px] mx-auto">
        {/* Imagen - solo desktop */}
        <div className="hidden md:block relative w-full lg:w-[690px] h-[403px] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src={imagen}
            alt={imagenAlt}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-4 max-w-full md:max-w-[470px]">
          <p className={`text-base font-medium leading-loose text-center md:text-left ${colorCategoria}`}>
            Nosotros
          </p>
          <h2 className="text-3xl font-semibold leading-10 text-zinc-900 text-center md:text-left">
            {titulo.split(" ").slice(0, -1).join(" ")}{" "}
            <span className={colorValor}>
              {titulo.split(" ").slice(-1)}
            </span>
          </h2>

          {/* Imagen - solo mobile */}
          <div className="block md:hidden w-full h-[200px] relative rounded-2xl overflow-hidden">
            <Image
              src={imagen}
              alt={imagenAlt}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Texto */}
          <p className="text-sm md:text-base font-normal text-zinc-900 leading-tight text-center md:text-left">
            {(esEscritorio || mostrarTextoCompleto)
              ? textoCompleto
              : primerParrafo}
          </p>

          {/* Botón "Ver más..." solo en mobile */}
          {!esEscritorio && !mostrarTextoCompleto && (
            <button
              onClick={() => setMostrarTextoCompleto(true)}
              className="text-green-700 text-sm font-bold self-center"
            >
              Ver más...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
