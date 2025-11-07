"use client";

import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import { ServicesCard } from "@/components";
import { GreenMolecules } from "@/components/ui/greenMolecules";

interface ServiceItem {
  icon: StaticImageData;
  title: string;
  desc: string;
}

interface ServicesCardsProps {
  items: ServiceItem[];
}

export function ListServices({ items }: ServicesCardsProps) {
  if (!items || items.length === 0) {
    return <div>No hay servicios disponibles</div>;
  }
  const isFewItems = items.length < 3;

  return (
    <div className="">
      <style jsx global>{`
        /* Cambiar el color de los bullets de paginación */
        .swiper-pagination-bullet {
          background-color: #0688372b !important; /* Color naranja */
          opacity: 0.5 !important;
        }

        /* Color del bullet activo */
        .swiper-pagination-bullet-active {
          background-color: #46af3f !important;
          opacity: 1 !important;
        }

        /* Asegurar que las tarjetas sean visibles en dispositivos móviles */
        .swiper-slide {
          height: auto !important;
          display: flex !important;
          justify-content: center !important;
        }

        /* Ajustar el espaciado inferior para que se vean los controles */
        .swiper-container {
          padding-bottom: 80px !important;
        }
      `}</style>
      <div className="block lg:hidden w-full">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            375: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            395: {
              slidesPerView: 1.7,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.7,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 6,
            },
            720: {
              slidesPerView: 2.7,
              spaceBetween: 6,
            },
            840: {
              slidesPerView: 1.7,
              spaceBetween: 6,
            },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper relative pb-16"
        >
          {items.map((service, index) => (
            <SwiperSlide
              key={`mobile-${index}`}
              className="py-2 flex justify-start"
            >
              <div className="w-full mb-12">
                <ServicesCard
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination absolute bottom-0 w-full flex justify-center mt-8"></div>
        </Swiper>
      </div>
      {/* Vista de escritorio con grid */}
      <div
        className={`hidden relative lg:grid gap-6 w-full mx-auto justify-center ${
          isFewItems
            ? "grid-cols-1 lg:grid-cols-2 justify-items-center max-w-4xl"
            : "grid-cols-1 lg:grid-cols-3 justify-items-center  max-w-7xl"
        }`}
      >
        {items.map((service, index) => (
          <ServicesCard
            key={`desktop-${index}`}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
        {/* <article className="absolute -z-40 top-44 -left-28 hidden lg:block rotate-12">
          <GreenMolecules />
        </article>
        <article className="absolute -z-40 bottom-44 -right-28 hidden lg:block">
          <GreenMolecules />
        </article> */}
        <motion.article
          initial={{ opacity: 0, x: -40, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute -z-40 top-44 -left-28 hidden lg:block"
        >
          <GreenMolecules />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute -z-40 bottom-44 -right-28 hidden lg:block"
        >
          <GreenMolecules />
        </motion.article>
      </div>
    </div>
  );
}
