"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { Plus, Minus } from "lucide-react";
import { directivos } from "@/data/listaDirectivos";
import DirectivesCard from "../Cards/DirectivesCard";

/**
 * Para actualizar nombres, cargos o añadir/eliminar directivos:
 * 👉 Edite el archivo: src/data/listaDirectivos.ts
 *
 * Después de modificar el archivo, ejecute un nuevo build y deploy.
 * Para más información: ver /docs/editar-directivos.md
 */

const sections = [
  { id: "1", title: "Consejo directivo", list: directivos.consejoDirectivo },
  { id: "2", title: "Consejeros", list: directivos.consejeros },
  {
    id: "3",
    title: "Consejeros suplentes",
    list: directivos.consejerosSuplentes,
  },
  { id: "4", title: "Síndicos", list: directivos.sindicos },
];

const BoardAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          value={section.id}
          className="border-none w-full py-3"
        >
          <AccordionTrigger className="flex justify-between items-center group py-4 text-left [&>svg]:hidden hover:no-underline">
            <span className="flex items-start space-x-2 outline-none">
              <span className="text-xl leading-6 sm:pl-0 text-[#232527] font-bold">
                {section.title}
              </span>
            </span>
            <span className="flex items-center">
              <Plus
                className={`w-6 h-6 transition-all group-data-[state=open]:hidden text-[#068837] ml-1 sm:ml-0`}
              />
              <Minus
                className={`w-6 h-6 transition-all hidden group-data-[state=open]:block text-[#068837] ml-1 sm:ml-0`}
              />
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-[#334155]">
            <div className="space-y-2">
              {section.list.map((directivo) => (
                <DirectivesCard
                  key={section.id}
                  cargo={directivo.cargo}
                  nombre={directivo.nombre}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BoardAccordion;
