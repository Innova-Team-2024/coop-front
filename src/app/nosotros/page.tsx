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
      <Breadcrumb items={pathItems} />

      <section className="text-center px-6 py-10 text-pretty self-stretch">
        <h3 className="font-semibold mb-2">Sobre nosotros</h3>
        <h1 className="text-4xl leading-10 font-semibold mb-3">
          Cooperativa Telefónica de <span>Grand Bourg</span> y{" "}
          <span>Pablo Nogués</span>
        </h1>
        <p className="text-sm font-normal">
          Servicios Públicos, Urbanización y Asistencia Social LTDA
        </p>

        <article className="mt-6 flex justify-center w-full">
          <div className="w-full max-w-[800px]">
            <BoardAccordion />
          </div>
        </article>
      </section>
    </main>
  );
}
