
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NosotrosJardin } from "@/public";

export default function NosotrosSection() {
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

  const textoCompleto = `En nuestro jardín, creemos que cada niño merece crecer en un entorno que lo escuche, lo valore y lo acompañe. Por eso, construimos un espacio educativo basado en el cooperativismo, donde el cuidado, la creatividad, la participación y el trabajo en equipo son parte del día a día. Acompañamos a cada niño con compromiso y calidez, promoviendo su autonomía, el pensamiento crítico y el vínculo con la comunidad. Nuestros educadores son guías atentos que acompañan cada etapa del desarrollo con respeto, fomentando la solidaridad, la honestidad y el deseo de aprender junto a otros. Porque educar, para nosotros, es mucho más que enseñar: es construir juntos un futuro mejor, con coherencia entre lo que decimos y lo que hacemos, y con la certeza de que, cuando crecemos en comunidad, crecemos de verdad.`;

  const primerParrafo = textoCompleto.split("Acompañamos")[0] + "Acompañamos...";

  return (
    <section className="w-full px-6 md:px-[120px] py-[60px]">
      <div className="flex flex-col lg:flex-row gap-10 items-start max-w-[1200px] mx-auto">
        
        {/* IMAGEN: Desktop visible - Mobile oculta aquí */}
        <div className="hidden md:block relative w-full lg:w-[690px] h-[403px] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src={NosotrosJardin}
            alt="Frente del Jardín"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* CONTENIDO */}
        <div className="flex flex-col gap-4 max-w-full md:max-w-[470px]">
          <p className="text-blue-600 text-base font-medium leading-loose text-center md:text-left">
            Nosotros
          </p>
          <h2 className="text-3xl font-semibold leading-10 text-zinc-900 text-center md:text-left">
            Defendamos nuestros <span className="text-green-700">valores</span>
          </h2>

          {/* IMAGEN: solo visible en mobile */}
          <div className="block md:hidden w-full h-[200px] relative rounded-2xl overflow-hidden">
            <Image
              src={NosotrosJardin}
              alt="Frente del Jardín"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* TEXTO */}
          <p className="text-sm md:text-base font-normal text-zinc-900 leading-tight text-center md:text-left">
            {(esEscritorio || mostrarTextoCompleto)
              ? textoCompleto
              : primerParrafo}
          </p>

          {/* BOTÓN "Ver más..." solo visible en mobile y si no se desplegó aún */}
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
