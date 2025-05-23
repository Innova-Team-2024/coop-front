
// components/ui/InfoCard.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  href: string;
  iconBgColor: string;
}

export default function InfoCard({
  icon,
  title,
  href,
  iconBgColor,
}: InfoCardProps) {
  return (
    <div className="w-[152px] h-[60px] md:w-72 md:h-24 relative bg-white rounded-xl shadow-sm overflow-hidden">
      <div
        className={`w-8 h-8 md:w-14 md:h-14 absolute top-2 left-2 md:top-4 md:left-4 rounded-lg ${iconBgColor} flex items-center justify-center`}
      >
        <div className="text-lg md:text-2xl">{icon}</div>
      </div>
      <div className="absolute left-14 top-2 md:left-24 md:top-4 text-slate-800 text-xs md:text-xl font-medium md:font-semibold leading-3 md:leading-tight">
        {title}
      </div>
      <Link
        href={href}
        className="absolute left-14 top-7 md:left-24 md:top-[56px] border-b border-slate-800 text-[10px] md:text-base text-slate-800 font-normal leading-3 md:leading-tight inline-flex items-center gap-1"
      >
        Ver más →
      </Link>
    </div>
  );
}

