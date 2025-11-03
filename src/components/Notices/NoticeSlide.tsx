"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import NoticeCard from "../Cards/NoticeCard";

const notices = [
  {
    id: "01",
    title: "Instalación de Fibra Óptica",
    description:
      "A pesar de los límites económicos que ha generado la pandemia, la Cooperativa Telefónica de Grand Bourg y Pablo Nogués continúa con el desarrollo de infraestructura, expandiendo el cableado de Fibra Óptica para un mejor servicio a todos los socios.",
    image: "/FibraÓptica.jpg",
  },
  {
    id: "02",
    title: "Remodelaciones Complejo Oasis",
    description:
      "Aprovechando el párate de actividades físicas debido a la pandemia, se han ejecutado distintas remodelaciones en el complejo Oasis. Se han mejorado duchas y construido nuevas instalaciones para la comodidad del socio, siguiendo nuestro lema “Defendamos lo nuestro”.",
    image: "/Remodelaciones.jpg",
  },
  {
    id: "03",
    title: "Renovación de la flota",
    description:
      "Creemos que el progreso y crecimiento es el pilar fundamental de la Cooperativa Telefónica de Grand Bourg y Pablo Nogués, por eso buscamos perfeccionar y ofrecer el mejor servicio posible, en este caso renovando y expandiendo nuestra flota de vehículos, para estar al servicio de nuestros socios.",
    image: "/Renovación.jpg",
  },
];

const NoticeSlide = () => {
  return (
    <article className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode
        modules={[FreeMode]}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          390: { slidesPerView: 1.1, spaceBetween: 4 },
          640: { slidesPerView: 2.1, spaceBetween: 6 },
          1024: { slidesPerView: 2.1, spaceBetween: 80 },
          1280: { slidesPerView: 2.4, spaceBetween: 16 },
        }}
      >
        {notices.map((n) => (
          <SwiperSlide key={n.id} className="h-auto">
            <NoticeCard title={n.title} description={n.description} imageSrc={n.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default NoticeSlide;


