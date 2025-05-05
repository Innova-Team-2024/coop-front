import React from "react";
import { ChevronsDown } from "lucide-react";
import PaymentPlatformFaq from "./PaymentPlatformFaq";

function PaymentPlatform() {
  return (
    <section className="pt-6 pb-24 px-6 md:px-24 lg:mt-0 lg:px-32 space-y-10">
      <article className="text-center text-pretty self-stretch">
        <h3 className="font-semibold mb-4 lg:mb-4">Pagos online</h3>
        <h1 className="text-4xl font-semibold lg:mb-6 lg:text-5xl lg:leading-[56px]">
          Medios de Pago
        </h1>
        <p className="lg:text-xl leading-5 lg:leading-6 font-normal hidden lg:block">
          Nuestra propia plataforma para que puedas realizar tus pagos{" "}
          <span className="hidden lg:block"> </span>
          ¡Sin necesidad de hacer trámites!
        </p>
      </article>
      <article className="space-y-12">
        <PaymentPlatformFaq />
        <button className="px-6 gap-2 bg-transparent font-semibold text-[#0071D2] hover:text-[#0071D2]/50 transition-colors flex justify-center mx-auto">
          Consultar más información
          <ChevronsDown />
        </button>
      </article>
    </section>
  );
}

export default PaymentPlatform;
