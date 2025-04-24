'use client'

import PlanCard from './PlanCard';
import type { Plan } from '@/types/plan';

interface DesktopPlansProps {
  plans: Plan[];
}

export default function DesktopPlans({ plans }: DesktopPlansProps) {
  return (
    <div className="hidden md:flex flex-row gap-6 justify-center items-end">
      {plans.map((plan, idx) => (
        <PlanCard key={idx} plan={plan} variant="desktop" />
      ))}
    </div>
  );
}
