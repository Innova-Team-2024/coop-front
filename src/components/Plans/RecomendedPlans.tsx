'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PricesCard from '../Cards/PricesCard';
import type { PlanCardProps } from '@/types/priceCards';

// Lazy load del slider mobile - solo se descarga en mobile
const MobileSlider = dynamic(() => import('./MobileSlider'), {
  ssr: false,
  loading: () => (
    <div className="px-4 animate-pulse">
      <div className="h-96 bg-gray-200 rounded-lg"></div>
    </div>
  ),
});

interface RecomendedPlansProps {
  plans: PlanCardProps[];
  link?: string;
}

export default function RecomendedPlans({ plans, link = "#" }: RecomendedPlansProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR fallback: mostrar desktop grid
  if (!mounted) {
    return (
      <div className="flex gap-6 justify-center items-end flex-wrap">
        {plans.map((plan, idx) => (
          <div key={idx} className="w-full flex justify-center lg:mt-0">
            <PricesCard plan={plan} link={link} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Desktop: Grid estático (>= 1024px) */}
      <div className="hidden lg:flex gap-6 justify-center items-end">
        {plans.map((plan, idx) => (
          <div key={idx} className="w-full flex justify-center lg:mt-0">
            <PricesCard plan={plan} link={link} />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet: Slider (< 1024px) */}
      <div className="block lg:hidden">
        <MobileSlider plans={plans} link={link} />
      </div>
    </>
  );
}