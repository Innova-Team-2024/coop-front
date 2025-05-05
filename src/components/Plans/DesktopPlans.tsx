
'use client';

import PlanCard from './PlanCard';
import type { Plan } from '@/types/plan';

interface DesktopPlansProps {
  plans: Plan[];
}

export default function DesktopPlans({ plans }: DesktopPlansProps) {
  return (
    <div className="hidden md:grid grid-cols-1 lg:flex gap-6 justify-center items-end">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className="w-full flex justify-center
            [&:nth-child(n+2)]:mt-20
            md:[&:nth-child(n+2)]:mt-15
            lg:mt-0"
        >
          <PlanCard plan={plan} variant="desktop" />
        </div>
      ))}
    </div>
  );
}
