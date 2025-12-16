'use client';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PricesCard from '../Cards/PricesCard';
import { cn } from '@/lib/utils';
import { PlanCardProps } from '@/types/priceCards';

interface MobileSliderProps {
  plans: PlanCardProps[];
}

export default function MobileSlider({ plans }: MobileSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ordenar planes (destacado primero)
  const sortedPlans = [...plans].sort((a, b) => 
    a.recommended === b.recommended ? 0 : a.recommended ? -1 : 1
  );

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    loop: false,
    mode: 'snap',
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider">
        {sortedPlans.map((plan, idx) => (
          <div key={idx} className="keen-slider__slide">
            <PricesCard plan={plan} />
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