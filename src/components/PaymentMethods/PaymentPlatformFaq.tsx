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
        'Adherí tu factura al Débito Automático y ¡olvidate del vencimiento! Para solicitar débito automático del Banco Provincia comunicate con nosotros al Tel: <b>(02320) 483000</b> o completá el <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKZo3a2TKeCZnT-Kyrewu9Ouli8cKpUglGOBAfYzQvnKrO_Q/viewform?pli=1" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">formulario</a>.',
      color: "text-acordion-1",
    },
    {
      id: "02",
      question: "Pago Fácil",
      answer: `
    Ahora podés abonar tu factura actual a través de 
    <a href="https://pagosenlinea.pagofacil.com.ar/?source=COOPGRANDBURG" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="text-blue-600 underline">
       Pago Fácil
    </a>
    <br/><br/>
    1) Al ingresar al sitio de pagos debe ingresar todos los números que figuran debajo del código de barras de su factura actual.
    <br/><br/>
    2) Verificar que coincida el importe de su factura y continuar.
    <br/><br/>
    ¡Atención! A partir del siguiente paso PAGAR CON DEBITO tendrás 3 minutos para completar el pago. Te recomendamos tener a mano tu tarjeta de débito.
  `,
  color: "text-acordion-2",
    },
    {
      id: "03",
      question: "Mercado Pago",
      answer: `
    Ahora podés abonar tu factura con la aplicación de Mercado Pago. ¿Cómo pagar?
    <br /><br />
    1) Abrí la app de Mercado Pago y seleccioná <strong>Pagar servicios</strong>.<br />
    2) Escaneá el código de barras de tu factura.<br />
    3) Pagá con dinero en cuenta, tarjeta de crédito o débito. ¡Y listo!
  `,
  color: "text-acordion-3",
    },
    {
      id: "04",
      question: "Cuentas Bancarias",
      answer:`
<b>Banco Provincia</b><br/>
Sucursal 544 – Grand Bourg<br/>
CBU 0140162801514405003711<br/>
CTA. CTE. ($) 5144-50037/1<br/><br/>

<b>Banco Credicoop</b><br/>
Sucursal 227 – Altos del Talar<br/>
CBU 1910227455022700470332<br/>
CTA. CTE. ($) 191-227-004703/3<br/><br/>

<b>Banco Santander</b><br/>
Sucursal 486 – Grand Bourg<br/>
CBU 0720486320000000001472<br/>
CTA. CTE. ($) 486-000014/7<br/><br/>

<b>C.U.I.T. COOPERATIVA:</b> 30-56110656-4
`,
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
        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
