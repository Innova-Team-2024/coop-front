import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components";
import { Plus, Minus } from "lucide-react";

const GestarCoopFaq = () => {
  const faqs = [
    {
      id: "01",
      question: "¿Qué es Gestarcoop?",
      answer:(
        <>
        <a href="https://migestarcoop.com.ar/grandbourg/login"
            target="_blank"
            className="text-[#0071D2] underline font-semibold">
          GestarCoop 
        </a>
        {" "}es una plataforma en línea que permite a los usuarios gestionar sus servicios y realizar pagos de manera segura y conveniente.
        </>
      ),
        
      color: "text-acordion-1",
    },
    {
      id: "02",
      question: "¿Cómo puedo abonar?",
      answer:
        "Puedes abonar tus servicios a través de diversos métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. Recuerde que al abonar por medios de pagos electrónicos, habrá un 5% de recargo en la siguiente factura.",
      color: "text-acordion-2",
    },
    {
      id: "03",
      question: "¿Cuanto tarda en acreditarse mi pago?",
      answer:(
      <>
        Los pagos realizados desde la plataforma de {" "}<a href="https://migestarcoop.com.ar/grandbourg/login"
            target="_blank"
            className="text-[#0071D2] underline font-semibold">
          GestarCoop 
        </a>{" "} se acreditan en las próximas 24 horas después de haberse confirmado la transacción. En caso tener el servicio suspendido se va a habilitar en el transcurso del dia.
      </>
      ),
      color: "text-acordion-3",
    },
    {
      id: "04",
      question: "¿Qué pasa si cuento con facturas vencidas?",
      answer:(
        <>
        Previamente comuníquese con nuestras oficinas para conocer el importe exacto a depositar con los intereses correspondientes a la fecha. Envíos de comprobantes de pago a{" "}
        <a
            href="mailto:transferencias@cooperativagb.com.ar"
            className="text-[#0071D2] underline font-semibold"
          >
            transferencias@cooperativagb.com.ar
          </a>{" "}(Aclare su código de Suministro – ver en factura)
        </>
        ),
      color: "text-acordion-3",
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none rounded-[32px] w-full mb-4 mt-4 shadow-[0px_2px_4px_rgba(0,0,0,0.06),0px_4px_6px_rgba(0,0,0,0.10)] pr-1 pl-1 bg-white"
              >
                <AccordionTrigger className="flex items-center group p-4 text-left [&>svg]:hidden hover:no-underline">
                  <div className="grid  grid-cols-[auto_auto_auto] md:grid-cols-[auto_1fr_auto] w-full items-center">
                    <div className="justify-self-start lg:col-start-1">
                      <span className={`${faq.color} font-bold text-[20px]`}>
                        {faq.id}
                      </span>
                    </div>

                    <div className="justify-self-center md:justify-self-start sm:col-span-1 sm:ml-2 text-nowrap">
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
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default GestarCoopFaq;
