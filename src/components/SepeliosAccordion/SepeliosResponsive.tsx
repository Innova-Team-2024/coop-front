
'use client';

import { useEffect, useState } from 'react';
import { SepeliosAccordion } from '@/components';

export default function SepeliosResponsive() {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  const [esEscritorio, setEsEscritorio] = useState(false);

  useEffect(() => {
    const actualizarVista = () => {
      setEsEscritorio(window.innerWidth >= 768);
    };

    actualizarVista();
    window.addEventListener('resize', actualizarVista);
    return () => window.removeEventListener('resize', actualizarVista);
  }, []);

  const textoResumido =
    'Para contratar nuestros servicios, puede realizarlo en forma presencial en las oficinas comerciales de la Cooperativa, o bien, consultar vía email los planes y características en ventas@interbourg.com.ar. Requisitos para adherirse: nombre, DNI y fecha de nacimiento del grupo familiar.';

  const textoCompleto = `Para contratar nuestros servicios, puede realizarlo en forma presencial en las oficinas comerciales de la Cooperativa, o bien, consultar vía email los planes y características en ventas@interbourg.com.ar

Requisitos para adherirse al sistema de financiación colectiva:
• Nombre y apellido
• Número de documento
• Fecha de nacimiento del titular y de todos los integrantes del grupo familiar

Cómo adherirse:
El interesado debe presentarse personalmente en las oficinas de la Cooperativa para realizar el trámite.
Horario de atención: lunes a viernes de 8:30 a 16:00 hs.`;

  return (
    <>
      {/* 🌐 Escritorio */}
      {esEscritorio && (
        <div className="flex-col lg:flex-row gap-10 mt-10 max-w-[1200px] mx-auto hidden md:flex">
          <div className="w-full lg:w-[555.52px] h-72 bg-black/5 rounded-2xl relative">
            <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-indigo-800 rounded-xl" />
            <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-orange-500 rounded-xl" />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-[#000]">Cochería “Casa Oviedo”</h1>
            <SepeliosAccordion />
          </div>
        </div>
      )}

      {/* 📱 Mobile */}
      {!esEscritorio && (
        <div className="flex flex-col items-center text-center gap-6 mt-10">
          <h1 className="text-3xl font-semibold text-[#000]">Casa Oviedo</h1>

          <div className="w-full max-w-xs h-44 bg-black/5 rounded-lg relative">
            <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-indigo-800 rounded-lg" />
            <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-orange-500 rounded-lg" />
          </div>

          <p className="text-sm leading-tight font-normal text-[#000] px-2">
            {mostrarTextoCompleto ? textoCompleto : textoResumido}
          </p>

          {!mostrarTextoCompleto && (
            <button
              onClick={() => setMostrarTextoCompleto(true)}
              className="text-green-700 text-sm font-bold"
            >
              Ver más...
            </button>
          )}
          <div className="w-full px-4 mt-4">
            <SepeliosAccordion />
          </div>
        </div>
      )}
    </>
  );
}
