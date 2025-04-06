"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Banner as BannerImage } from "@/public";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={BannerImage}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />

               {/* Este texto es un ejemplo de un banner que se puede utilizar para mostrar información importante. 
               Se puede personalizar de acuerdo al diseño final. */}

              <div className="absolute top-[53%] left-28 -translate-y-1/2 text-white max-w-md space-y-4">
                <h2 className="text-[36px] font-bold uppercase">
                  Atención al Cliente
                </h2>
                <p className="text-[28px]">Lunes a viernes de 08:30hs a 16:00hs</p>
                <div className="text-[18px] space-y-1">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt /> El Callao 1328, Grand Bourg
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt /> Francisco Seguí 354, Pablo Nogués
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="custom-prev absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.13)] text-white hover:bg-white/20 rounded-full p-2 shadow">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="custom-next absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.13)] text-white hover:bg-white/20 rounded-full p-2 shadow">
          <ChevronRight className="h-6 w-6" />
        </button>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #c6cbd4;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: white;
        }
        .swiper-pagination {
          bottom: 25px !important; 
        }
      `}</style>
    </div>
  );
}
