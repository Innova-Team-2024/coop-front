"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";

// Import required Swiper styles and modules
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import NoticeCard from "../Cards/NoticeCard";

// Tipo para una noticia individual
export interface Notice {
  id: string | number;
  title: string;
  description: string;
  image: StaticImageData | string;
}

interface NoticeSlideProps {
  notices: Notice[];
  pagination?: boolean;
}

const NoticeSlide = ({ notices, pagination = false }: NoticeSlideProps) => {
  return (
    <article className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        pagination={
          pagination
            ? {
                clickable: true,
              }
            : false
        }
        modules={pagination ? [FreeMode, Pagination] : [FreeMode]}
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
          <SwiperSlide key={notice.id} className="h-auto mb-8">
            <NoticeCard
              title={notice.title}
              description={notice.description}
              image={notice.image}
              id={notice.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Estilos del paginador */}
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

export default NoticeSlide;
