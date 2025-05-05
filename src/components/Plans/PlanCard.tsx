
'use client';

import { cn } from '@/lib/utils';
import type { Plan } from '@/types/plan';

interface PlanCardProps {
  plan: Plan;
  variant?: 'desktop' | 'mobile';
}

export default function PlanCard({ plan, variant = 'desktop' }: PlanCardProps) {
  const baseClass =
    variant === 'desktop'
    ? 'w-full max-w-[340px] sm:max-w-[360px] md:max-w-[384px] mx-auto rounded-xl shadow-md px-6 py-8 bg-white flex flex-col justify-between relative transition-all transform hover:scale-105 duration-300'
    : 'keen-slider__slide w-[90%] max-w-[320px] sm:max-w-[290px] rounded-[16px] border-2 border-orange-100 px-4 py-6 bg-white shadow-md flex flex-col justify-between relative mx-auto';
  const recommendedClass = plan.recommended
    ? variant === 'desktop'
      ? 'border-2 border-orange-400 md:-translate-y-6'
      : 'border-orange-400'
    : '';

  const buttonStyles = cn(
    'text-sm font-semibold transition-all cursor-pointer',
    variant === 'desktop'
      ? 'w-[276px] h-[48px] rounded-[32px]'
      : 'w-full max-w-[204px] h-[48px] rounded-[16px]',
    plan.recommended
      ? 'bg-gradient-to-r from-[#FF3F63] to-[#FF6600] text-white shadow-md hover:brightness-110'
      : 'bg-white text-black border border-gray-300 border-opacity-50 shadow-sm hover:bg-gray-100'
  );

  return (
    <div className={cn(baseClass, recommendedClass)}>
      {plan.recommended && (
        <div
          className={cn(
            'text-white font-medium text-sm px-4 py-1 rounded-t-md shadow',
            variant === 'desktop'
              ? 'absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500'
              : 'bg-gradient-to-r from-orange-400 to-pink-500 text-center mb-4 w-full max-w-[204px] mx-auto rounded-md'
          )}
        >
          PLAN RECOMENDADO
        </div>
      )}

      <h3 className="text-xl font-bold text-center mb-4">{plan.title}</h3>

      <ul className="space-y-2 mb-4">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            {f.icon} <span className="whitespace-nowrap">{f.text}</span>
          </li>
        ))}
      </ul>

      <hr className="border-red-400 mb-2" />
      <p className="text-sm">{plan.note}</p>
      <p className="text-sm italic mb-3">{plan.memberPrice}</p>
      <p className="text-2xl font-bold text-center mb-4">{plan.price}</p>

      <div className="flex justify-center">
        <button className={buttonStyles}>CONTRATAR</button>
      </div>

      <p className="text-xs text-center mt-4 text-gray-500 italic">
        * Promo nuevos clientes *
      </p>
    </div>
  );
}
