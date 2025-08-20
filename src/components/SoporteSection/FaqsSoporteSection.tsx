
'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: '01',
    question: '¿Cómo contrato el servicio de Internet?',
    answer: (
      <>
        Podés acercarte a nuestras oficinas o escribir a{' '}
        <a href="mailto:ventas@interbourg.com.ar" className="underline text-[#005194]">
          ventas@interbourg.com.ar
        </a>{' '}
        para consultar planes y condiciones. Si ya tenés ADSL, podés pasarte a fibra óptica y aprovechar mejores beneficios.
      </>
    ),
    color: 'text-acordion-1',
  },
  {
    id: '02',
    question: '¿Cuánto tarda la instalación?',
    answer: 'El servicio se instala en un plazo aproximado de hasta 15 días hábiles.',
    color: 'text-acordion-2',
  },
  {
    id: '03',
    question: '¿Cómo cambio la velocidad de mi plan?',
    answer: (
      <>
        Podés gestionarlo en nuestras oficinas o por correo a{' '}
        <a href="mailto:soporte@interbourg.com.ar" className="underline text-[#005194]">
          soporte@interbourg.com.ar
        </a>, indicando los datos del titular y el nuevo plan. Planes disponibles en la sección Servicios.
      </>
    ),
    color: 'text-acordion-3',
  },
  {
    id: '04',
    question: '¿Cómo cambio la clave del Wi-Fi o configuro el módem?',
    answer:
      'Contactá a soporte técnico para solicitar cambios. El módem es propiedad de la Cooperativa, por lo que no se puede configurar por cuenta propia.',
    color: 'text-acordion-4',
  },
  {
    id: '05',
    question: '¿Por qué el Wi-Fi no llega a toda la casa?',
    answer:
      'La señal puede verse afectada por el tamaño, distribución y materiales de la vivienda. En algunos casos, es necesario instalar repetidores de señal para mejorar la cobertura.',
    color: 'text-[#FF9900]',
  },
  {
    id: '06',
    question: 'Mi Internet está lento, ¿qué hago?',
    answer:
      'Reiniciá el módem y tus dispositivos. Hacé una prueba de velocidad cerca del módem (si es Wi-Fi). Para mejores resultados, conectá una PC por cable de red. En Smart TV, también se recomienda conexión por cable.',
    color: 'text-[#F04438]',
  },
  {
    id: '07',
    question: '¿Cómo pido ayuda si tengo un problema técnico?',
    answer: (
      <>
        Llamanos al 📞 02320-484000 o al 📞 177 (desde Grand Bourg). Horarios: lunes a viernes de 8:30 a 21:00 hs, y sábados de 9:00 a 21:00 hs.
        También podés escribir a{' '}
        <a href="mailto:soporte@interbourg.com.ar" className="underline text-[#005194]">
          soporte@interbourg.com.ar
        </a>{' '}
        o completar el formulario en nuestro sitio web.
      </>
    ),
    color: 'text-[#D92D20]',
  },
];

export default function FaqsSoporteSection() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10">
      <h2 className="text-[32px] sm:text-[48px] font-medium text-center tracking-[-2px]">
        Preguntas <span className="text-titleFaqs">frecuentes</span>
      </h2>
      <p className="text-black text-center mt-4 text-[15px] sm:text-[18px] max-w-[700px]">
        ¡Tu tranquilidad es importante! Por eso, respondemos las preguntas más comunes para que estés siempre al tanto.
      </p>

      <div className="mt-6 flex justify-center w-full">
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
                    <span className={`${faq.color} font-bold text-[15px] sm:text-[20px]`}>
                      {faq.id}
                    </span>
                    <span className="text-[15px] pl-4 sm:pl-0 sm:text-[20px] text-textFaqs-primary font-medium">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex items-center">
                    <Plus className={`w-6 h-6 transition-all group-data-[state=open]:hidden ${faq.color}`} />
                    <Minus className={`w-6 h-6 transition-all hidden group-data-[state=open]:block ${faq.color}`} />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-4 ml-8 text-[15px] sm:text-[16px] text-slate-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
