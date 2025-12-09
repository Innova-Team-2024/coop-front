"use client";

import React from "react";
import GreenButton from "../Buttons/GreenButton";
import { ArrowUpRight } from "lucide-react";
import GestarCoopFaq from "./GestarCoopFaq";
import { ChevronsDown } from "lucide-react";

function GestarCoopAccess() {
  const handleRedirect = () => {
    window.open("https://migestarcoop.com.ar/grandbourg/login", "_blank");
  };

  return (
    <section className="pt-16 pb-8 px-6 md:px-24 mt-4 lg:mt-0 lg:px-32 space-y-12">
      <article className="space-y-8">
        <div className="text-center text-pretty self-stretch">
          <h3 className="font-semibold mb-4 lg:mb-4">Pagos online</h3>
          <h1 className="text-4xl font-semibold mb-6 lg:mb-6 lg:text-5xl lg:leading-[56px] line-clamp-4">
            Ingresa a GestarCoop
          </h1>
          <p className="lg:text-xl leading-5 lg:leading-6 font-normal">
            Nuestra propia plataforma para que puedas realizar tus pagos ¡Sin
            necesidad de hacer trámites!
          </p>
        </div>
        <div className="mx-auto text-center">
          <GreenButton size="default" rounded="full" onClick={handleRedirect}>
            Ingresar
            <ArrowUpRight />
          </GreenButton>
        </div>
      </article>
      <article className="space-y-12">
        <GestarCoopFaq />
        <button
        onClick={() => window.open("https://coop-front.vercel.app/soporte", "_blank")}
        className="px-6 py-2 gap-2 bg-transparent font-semibold text-[#0071D2] hover:text-[#0071D2]/50 transition-colors flex justify-center mx-auto">
          Consultar más información
          <ChevronsDown />
        </button>
      </article>
    </section>
  );
}

export default GestarCoopAccess;
