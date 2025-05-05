"use client";
import React from "react";
import Image, { StaticImageData } from "next/image.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images: StaticImageData[];
};

function ImageSlideGallery({ images }: Props) {
  return (
    <>
      <style jsx global>{`
        /* Estilos personalizados para las flechas de navegación */
        .swiper-button-next,
        .swiper-button-prev {
          color: #000; /* Color de las flechas */
          background: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
          width: 40px; /* Ancho personalizado */
          height: 40px; /* Altura personalizada */
          border-radius: 50%; /* Forma circular */
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Sombra suave */
        }

        /* Posicionamiento y tamaño del icono de la flecha */
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px; /* Tamaño más pequeño para el icono */
        }

        /* Efecto hover para las flechas */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1); /* Fondo sólido en hover */
          color: #007bff; /* Cambio de color en hover */
        }

        /* Deshabilitar estilo */
        .swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
      `}</style>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={383}
              height={383}
              className="select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageSlideGallery;
