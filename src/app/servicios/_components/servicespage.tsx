/* "use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ScrollInfoButton, TabItem } from "@/components";
import { ListServices } from "@/app/servicios/_components/servicess";
import { motion, AnimatePresence } from "framer-motion";

import {
  Globo,
  Telefono,
  Television,
  Niño,
  Libro,
  Calendario,
  Flor,
  Sombrero,
} from "../../../public";

const tecnologiesServices = [
  {
    icon: Globo,
    title: "Internet",
    desc: "Fibra óptica para una conexión más rápida, estable y segura.",
  },
  {
    icon: Television,
    title: "Televisión",
    desc: "La mejor programación con calidad y entretenimiento para disfrutar en casa.",
  },
  {
    icon: Telefono,
    title: "Telefonía",
    desc: "Servicio de línea fija con comunicación clara, confiable y sin interrupciones.",
  },
];

const educationServices = [
  {
    icon: Niño,
    title: "Jardín «Niños creciendo»",
    desc: "Jardín de infantes, educación inicial con juego y aprendizaje.",
  },
  {
    icon: Sombrero,
    title: "Instituto «Dr. René Favaloro»",
    desc: "Instituto educativo primario, con compromiso y valores.",
  },
];

const socialServices = [
  {
    icon: Libro,
    title: "Biblioteca «Segundo Severino Lago»",
    desc: "Biblioteca comunitaria, un espacio de lectura y conocimiento.",
  },
  {
    icon: Calendario,
    title: "Salón de eventos «El Italiano»",
    desc: "Salón de eventos sociales y empresariales.",
  },
  {
    icon: Flor,
    title: "Sepelios «Casa Oviedo»",
    desc: "Servicio de sepelios con atención personalizada y contención.",
  },
];

export default function Service() {
  const [activeTab, setActiveTab] = useState("tecnologicos");

  const tabs = [
    { id: "tecnologicos", label: "Tecnológicos" },
    { id: "educacion", label: "Educación" },
    { id: "sociales", label: "Sociales" },
  ];

  return (
    <section className="w-full min-h-screen py-16 px-6 text-center flex flex-col justify-center items-center">
      <h2 className="text-[40px] font-medium sm:text-[64px]">
        Nuestros <span className="text-titelServices">servicios</span>
      </h2>

      <div className="mt-10 w-full">
        <ToggleGroup.Root
          type="single"
          value={activeTab}
          onValueChange={(value) => {
            if (value) setActiveTab(value);
          }}
          className="flex justify-between gap-2 p-0 rounded-full border mx-auto mb-14 shadow-sm bg-white w-fit sm:w-[495px]"
        >
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              value={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
            />
          ))}
        </ToggleGroup.Root>

        <div className="md:px-20 mb-8">
          <AnimatePresence mode="wait">
            {activeTab === "tecnologicos" && (
              <motion.div
                key="tecnologicos"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={tecnologiesServices} />
              </motion.div>
            )}

            {activeTab === "educacion" && (
              <motion.div
                key="educacion"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={educationServices} />
              </motion.div>
            )}

            {activeTab === "sociales" && (
              <motion.div
                key="sociales"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={socialServices} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center">
        <ScrollInfoButton />
      </div>
    </section>
  );
}
 */
