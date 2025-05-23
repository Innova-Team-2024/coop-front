
"use client";

import { useState, useEffect } from "react";

export default function BibliotecaContent() {
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

  const parrafos = [
    `El sueño de contar con una biblioteca comunitaria, impulsado por nuestras socias Amanda Acosta y María Capdevila, se hizo realidad gracias al apoyo incondicional de su fundador, Segundo Severino Lago. El 23 de enero de 2006, inauguramos este espacio acompañados por el consejo administrativo de nuestra cooperativa, autoridades y socios.`,
    `Iniciamos con apenas 400 libros, y hoy la biblioteca alberga más de 3.400 unidades, muchas de ellas donadas generosamente por nuestros socios. Este espacio nació para brindar a la comunidad un lugar de acceso a la lectura, el conocimiento, el intercambio cultural y el estudio.`,
    `¡Los invitamos a sumarse y disfrutar de este hermoso espacio! Siempre estamos esperando nuevos lectores y, por supuesto, nuevos miembros que deseen compartir y aprender con nosotros. Esperamos a muchos más nuevos lectores que siempre serán bienvenidos a participar de nuestra hermosa biblioteca.`,
  ];

  const textoResumido = `El sueño de tener nuestra biblioteca por las socias Amanda Acosta y María Capdevila, pudo hacerse realidad gracias al apoyo de su fundador Segundo Severino Lago; el día 23 de enero del 2006 se inauguró junto al consejo`;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-28 pt-14 pb-28 flex flex-col items-center gap-12">
      {/* TÍTULO */}
      <div className="w-full flex flex-col items-center gap-4">
        <div className="text-center text-[#222427] text-3xl md:text-5xl font-semibold leading-[56px]">
          Defendamos lo nuestro
        </div>
      </div>

      {/* CONTENIDO RESPONSIVE */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-[40px]">
        {/* BLOQUE VIDEO DESACTIVADO */}
        <div className="w-full lg:w-[670px] flex items-center justify-center rounded-2xl bg-gray-100 h-40 md:h-96 text-gray-500 text-center">
          Video 
        </div>

        {/* TEXTO - ESCRITORIO */}
        <div className="hidden md:flex flex-col gap-4 mt-[-16px] w-[470px]">
          <div>
            <p className="text-Texto-general-Color text-2xl font-medium font-['Roboto'] leading-loose">
              Biblioteca
            </p>
            <p className="text-Texto-general-Color text-3xl font-semibold font-['Roboto'] leading-10">
              “Segundo Severino Lago”
            </p>
          </div>
          {parrafos.map((texto, i) => (
            <p
              key={i}
              className="text-Texto-general-Color text-base font-normal font-['Roboto'] leading-tight text-justify"
            >
              {texto}
            </p>
          ))}
        </div>

        {/* TEXTO - MOBILE */}
        <div className="md:hidden flex flex-col items-center gap-4 mt-6">
          <div className="text-center text-Texto-general-Color text-xl font-bold font-['Roboto'] leading-normal">
            Biblioteca <br />
            “Segundo Severino Lago”
          </div>
          <p className="text-center text-sm font-normal font-['Roboto'] leading-tight text-Texto-general-Color">
            {mostrarTextoCompleto ? parrafos.join("\n\n") : textoResumido}
          </p>
          {!mostrarTextoCompleto && (
            <button
              onClick={() => setMostrarTextoCompleto(true)}
              className="text-green-700 text-sm font-bold font-['Roboto']"
            >
              Ver más...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
