"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import {
  BannerCeleste,
  BannerVioleta,
  BannerVerde,
  BannerAzul,
  BannerNaranja,
  BannerMobileCeleste,
  BannerMobileVioleta,
  BannerMobileVerde,
  BannerMobileAzul,
  BannerMobileNaranja,
} from "@/public";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
      window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bannersToShow = [
    {
      image: isMobile ? BannerMobileCeleste : BannerCeleste,
      title: "Atención al Cliente",
      description: "Lunes a viernes de 08:30hs a 16:00hs",
    },
    {
      image: isMobile ? BannerMobileVioleta : BannerVioleta,
      title: "Comunicaco para nuestros asociados",
      description: "Leer articulo",
    },
    {
      image: isMobile ? BannerMobileVerde : BannerVerde,
      title: "Abona desde casa",
      description: "Sumate a la factura electronica",
    },
    {
      image: isMobile ? BannerMobileAzul : BannerAzul,
      title: "¿Tenes linea de cobre?",
      description:
        "Acercate a nuestras oficinas y pasate a VOIP para disfrutar de una mejor calidad de servicio",
    },
    {
      image: isMobile ? BannerMobileNaranja : BannerNaranja,
      title: "Conectate a lo que te gusta",
      description:
        "Telecoop te espera con una grilla de canales para toda la familia",
    },
  ];

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
        {bannersToShow.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-black">
              <Image
                src={banner.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover transition-opacity duration-700"
                priority={index === 0}
              />

              {/* Esta logica va cambiar cuando un usuario admin este logqueado en el sitio web. El podra modificar el titulo, el parrafo y el Slogan/Lema/Leyenda
                  Ademas de de poder cambiar el banner de fondo.
              */}

              <div className="absolute top-[53%] left-1/2 md:left-28 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 text-white max-w-[90%] md:max-w-md space-y-4 text-center md:text-left">
                <h2 className="text-[22px] md:text-[36px] font-bold uppercase">
                  {banner.title}
                </h2>
                <p className="text-[18px] md:text-[28px]">
                  {banner.description}
                </p>

                {index === 0 && (
                  <div className="text-[14px] md:text-[18px] space-y-1">
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      El Callao 1328, Grand Bourg
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      Francisco Seguí 354, Pablo Nogués
                    </p>
                  </div>
                )}

                {(index === 1 || index === 3) && (
                  <div className="text-sm text-center md:text-left mt-2">
                    <p className="uppercase">#DEFENDAMOSLONUESTRO</p>
                    <p className="italic mt-2">Gestión Jorge Lago</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="custom-prev absolute left-2 sm:left-10 md:left-10 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.13)] text-white hover:bg-white/20 rounded-full p-3 md:p-2 shadow">
          <ChevronLeft className="h-8 w-8 md:h-6 md:w-6" />
        </button>
        <button className="custom-next absolute right-2 sm:right-10 md:right-10 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.13)] text-white hover:bg-white/20 rounded-full p-3 md:p-2 shadow">
          <ChevronRight className="h-8 w-8 md:h-6 md:w-6" />
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
