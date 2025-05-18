
"use client";

import { ReactNode } from "react";
import { InfoCard } from "@/components"; // asegurate que esté importando el componente correcto

interface CardData {
  icon: ReactNode;
  title: string;
  href: string;
  iconBgColor: string;
}

interface InfoCardSectionProps {
  cards: CardData[];
}

export default function InfoCardSection({ cards }: InfoCardSectionProps) {
  return (
    <section className="w-full px-6 md:px-[120px] py-6 md:py-[30px]">
      <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-center items-center gap-4 md:gap-5 max-w-[1248px] mx-auto">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            href={card.href}
            iconBgColor={card.iconBgColor}
          />
        ))}
      </div>
    </section>
  );
}
