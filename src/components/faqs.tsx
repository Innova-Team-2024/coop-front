'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { id: '01', question: '¿Cómo contratar el servicio?', answer: 'Para contratar el servicio, comunícate con nuestro equipo de ventas.' },
  { id: '02', question: '¿Cuál es el tiempo de instalación del servicio?', answer: 'El tiempo de instalación es de aproximadamente 3 a 5 días hábiles.' },
  { id: '03', question: '¿Cómo cambio la clave del modem Wi-fi?', answer: 'Para cambiar la clave del Wi-Fi, accede a la configuración del modem en 192.168.1.1.' },
  { id: '04', question: '¿Cómo cambio la clave del modem Wi-fi?', answer: 'Para cambiar la clave del Wi-Fi, accede a la configuración del modem en 192.168.1.1.' },
];

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center p-6 outline-none bg-white rounded-lg shadow-md mt-10 mb-10">
      <h2 className="text-[64px] font-semibold text-center">Preguntas <span className="text-[#5540a7]">frecuentes</span></h2>
      <p className="text-black text-[18px] text-center mt-2 ">¡Tu tranquilidad es importante! Respondemos las preguntas más comunes para que estés siempre al tanto.</p>
      <div className="mt-6 w-full max-w-xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg mb-2">
              <AccordionTrigger className="flex justify-between items-center group p-4 text-left [&>svg]:hidden">
                <span className="flex items-center space-x-2">
                  <span className={`text-${index % 2 === 0 ? 'blue' : 'green'}-500 font-bold`}>{faq.id}</span>
                  <span>{faq.question}</span>
                </span>
                <span className="flex items-center">
                  <Plus className="w-5 h-5 transition-all group-data-[state=open]:hidden" />
                  <Minus className="w-5 h-5 transition-all hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button variant="link" className="mt-4 text-gray-700">Ir a centro de ayuda →</Button>
    </div>
  );
}
