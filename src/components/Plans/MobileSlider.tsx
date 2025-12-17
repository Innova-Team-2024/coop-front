'use client';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PricesCard from '../Cards/PricesCard';
import { cn } from '@/lib/utils';
import { PlanCardProps } from '@/types/priceCards';

interface MobileSliderProps {
  plans: PlanCardProps[];
  link?: string;
}

export default function MobileSlider({ plans, link }: MobileSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ordenar planes (destacado primero)
  const sortedPlans = [...plans].sort((a, b) => 
    a.recommended === b.recommended ? 0 : a.recommended ? -1 : 1
  );

  const [sliderRef] = useKeenSlider({
    slides: {
      // Base: 320px viewport → card 260px → perView 1.05 (muestra peek)
      perView: 1.05,
      spacing: 12,
    },
    loop: false,
    mode: 'snap',
    breakpoints: {
      // iPhone SE, pequeños (375px)
      // 375px viewport → card 260px → cabe 1 + peek
      '(min-width: 375px)': {
        slides: { perView: 1.15, spacing: 12 },
      },
      // iPhone 12/13/14 standard (390px)
      // Muestra la card completa + buen peek
      '(min-width: 390px)': {
        slides: { perView: 1.2, spacing: 14 },
      },
      // Dispositivos medianos (430px - iPhone Pro Max)
      // Viewport más ancho → más peek
      '(min-width: 430px)': {
        slides: { perView: 1.35, spacing: 14 },
      },
      // Phones grandes horizontal / tablets pequeñas (480px)
      '(min-width: 480px)': {
        slides: { perView: 1.5, spacing: 16 },
      },
      // Tablets pequeñas (540px)
      // Casi caben 2 cards
      '(min-width: 540px)': {
        slides: { perView: 1.7, spacing: 16 },
      },
      // Tablets medianas (640px)
      // Caben 2 cards + peek perfecto
      '(min-width: 640px)': {
        slides: { perView: 2.1, spacing: 16 },
      },
      // Tablets grandes (720px)
      // 2 cards completas + buen peek
      '(min-width: 720px)': {
        slides: { perView: 2.3, spacing: 18 },
      },
      // Tablets XL horizontal (840px - breakpoint antes de desktop)
      // 3 cards casi completas
      '(min-width: 840px)': {
        slides: { perView: 2.7, spacing: 20 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="pb-4">
      <div ref={sliderRef} className="keen-slider py-2">
        {sortedPlans.map((plan, idx) => (
          <div key={idx} className="keen-slider__slide">
            <PricesCard plan={plan} link={link} />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {sortedPlans.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              'h-3 w-3 rounded-full transition-all duration-300',
              currentSlide === idx ? 'bg-orange-500' : 'bg-orange-200'
            )}
          />
        ))}
      </div>
    </div>
  );
}