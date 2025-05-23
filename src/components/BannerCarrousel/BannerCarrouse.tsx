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
  onSuccess: () => void;
  isCreating: boolean;
}

const BannerCarousel = ({
  initialSlideIndex = 0,
  onExit,
  onSuccess,
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
      // Evita que el slide salte incorrectamente
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(initialSlideIndex);
        }
      }, 100);
    }
  }, [initialSlideIndex]);

  const handleUpdate = () => {
    const stored = localStorage.getItem("banners");
    if (stored) setBanners(JSON.parse(stored));
    onExit?.();
    onSuccess();
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setActiveIndex(index);
  };

  const maxSlides = 6;
  const slides = [...banners.slice(0, maxSlides - 1), { id: "new" }];

  return (
    <div className="relative max-w-3xl mx-auto z-20 h-[450px]">
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
          const formId = isNew ? "banner-form-new" : `banner-form-${banner.id}`;
          return (
            <SwiperSlide key={formId}>
              <div className="p-4">
                <BannerForm
                  selectedBannerId={banner.id}
                  isNew={isNew}
                  headerTitle={`Portada ${index + 1}`}
                  onSuccess={handleUpdate}
                  onClose={onExit}
                  onFormReady={setActiveFormId}
                />
                <div className="flex justify-center gap-4 -mt-4 text-[16px]">
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

      {/* Flechas de navegación */}
      <button className="custom-prev absolute -left-8 top-1/2 -mt-10 -translate-y-1/2 z-50 bg-[#cacaca] text-white rounded-full p-2">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="custom-next absolute -right-8 top-1/2 -mt-10 -translate-y-1/2 z-50 bg-[#cacaca] text-white rounded-full p-2">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Botones de acción */}
      <div className="flex justify-end gap-2 mt-2">
        <button
          type="submit"
          form={
            activeIndex < banners.length
              ? `banner-form-${banners[activeIndex]?.id}`
              : "banner-form-new"
          }
          className="bg-black disabled:bg-gray-400 text-white px-4 py-2 rounded-2xl shadow"
        >
          Guardar cambios
        </button>
        <button
          type="button"
          onClick={onExit}
          className="border px-4 py-2 rounded-3xl shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;
