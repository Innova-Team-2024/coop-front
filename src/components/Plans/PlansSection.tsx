"use client";

import { ScrollInfoButton } from "@/components";
import RecomendedPlans from "./RecomendedPlans";
import { recomendedPlans } from "@/data/listaRecomendados";


export default function InternetPlans() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold">Promociones 2025</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
          Elige tu <span className="text-orange-500">conexión ideal</span>
        </h2>

        <RecomendedPlans plans={recomendedPlans} />

        <div className="mt-4 flex justify-center">
          <ScrollInfoButton />
        </div>
      </div>
    </section>
  );
}

