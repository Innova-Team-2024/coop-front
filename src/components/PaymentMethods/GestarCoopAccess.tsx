import React from "react";
import GreenButton from "../Buttons/GreenButton";
import { ArrowUpRight } from "lucide-react";
import GestarCoopFaq from "./GestarCoopFaq";

function GestarCoopAccess() {
  return (
    <section>
      <article>
        <div className="text-center text-pretty self-stretch py-12 md:px-24 mt-4 lg:mt-0 lg:px-32 lg:py-16">
          <h3 className="font-semibold mb-4 lg:mb-4">Pagos online</h3>
          <h1 className="text-4xl font-semibold mb-6 lg:mb-6 lg:text-5xl lg:leading-[56px] line-clamp-4">
            Ingresa a GestarCoop
          </h1>
          <p className="lg:text-xl leading-5 lg:leading-6 font-normal">
            Nuestra propia plataforma para que puedas realizar tus pagos ¡Sin
            necesidad de hacer trámites!
          </p>
        </div>
        <div>
          <GreenButton size="default" rounded="full">
            Ingresar
            <ArrowUpRight />
          </GreenButton>
        </div>
      </article>
      <article>
        <GestarCoopFaq />
      </article>
    </section>
  );
}

export default GestarCoopAccess;
