"use client";
import React from "react";
import { FaWifi, FaPhoneAlt, FaTv } from "react-icons/fa";
import type { Plan } from "@/types/plan";
import PlansCard from "../Cards/PlansCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function PlanSection() {
  const plans: Plan[] = [
    {
      title: "300 MB + TV + Deco Full 4K",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
    {
      title: "300 MEGAS + WIFI",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: true,
    },
    {
      title: "300 MB + TV",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
  ];
  const planesMobile = [...plans].sort((a, b) => {
    if (a.recommended) return -1;
    if (b.recommended) return 1;
    return 0;
  });
  return (
    <div className="w-full max-w-[1440px]">
      <style jsx global>{`
        /* Cambiar el color de los bullets de paginación */
        .custom-pagination .swiper-pagination-bullet {
          background-color: #ff5722; /* Color naranja (puedes cambiarlo por tu color deseado) */
          opacity: 0.5;
        }

        /* Color del bullet activo */
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ff5722;
          opacity: 1;
        }
      `}</style>
      <div className="lg:hidden w-full">
        <Swiper
          /* slidesPerView={1.3}
          spaceBetween={16} */
          breakpoints={{
            320: {
              slidesPerView: 1.0,
              spaceBetween: 8,
            },
            350: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            395: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 6,
            },
            720: {
              slidesPerView: 1.5,
              spaceBetween: 6,
            },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
          className="mySwiper relative pb-16"
        >
          {planesMobile.map((plan, index) => (
            <SwiperSlide key={`mobile-${index}`}>
              <div key={index} className="my-5 pb-8">
                <PlansCard plan={plan} />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination absolute bottom-0 w-full flex justify-center mt-8"></div>
        </Swiper>
      </div>
      <div className="w-full hidden lg:flex justify-center gap-6 items-stretch">
        {plans.map((plan, idx) => (
          <div key={idx} className="flex-1 maw-w-sm">
            <PlansCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanSection;
