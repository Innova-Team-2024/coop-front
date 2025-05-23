
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  images: StaticImageData[];
};

function ImageSlideGallery({ images }: Props) {
  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
          color: #007bff;
        }

        .swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
      `}</style>

      <Swiper
        slidesPerView={1.3}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[383px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover select-none"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageSlideGallery;
