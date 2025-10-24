"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerForm from "../BannerForm/BannerForm";

interface Banner {
  id: string;
  title?: string;
  description?: string;
  footer?: string;
  fileUrl?: string[];
}

interface BannerCarouselProps {
  initialSlideIndex?: number;
  onExit?: () => void;
  onClose?: () => void;
  onSuccess: () => void;
  onCancelForm?: () => void;
  isCreating?: boolean;
}

const BannerCarrousel = ({
  initialSlideIndex = 0,
  onExit,
  onCancelForm
}: BannerCarouselProps) => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [, setActiveFormId] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("banners");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBanners(parsed);
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(initialSlideIndex, 0);
        }
      }, 0);
    }
  }, [initialSlideIndex]);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 0);
    }
    setActiveIndex(index);
  };

  const maxSlides = 6;
  const slides =
    banners.length < maxSlides ? [...banners, { id: "new" }] : banners;

  return (
    <div
      className="relative w-full max-w-full sm:max-w-3xl mx-auto px-2 sm:px-0 h-auto    
    sm:h-[80vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-[60vh] bg-white rounded-[20px] flex flex-col"
    >
      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const newIndex = swiper.activeIndex;
            setActiveIndex(newIndex);
            const newFormId =
              newIndex < banners.length
                ? `banner-form-${banners[newIndex]?.id}`
                : "banner-form-new";
            setActiveFormId(newFormId);
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          initialSlide={initialSlideIndex}
          className="relative"
        >
          {slides.map((banner, index) => {
            const isNew = banner.id === "new";
            const formId = isNew
              ? "banner-form-new"
              : `banner-form-${banner.id}`;

            return (
              <SwiperSlide key={formId}>
                <div className="px-2 sm:px-4 py-2 sm:py-4">
                  <BannerForm
                    selectedBannerId={banner.id}
                    isNew={isNew}
                    headerTitle={`Portada ${index + 1}`}
                    onSuccess={onExit ?? (() => {})}
                    onFormReady={setActiveFormId}
                  />
                  <div className="flex justify-center gap-2 sm:gap-4 mt-2 sm:mt-4 text-sm sm:text-[16px] flex-wrap">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`transition-colors duration-200 ${
                          activeIndex === i
                            ? "text-[#005AAA] underline"
                            : "text-slate-700"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Flechas de navegación */}
      <button className="hidden lg:flex custom-prev absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-50 bg-[#cacaca] text-white rounded-full p-2 sm:p-2.5">
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button className="hidden lg:flex custom-next absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-50 bg-[#cacaca] text-white rounded-full p-2 sm:p-2.5">
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Botones fijos abajo */}
      <div className="sticky -bottom-[25px] w-full px-4 sm:px-0 flex flex-col sm:flex-row justify-end gap-2 z-[9999] bg-white/90 backdrop-blur-md py-3 rounded-t-xl">
        <button
          type="submit"
          form={
            activeIndex < banners.length
              ? `banner-form-${banners[activeIndex]?.id}`
              : "banner-form-new"
          }
          className="bg-black disabled:bg-gray-400 text-white px-4 py-2 rounded-2xl w-full sm:w-auto"
        >
          Guardar cambios
        </button>
        <button
          type="button"
          onClick={onCancelForm}
          className="px-4 py-2 rounded-3xl w-full sm:w-auto border shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default BannerCarrousel;
