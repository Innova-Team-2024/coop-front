'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PricesCard from '../Cards/PricesCard';
import type { Plan } from '@/types/plan';

// Lazy load del slider mobile - solo se descarga en mobile
const MobileSlider = dynamic(() => import('./MobileSlider'), {
  ssr: false,
  loading: () => (
    <div className="px-4 animate-pulse">
      <div className="h-96 bg-gray-200 rounded-lg"></div>
    </div>
  ),
});

interface ResponsivePlansCarouselProps {
  plans: Plan[];
}

export default function RecomendedPlans({ plans }: ResponsivePlansCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 769);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Desktop: Grid estático sin JS */}
      <div className="hidden lg:flex gap-6 justify-center items-end">
        {plans.map((plan, idx) => (
          <div key={idx} className="w-full flex justify-center lg:mt-0">
            <PricesCard plan={plan} />
          </div>
        ))}
      </div>

      {/* Mobile: Lazy loaded slider */}
      {mounted && isMobile && (
        <div className="lg:hidden">
          <MobileSlider plans={plans} />
        </div>
      )}
    </>
  );
}