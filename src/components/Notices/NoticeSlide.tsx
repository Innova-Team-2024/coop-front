"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required Swiper styles and modules
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import NoticeCard from "../Cards/NoticeCard";

const notices = [
  {
    id: "01",
    title: "Internet",
    description:
      "Servicio de telefonía fija para socios y abonadosdwadawdawdawd.dwadwadawdadServicio de telefonía fija para socios y abonadosdwadawdawdawd.dwadwadawdad",
  },
  {
    id: "02",
    title: "Instalación de Fibra Óptica",
    description:
      "Continuamos con el desarrollo de infraestructura, expandiendo el cableado de fibra óptica para brindar un mejor servicio a todos los socios y abonados.",
  },
  {
    id: "03",
    title: "Renovación de la flota",
    description:
      "Buscamos perfeccionar y ofrecer el mejor servicio posible, en este caso renovando y expandiendo nuestra flota de vehículos para estar al servicio de nuestros socios.",
  },
  {
    id: "04",
    title: "Internet",
    description:
      "Servicio de telefonía fija para socios y abonadosdwadawdawdawd.dwadwadawdadServicio de telefonía fija para socios y abonadosdwadawdawdawd.dwadwadawdad",
  },
];

const NoticeSlide = () => {
  return (
    <article className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          390: {
            slidesPerView: 1.1,
            spaceBetween: 4,
          },
          640: {
            slidesPerView: 2.1,
            spaceBetween: 6,
          },
          1024: {
            slidesPerView: 2.1,
            spaceBetween: 80,
          },
          1280: {
            slidesPerView: 2.4,
            spaceBetween: 16,
          },
        }}
      >
        {notices.map((notice) => (
          <SwiperSlide key={notice.id} className="h-auto">
            <NoticeCard title={notice.title} description={notice.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default NoticeSlide;
