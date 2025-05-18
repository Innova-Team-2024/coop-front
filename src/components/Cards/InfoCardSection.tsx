
"use client";

import { InfoCard } from "@/components";
import {
  FaUsers,
  FaFileAlt,
  FaGraduationCap,
  FaCamera,
} from "react-icons/fa";

export default function InfoCardSection() {
  return (
    <section className="w-full px-6 md:px-[120px] py-6 md:py-[30px]">
      <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-center items-center gap-4 md:gap-5 max-w-[1248px] mx-auto">
        <InfoCard
          icon={<FaUsers className="text-blue-600" />}
          title="Nosotros"
          href="/nosotros"
          iconBgColor="bg-blue-50"
        />
        <InfoCard
          icon={<FaFileAlt className="text-emerald-700" />}
          title="Aranceles 2025"
          href="/jardin/aranceles"
          iconBgColor="bg-emerald-50"
        />
        <InfoCard
          icon={<FaGraduationCap className="text-orange-300" />}
          title="Inscripción"
          href="/jardin/inscripcion"
          iconBgColor="bg-stone-50"
        />
        <InfoCard
          icon={<FaCamera className="text-rose-500" />}
          title="Redes sociales"
          href="/jardin/redes"
          iconBgColor="bg-rose-50"
        />
      </div>
    </section>
  );
}
