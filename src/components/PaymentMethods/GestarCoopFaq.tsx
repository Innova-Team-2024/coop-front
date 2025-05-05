import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@/components";
import { Plus, Minus, ChevronsDown } from "lucide-react";

const GestarCoopFaq = () => {
  const faqs = [
    {
      id: "01",
      question: "¿Qué es Gestarcoop?",
      answer:
        "Para contratar el servicio, comunícate con nuestro equipo de ventas.",
      color: "text-acordion-1",
    },
    {
      id: "02",
      question: "¿Cómo puedo abonar?",
      answer:
        "El tiempo de instalación es de aproximadamente 3 a 5 días hábiles.",
      color: "text-acordion-2",
    },
    {
      id: "03",
      question: "Formas de pago",
      answer:
        "Para cambiar la clave del Wi-Fi, accede a la configuración del modem en 192.168.1.1.",
      color: "text-acordion-3",
    },
  ];
  return (
    <div>
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
                    <span className={`${faq.color} font-bold text-[20px]`}>
                      {faq.id}
                    </span>
                    <span className="text-sm pl-4 sm:pl-0 text-textFaqs-primary font-medium">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex items-center">
                    <Plus
                      className={`w-7 h-7 transition-all group-data-[state=open]:hidden ${faq.color} ml-1 sm:ml-0`}
                    />
                    <Minus
                      className={`w-7 h-7 transition-all hidden group-data-[state=open]:block ${faq.color} ml-1 sm:ml-0`}
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-600 ml-8">
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
        Ir a centro de ayuda <ChevronsDown />
      </Button>
    </div>
  );
};

export default GestarCoopFaq;
