import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components";
import { Plus, Minus } from "lucide-react";

interface Faq {
  id: string;
  question: string;
  answer: string;
  color: string;
}

const PaymentPlatformFaq = () => {
  const faqs = [
    {
      id: "01",
      question: "Débito Automático",
      answer:
        "Para contratar el servicio, comunícate con nuestro equipo de ventas.",
      color: "text-acordion-1",
    },
    {
      id: "02",
      question: "Pago Fácil",
      answer:
        "El tiempo de instalación es de aproximadamente 3 a 5 días hábiles.",
      color: "text-acordion-2",
    },
    {
      id: "03",
      question: "¿Qué es Gestarcoop?",
      answer:
        "Para cambiar la clave del Wi-Fi, accede a la configuración del modem en 192.168.1.1.",
      color: "text-acordion-3",
    },
    {
      id: "04",
      question: "¿Cómo puedo abonar?",
      answer:
        "Para cambiar la clave del Wi-Fi, accede a la configuración del modem en 192.168.1.1.",
      color: "text-acordion-4",
    },
  ];

  // Dividir los FAQs en dos columnas para desktop
  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  const renderAccordionItem = (faq: Faq) => (
    <AccordionItem
      key={`${faq.id}-${faq.question}`}
      value={`${faq.id}-${faq.question}`}
      className="border-none rounded-[32px] w-full mb-4 mt-4 shadow-[0px_2px_4px_rgba(0,0,0,0.06),0px_4px_6px_rgba(0,0,0,0.10)] pr-1 pl-1 bg-white"
    >
      <AccordionTrigger className="flex items-center group p-4 text-left [&>svg]:hidden hover:no-underline">
        <div className="grid grid-cols-[auto_auto_auto] lg:grid-cols-[auto_1fr_auto] w-full items-center">
          <div className="justify-self-start md:col-start-1">
            <span className={`${faq.color} font-bold text-[20px]`}>
              {faq.id}
            </span>
          </div>

          <div className="justify-self-center md:justify-self-start col-span-1 sm:ml-2 text-nowrap">
            <span className="text-textFaqs-primary font-medium text-start">
              {faq.question}
            </span>
          </div>

          <div className="justify-self-end sm:col-span-1 sm:col-start-3">
            <Plus
              className={`w-7 h-7 transition-all group-data-[state=open]:hidden ${faq.color}`}
            />
            <Minus
              className={`w-7 h-7 transition-all hidden group-data-[state=open]:block ${faq.color}`}
            />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-4 text-gray-600 ml-8">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <>
      {/* Mobile: Una columna */}
      <div className="md:hidden flex justify-center w-full">
        <div className="w-full max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => renderAccordionItem(faq))}
          </Accordion>
        </div>
      </div>

      {/* Desktop: Dos columnas */}
      <div className="hidden md:flex justify-center w-full">
        <div className="w-full max-w-6xl grid grid-cols-2 gap-6">
          <div className="w-full">
            <Accordion type="single" collapsible>
              {leftColumnFaqs.map((faq) => renderAccordionItem(faq))}
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible>
              {rightColumnFaqs.map((faq) => renderAccordionItem(faq))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPlatformFaq;
