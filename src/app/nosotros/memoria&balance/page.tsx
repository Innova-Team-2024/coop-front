import React from "react";
import { Breadcrumb, GreenButton } from "@/components";

function page() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "" },
    { label: "Memoria & Balance", href: "" },
  ];
  return (
    <section className="pb-16 lg:pb-12 px-6 mb-6 lg:mb-16 md:mt-10 max-w-[1440px] mx-auto">
      <Breadcrumb items={pathItems} />
      <article className="text-center text-pretty self-stretch py-12 md:px-24 mt-4 lg:mt-0 lg:px-32 lg:py-16">
        <h3 className="font-semibold mb-4 lg:mb-4">Sobre nosotros</h3>
        <h1 className="text-4xl font-semibold mb-6 lg:mb-6 lg:text-5xl lg:leading-[56px] line-clamp-4">
          Cooperativa <span className="md:hidden block"> </span> Telefónica{" "}
          <span className="block"> </span> de <span>Grand Bourg</span> y{" "}
          <span>Pablo Nogués</span>
        </h1>
        <p className="lg:text-xl leading-5 lg:leading-6 font-normal">
          El Consejo de Administración en cumplimiento de lo previsto por el
          art. 41 de la ley 20.337 y el art. 25 del Estatuto social, pone a
          disposición de los señores asociados la documentación a considerar en
          la próxima Asamblea General Ordinaria.
        </p>
      </article>
      <article className="text-center mx-auto lg:w-full lg:max-w-3xl space-y-8">
        <div className="py-6 space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:w-full lg:justify-between lg:items-start">
          <h5 className="text-xl lg:text-3xl font-bold text-center lg:mt-2.5">
            Memoria & Balance 2025
          </h5>
          <GreenButton size="default" rounded="full" disabled>
            Descargar PDF
          </GreenButton>
        </div>
        <span className="lg:text-end">
          <p>Próximamente disponible</p>
        </span>
        <div className="py-6 space-y-4 lg:space-y-0 lg:py-10 lg:flex lg:w-full lg:justify-between lg:items-center">
          <h5 className="text-xl lg:text-3xl font-bold text-center">
            Memoria & Balance 2024
          </h5>
          <GreenButton size="default" rounded="full">
            Descargar PDF
          </GreenButton>
        </div>
      </article>
    </section>
  );
}

export default page;
