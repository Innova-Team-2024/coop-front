"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const SocialMeetingIntro = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div>
      <div className="prose prose-lg mx-auto leading-relaxed">
        <p
          className={`text-center transition-all duration-500 ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          El sábado 14/05/2022 a las 13 hs se realizó la primera de muchas
          reuniones informativas que la Cooperativa Telefónica de Grand Bourg y
          Pablo Nogués continúa implementando a lo largo de este año. En ella
          asistieron los asociados amigos de esta entidad, quienes se
          reencuentran con el consejo de administración con alegría y entusiasmo
          para informarse acerca de las novedades que se avecinan dentro de la
          zona de influencia Ver más... En este evento se reunieron 80 personas
          donde se habló de la implementación del triple Play, empaquetamiento
          de servicios y contenidos audiovisuales (VOIP, fibra óptica y
          televisión) que en un futuro cercano viene a desarrollar integralmente
          la comunicación entre los hogares de nuestro distrito. El actual
          advenimiento de varias empresas con nueva tecnología conlleva a
          plantear una solución única a varios problemas, la implementación de
          los tres servicios en uno. La diferencia distintiva es que todos los
          servicios se sirven por un único soporte físico, ya sea cable coaxial
          o fibra óptica sin gastos adicionales, posibilitando personalizar cada
          servicio y adaptarlo a las necesidades de cada cliente. El asociado
          Jorge Lago tomo la palabra expresando a sus pares que van a volver las
          reuniones masivas para estar más unidos, para seguir defendiendo la
          empresa social ya que por la pandemia se sufrió la falta de
          comunicación presencial. Además El hijo del ex presidente Lago destacó
          el apoyo político de Leo Nardini que brindo a la Cooperativa con el
          acuerdo con el ENACOM “Internet para todos” proyecto que llegara a los
          sectores mas vulnerables (comedores, colegios, centros de jubilados,
          etc.) además de la subvención estatal del 100% para el Jardín Niños
          Creciendo e Instituto Primario Dr. Rene Favaloro. Entre otras cosas se
          realizaron sorteos de una canasta familiar con productos y alimentos
          no perecederos quien resultó ganadora fue la asociada ANDRADAS
          RAIMUNDA. Muchas Felicitaciones!
        </p>
        <span className="flex text-center justify-center">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
            className="text-titelServices hover:text-titelServices/70 font-medium ml-2"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SocialMeetingIntro;
