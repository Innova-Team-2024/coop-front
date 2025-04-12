'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import type { Plan } from '@/types/plan';

interface PlanCardProps {
  plan: Plan;
  variant?: 'desktop' | 'mobile';
}

export default function PlanCard({ plan, variant = 'desktop' }: PlanCardProps) {
  const baseClass =
    variant === 'desktop'
      ? 'w-full md:w-[384px] rounded-xl shadow-md px-6 py-8 bg-white flex flex-col justify-between relative transition-all transform hover:scale-105 duration-300'
      : 'keen-slider__slide min-w-[260px] rounded-[16px] border-2 border-orange-100 px-4 py-8 bg-white shadow-lg flex flex-col justify-between relative mx-auto transition-all';

  const recommendedClass = plan.recommended
    ? variant === 'desktop'
      ? 'border-2 border-orange-400 md:-translate-y-6'
      : 'border-orange-400'
    : '';

  return (
    <div className={cn(baseClass, recommendedClass)}>
      {plan.recommended && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-sm px-4 py-1 rounded-t-md shadow">
          PLAN RECOMENDADO
        </div>
      )}
      <h3 className="text-xl font-bold text-center mb-6">{plan.title}</h3>
      <ul className="space-y-2 mb-6">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            {f.icon} <span className="whitespace-nowrap">{f.text}</span>
          </li>
        ))}
      </ul>
      <hr className="border-red-400 mb-2" />
      <p className="text-sm">{plan.note}</p>
      <p className="text-sm italic mb-4">{plan.memberPrice}</p>
      <p className="text-2xl font-bold text-center mb-6">{plan.price}</p>
      <button
        className={cn(
          'w-full rounded-full text-sm font-semibold py-2 shadow',
          plan.recommended
            ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white'
            : 'bg-white text-black border border-gray-300'
        )}
      >
        CONTRATAR
      </button>
      <p className="text-xs text-center mt-4 text-gray-500 italic">
        * Promo nuevos clientes *
      </p>
    </div>
  );
}
