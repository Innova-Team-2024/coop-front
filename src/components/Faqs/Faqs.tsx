"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@/components";
import { Plus, Minus } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";

const faqs = [
  {
    id: "01",
    question: "¿Cómo contratar el servicio?",
    answer: (
      <>
        Para contratar nuestros servicios, puede realizarlo en forma presencial
        en las oficinas comerciales de la Cooperativa, o bien, consultar vía
        email los planes y características en{" "}
        <a
          href="mailto:ventas@interbourg.com.ar"
          className="underline"
          style={{ color: "#005194" }}
        >
          ventas@interbourg.com.ar
        </a>
        .
      </>
    ),
    color: "text-acordion-1",
  },
  {
    id: "02",
    question: "¿Cuál es el tiempo de instalación del servicio?",
    answer:
      "El tiempo promedio de instalación del servicio es de los 3 a 15 días hábiles, dependiendo de la disponibilidad técnica en tu zona.",
    color: "text-acordion-2",
  },
  {
    id: "03",
    question: "¿Cómo puedo hacerme socio/a de la cooperativa?",
    answer: (
      <>
        Asociarte es muy simple: completás un formulario y abonás la cuota
        social. Podés consultar requisitos en nuestras oficinas o en la sección{" "}
        <a href="#" className="underline" style={{ color: "#005194" }}>
          Soporte
        </a>{" "}
        del sitio.
      </>
    ),
    color: "text-acordion-3",
  },
  {
    id: "04",
    question: "¿Dónde puedo pagar mi factura o consultar el saldo?",
    answer: (
      <>
        Tenés distintas opciones: en nuestras sedes, desde la{" "}
        <a href="#" className="underline" style={{ color: "#005194" }}>
          web
        </a>
        , por medios electrónicos o en comercios habilitados. En{" "}
        <a href="#" className="underline" style={{ color: "#005194" }}>
          Formas de Pago
        </a>{" "}
        vas a encontrar el detalle completo.
      </>
    ),
    color: "text-acordion-4",
  },
];

export default function Faqs() {
  return (
    <div className="flex flex-col items-center justify-center p-6 outline-none mt-20 mb-0 sm:mt-52 sm:mb-20 md:mt-20 lg:mt-52">
      <h2 className="text-[32px] sm:text-[64px] leading-[56px] font-medium text-center tracking-[-2.56px]">
        Preguntas <span className="text-titleFaqs">frecuentes</span>
      </h2>
      <p className="text-black leading-[24px] text-[16px] sm:text-[18px] text-center mt-8">
        ¡Tu tranquilidad es importante! Respondemos las preguntas más comunes
        para que estés siempre al tanto.
      </p>

      <div className="mt-6 flex justify-center px-4 w-full">
        <div className="w-full max-w-[800px]">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none rounded-[32px] w-full mb-4 mt-4 shadow-[0px_2px_4px_rgba(0,0,0,0.06),0px_4px_6px_rgba(0,0,0,0.10)] pt-3 pb-3 pr-1 pl-1 bg-white"
              >
                <AccordionTrigger className="flex justify-between items-center group p-4 text-left [&>svg]:hidden hover:no-underline">
                  <span className="flex items-center space-x-2 outline-none">
                    <span
                      className={`${faq.color} font-bold text-[15px] sm:text-[20px]`}
                    >
                      {faq.id}
                    </span>
                    <span className="text-[15px] leading-[24px] pl-4 sm:pl-0 sm:text-[20px] text-textFaqs-primary font-medium">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex items-center">
                    <Plus
                      className={`w-6 h-6 transition-all group-data-[state=open]:hidden ${faq.color} ml-1 sm:ml-0`}
                    />
                    <Minus
                      className={`w-6 h-6 transition-all hidden group-data-[state=open]:block ${faq.color} ml-1 sm:ml-0`}
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className="p-4 ml-8 text-[15px] sm:text-[16px]"
                  style={{ color: "rgba(51, 65, 85, 1)" }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Button
        variant="link"
        className="mt-4 font-normal text-black hover:no-underline text-[18px] pt-0 sm:pt-10 sm:pb-32"
      >
        Ir a centro de ayuda <IoIosArrowForward />
      </Button>
    </div>
  );
}

