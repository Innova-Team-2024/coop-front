"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

/**
 * @component NoticesSlide
 * @description Slider reutilizable usando patrón Compound Components. Acepta cualquier contenido.
 *
 * @example
 * <NoticesSlide pagination={true}>
 *   {items.map(item => (
 *     <NoticesSlide.Item key={item.id}>
 *       <YourCard {...item} />
 *     </NoticesSlide.Item>
 *   ))}
 * </NoticesSlide>
 */

interface NoticesSlideProps {
  children: React.ReactNode;
  pagination?: boolean;
  spaceBetween?: number;
  className?: string;
}

interface SlideItemProps {
  children: React.ReactNode;
  className?: string;
}

const NoticesSlideRoot = ({
  children,
  pagination = false,
  spaceBetween = 16,
  className = "",
}: NoticesSlideProps) => {
  return (
    <article className={`relative ${className}`}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={spaceBetween}
        freeMode={true}
        pagination={pagination ? { clickable: true } : false}
        modules={pagination ? [FreeMode, Pagination] : [FreeMode]}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          390: { slidesPerView: 1.1, spaceBetween: 4 },
          640: { slidesPerView: 2.1, spaceBetween: 6 },
          1024: { slidesPerView: 2.1, spaceBetween: 80 },
          1280: { slidesPerView: 2.4, spaceBetween: 16 },
        }}
      >
        {/* ⬇️ AQUÍ ESTÁ EL CAMBIO: Envolvemos children automáticamente */}
        {React.Children.map(children, (child, index) => {
          // Si ya es un SwiperSlide (SlideItem), lo devolvemos tal cual
          if (React.isValidElement(child) && child.type === SlideItem) {
            return child;
          }
          // Si no, lo envolvemos en SwiperSlide
          return (
            <SwiperSlide key={index} className="h-auto mb-8">
              {child}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {pagination && (
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: rgba(3, 145, 64, 0.35);
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #039140;
          }
          @media (min-width: 1024px) {
            .swiper-pagination {
              display: none !important;
            }
          }
        `}</style>
      )}
    </article>
  );
};

const SlideItem = ({ children, className = "" }: SlideItemProps) => {
  return (
    <SwiperSlide className={`h-auto mb-8 ${className}`}>{children}</SwiperSlide>
  );
};

// Exporta usando Object.assign para patrón Compound Component
export const NoticesSlide = Object.assign(NoticesSlideRoot, {
  Item: SlideItem,
});
