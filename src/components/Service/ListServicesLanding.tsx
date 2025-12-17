"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { ServicesCard } from "@/components";
import { GreenMolecules } from "@/components/ui/greenMolecules";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types/services";

export interface ServicesCardsProps {
  items: ServiceItem[];
}

export function KeenServicesCarousel({ items }: ServicesCardsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    loop: false,
    mode: "snap",
    breakpoints: {
      "(min-width: 375px)": {
        slides: { perView: 1.6, spacing: 16 },
      },
      "(min-width: 395px)": {
        slides: { perView: 1.7, spacing: 8 },
      },
      "(min-width: 480px)": {
        slides: { perView: 1.7, spacing: 8 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 6 },
      },
      "(min-width: 720px)": {
        slides: { perView: 2.7, spacing: 6 },
      },
      "(min-width: 840px)": {
        slides: { perView: 1.7, spacing: 6 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  if (!items || items.length === 0) {
    return <div>No hay servicios disponibles</div>;
  }

  const isFewItems = items.length < 3;

  return (
    <div>
      {/* Vista Mobile - Keen Slider */}
      <div className="block lg:hidden w-full pb-16">
        <div ref={sliderRef} className="keen-slider py-2">
          {items.map((service, index) => (
            <div
              key={`mobile-${index}`}
              className="keen-slider__slide flex justify-start"
            >
              <div className="w-full mb-12">
                <ServicesCard
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                  link={service.link}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                currentSlide === idx
                  ? "bg-[#46af3f]"
                  : "bg-[#0688372b] opacity-50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Vista Desktop - Grid estático */}
      <div
        className={`hidden relative lg:grid gap-6 w-full mx-auto justify-center ${
          isFewItems
            ? "grid-cols-1 lg:grid-cols-2 justify-items-center max-w-4xl"
            : "grid-cols-1 lg:grid-cols-3 justify-items-center max-w-7xl"
        }`}
      >
        {items.map((service, index) => (
          <ServicesCard
            key={`desktop-${index}`}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
            link={service.link}
          />
        ))}

        {/* Decoraciones con animación */}
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