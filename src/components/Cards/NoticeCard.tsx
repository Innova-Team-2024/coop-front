"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

/**
 * @component NoticeCard
 * @description
 * Tarjeta informativa utilizada para mostrar noticias o avisos con imagen, título y descripción.
 * Puede funcionar como un bloque estático o como un enlace clickeable si se proporciona una URL mediante la prop `href`.
 *
 * @example
 * // Tarjeta estática
 * <NoticeCard
 *   title="Nuevo beneficio para socios"
 *   description="Los socios tendrán descuentos exclusivos en actividades deportivas."
 *   image="/images/beneficio.jpg"
 * />
 *
 * @example
 * // Tarjeta clickeable (redirige al detalle de la noticia)
 * <NoticeCard
 *   title="Reunión mensual de la comisión"
 *   description="Detalles sobre la próxima reunión de socios activos."
 *   image={ReunionImage}
 *   href="/nosotros/socios/reuniones-sociales/reunion-mensual-12"
 * />
 */

/**
 * @typedef {Object} NoticeCardProps
 * @property {string} title - Título principal de la noticia o aviso.
 * @property {string} description - Descripción corta o resumen del contenido.
 * @property {string | StaticImageData} [image] - Imagen asociada a la noticia (URL o import local).
 * @property {string} [href] - Enlace opcional. Si se define, la tarjeta se renderiza como un enlace clickeable.
 * @property {string} [cardClasses] - Clases CSS adicionales para personalizar el estilo de la tarjeta.
 */

type NoticeCardProps = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  href?: string;
  cardClasses?: string;
};

/**
 * @param {NoticeCardProps} props - Propiedades del componente NoticeCard.
 * @returns {React.ReactElement} Una tarjeta visual con imagen, título y descripción.
 */
const NoticeCard = ({
  title,
  description,
  image,
  href,
  cardClasses,
}: NoticeCardProps) => {
  // Clases condicionales: solo aplica hover y cursor-pointer si existe href
  //flex flex-col gap-3 p-4 my-6 lg:p-6 w-[312px] lg:w-[492px] lg:h-[451px] h-[359px]
  const baseClasses = `
    flex flex-col gap-3 p-4 lg:h-[451px] h-[359px]
    rounded-xl border border-[#DDD] bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10),
    0px_4px_6px_0px_rgba(0,0,0,0.05)]
    ${
      href ? "transition hover:shadow-lg hover:scale-[1.01] cursor-pointer" : ""
    }
  `;

  const CardContent = (
    <div className={`${baseClasses} ${cardClasses || ""}`}>
      <div
        className={`relative rounded-2xl ${
          href ? "h-80" : "h-60"
        } w-full mx-auto overflow-hidden`}
      >
        <Image
          src={image || "/aboutUsPage/NoticeExample.png"}
          fill
          alt={`Noticia ${title}`}
          className="select-none rounded-2xl object-fill"
        />
      </div>
      <div className="text-center gap-1">
        <h5 className="text-lg lg:text-2xl font-medium text-[#334155] mb-1">
          {title}
        </h5>
        <p
          className={`text-[#475569] text-ellipsis text-xs lg:text-base overflow-hidden ${
            href ? "line-clamp-3" : ""
          } leading-5`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  // Si existe href -> Link, si no -> div normal
  return href ? <Link href={href}>{CardContent}</Link> : CardContent;
};

export default NoticeCard;
