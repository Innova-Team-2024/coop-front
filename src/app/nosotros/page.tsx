// src/app/nosotros/page.tsx
import BoardAccordion from "@/components/BoardAccordion/BoardAccordion";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
/* import Link from "next/link"; */

export default function Nosotros() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "" },
  ];

  return (
    <main className="py-8 mt-6 mb-6 lg:mt-16 max-w-[1440px] mx-auto">
      <Breadcrumb className="lg:px-32" items={pathItems} />

      <section className="px-6 py-10 md:px-24 lg:px-32 lg:py-16 space-y-8 lg:space-y-20">
        <article className="text-center text-pretty self-stretch">
          <h3 className="font-semibold mb-2 lg:mb-4">Sobre nosotros</h3>
          <h1 className="text-4xl leading-10 font-semibold mb-3 lg:mb-6 lg:text-5xl lg:leading-[56px]">
            Cooperativa Telefónica <span className="hidden lg:block"> </span> de{" "}
            <span>Grand Bourg</span> y <span>Pablo Nogués</span>
          </h1>
          <p className="text-sm lg:text-xl font-normal">
            Servicios Públicos, Urbanización y Asistencia Social LTDA
          </p>
        </article>

        <article className="mt-6 flex justify-center w-full">
          <div className="w-full max-w-[800px]">
            <BoardAccordion />
          </div>
        </article>
      </section>
    </main>
  );
}
