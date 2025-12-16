import { Breadcrumb, PartnerCarousel } from "@/components";
import { ScrollInfoButton } from "@/components";
/* import ListPlansPage from "@/app/servicios/_components/ListPlansPage"; */
import type { Metadata } from "next";
import RecomendedPlans from "@/components/Plans/RecomendedPlans";
import { recomendedPlans } from "@/data/listaRecomendados";
import OptimizedListPlans from "./_components/ListPlans";

export const metadata: Metadata = {
  title: "Servicios | Cooperativa Telefónica de Grand Bourg y Pablo Nogués",
  description:
    "Conocé nuestros planes de Internet, telefonía y televisión. Elegí la conexión ideal con los beneficios exclusivos para socios de la Cooperativa Telefónica de Grand Bourg y Pablo Nogués.",
};

export default function Servicios() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "" },
  ];

  return (
    <main>
      <Breadcrumb className="lg:px-32" items={pathItems} />

      <section className="py-10 lg:px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-sm font-semibold">Promociones 2025</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
            Elegí tu <span>conexión ideal</span>
          </h2>

          {/* CARDS DE PLANES */}
          <article>
            <RecomendedPlans plans={recomendedPlans} />

            <div className="mt-10 flex justify-center">
              <ScrollInfoButton />
            </div>
          </article>

          {/* PARTNERS */}
          <PartnerCarousel />

          {/* LISTA DE PLANES */}
          <article>
            {/* <ListPlansPage /> */}
            <OptimizedListPlans />
          </article>
        </div>
      </section>
    </main>
  );
}
