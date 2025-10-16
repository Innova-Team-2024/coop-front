"use client";

import { useState } from "react";

export default function NuestraHistoria() {
  // 👉 Encabezados
  const tituloChico = "Sobre nosotros";
  const tituloGrande = "Nuestra historia";
  const subtitulo = "Un pueblo que no olvida, crece.";
  const lema = "«Defendamos lo nuestro»";

  // 👉 Contenido (misma redacción de tu maqueta)
  const colIzq = [
    `En los años 60, la farmacia Rocha de Grand Bourg se comunicaba con San Miguel mediante palomas mensajeras, en una comunidad tranquila y con bajo desempleo. La seguridad estaba a cargo del Cabo Contreras, conocido por patrullar a caballo. Era una época de gran tranquilidad, con mínimas intervenciones policiales. Los habitantes gozaban de buenos ingresos y el desempleo no representaba una preocupación.`,
    `En 1963, se fundó la «Cooperativa Vecinal de Grand Bourg de Obras de Pavimentación, de Salubridad y Urbanística Limitada». La telefonía no formaba parte de sus objetivos iniciales. En los años 70, la localidad disponía de apenas cien teléfonos internos administrados por el Centro de Comerciantes. En 1971, la cooperativa asumió la administración contable y legal de la Central Telefónica, heredando importantes deudas.`,
    `En ese momento decisivo, los miembros fundadores demostraron su compromiso al ofrecer sus bienes como garantía para saldar las deudas con la empresa Licar S.A. En 1973, los habitantes pudieron realizar por primera vez llamadas hacia otros centros urbanos, y en 1974, la conexión con ENTEL permitió comunicarse con Capital Federal y otras localidades.`,
    `En 1985 inició la construcción del edificio actual de la cooperativa, y en 1990 se implementó la Central Electrónica Digital, que amplió la base de asociados y redujo los costos de las líneas. En 1994, tras 31 años bajo la presidencia del Sr. Carlos García Martínez, se renovó completamente el Consejo de Administración.`,
  ];

  const colDer = [
    `En 1997, la cooperativa introdujo el servicio de Internet Dial-up y, en 2000, lanzó su portal Interbourg Para 2001, se completaron las primeras etapas del Campo Recreativo «OASIS» y se inauguró el Interbourg Center, dedicado a la capacitación y servicios de ciber café.`,
    `Los logros continuaron: en 2002 se inauguró el Complejo Deportivo y Cultural «OASIS» y el Jardín Maternal «Niños Creciendo». En 2003, se climatizaron las piscinas del «OASIS» y se implementó el servicio de Internet de Banda Ancha ADSL.`,
    `En 2004, la cooperativa expandió sus servicios con un cibercafé en Pablo Nogués, trasladó el Jardín Maternal «Niños Creciendo» a su sede propia, construyó vestuarios para la piscina climatizada en «OASIS» y realizó estudios sobre necesidades habitacionales, incluyendo la construcción de viviendas modelo. Para 2005, se ampliaron las instalaciones del jardín maternal y se planificó la apertura de un jardín de infantes para niños de 4 y 5 años.`,
    `En 2006, la cooperativa mantiene firmes sus valores cooperativistas, consolidándose como una institución comprometida con la comunidad.`,
    `Respaldada por avances tecnológicos y dirigida por personas elegidas democráticamente, trasciende el servicio telefónico para mejorar la calidad de vida de sus asociados, defendiendo lo propio como siempre lo ha hecho.`,
    `Un pueblo que honra su historia continúa creciendo y avanzando.`,
  ];

  // 👉 Versión mobile: mostrar 2 párrafos y expandir el resto
  const [verMas, setVerMas] = useState(false);
  const mobileIntro = colIzq.slice(0, 2).join("\n\n");
  const mobileResto = [...colIzq.slice(2), ...colDer];

  return (
    <section className="w-full mx-auto px-6 md:px-24 lg:px-32 py-12 lg:py-16">
      {/* Encabezado */}
      <div className="text-center">
        <p className="text-sm font-semibold text-[#1C1F23] mb-2">{tituloChico}</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-[#1C1F23] mb-6">
          {tituloGrande}
        </h1>
        <p className="text-base lg:text-xl font-semibold text-[#1C1F23] mb-2">
          {subtitulo}
        </p>
        <p className="text-xl lg:text-2xl font-extrabold text-[#1C1F23] mb-8">
          {lema}
        </p>
      </div>

      {/* Desktop/Tablet: dos columnas */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-10 text-[#1C1F23]">
        <div className="space-y-4 text-justify leading-relaxed">
          {colIzq.map((p, i) => (
            <p key={`lz-${i}`} className="text-[15px] lg:text-base">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-4 text-justify leading-relaxed">
          {colDer.map((p, i) => (
            <p key={`ld-${i}`} className="text-[15px] lg:text-base">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile: bloque con “Ver más…” */}
      <div className="md:hidden text-[#1C1F23]">
        <div className="text-center space-y-4 leading-relaxed">
          <p className="text-[15px] whitespace-pre-line">{mobileIntro}</p>

          {!verMas && (
            <button
              onClick={() => setVerMas(true)}
              className="text-green-700 text-sm font-bold"
              aria-expanded={verMas}
            >
              Ver más…
            </button>
          )}

          {verMas && (
            <div className="space-y-4 text-justify">
              {mobileResto.map((p, i) => (
                <p key={`m-${i}`} className="text-[15px]">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
