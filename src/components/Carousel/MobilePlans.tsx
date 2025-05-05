
'use client';

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { PlanCard } from '@/components';
import { cn } from '@/lib/utils';
import type { Plan } from '@/types/plan';

interface MobilePlansProps {
  plans: Plan[];
}

export default function MobilePlans({ plans }: MobilePlansProps) {
  const mobileSortedPlans = [...plans].sort((a, b) => {
    if (a.recommended === b.recommended) return 0;
    return a.recommended ? -1 : 1;
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 12,
    },
    loop: false,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 1.1,
          spacing: 16,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="md:hidden px-4">
      <div ref={sliderRef} className="keen-slider">
        {mobileSortedPlans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} variant="mobile" />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {mobileSortedPlans.map((_, idx) => (
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
