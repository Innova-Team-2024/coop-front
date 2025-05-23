"use client";

import { useEffect, useState } from "react";
import { useBannerStore } from "@/stores/bannerStore";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import { fetchGetBanners } from "@/apis/bannerService";

export default function Banner() {
  const { banners, setBanners, loadBannersFromLocalStorage } = useBannerStore();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

 useEffect(() => {
  const load = async () => {
    try {
      const data = await fetchGetBanners();
      setBanners(data);
    } catch (err) {
      console.error("Error al cargar banners:", err);
    } finally {
      setIsLoading(false);
    }
  };

  loadBannersFromLocalStorage();
  load();
}, [pathname, setBanners, loadBannersFromLocalStorage]);

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          banners.map((banner, index) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full">
                <Image
                  src={`http://localhost:3000/uploads/banners/${banner.fileUrl[0]}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  unoptimized={true}
                  className="object-cover transition-opacity duration-700"
                />
                <div className="absolute top-[53%] left-1/2 md:left-28 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 text-white max-w-[90%] md:max-w-md space-y-4 text-center md:text-left">
                  <h2 className="text-[22px] md:text-[36px] font-bold uppercase">
                    {banner.title}
                  </h2>
                  <p className="text-[18px] md:text-[28px]">
                    {banner.description}
                  </p>

                  {banner.footer && (
                    <div className="text-sm text-center md:text-left mt-2 whitespace-pre-line">
                      {banner.footer.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))
        )}

        <button className="custom-prev absolute left-2 sm:left-10 md:left-10 top-1/2 -translate-y-1/2 z-10 bg-colorArrowChevron text-white hover:bg-white/20 rounded-full p-3 md:p-2 shadow">
          <ChevronLeft className="h-8 w-8 md:h-6 md:w-6" />
        </button>
        <button className="custom-next absolute right-2 sm:right-10 md:right-10 top-1/2 -translate-y-1/2 z-10 bg-colorArrowChevron text-white hover:bg-white/20 rounded-full p-3 md:p-2 shadow">
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
