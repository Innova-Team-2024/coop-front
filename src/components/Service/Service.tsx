"use client";

import { useState } from "react";
import { ScrollInfoButton } from "@/components";
import { KeenServicesCarousel } from "@/components/Service/ListServicesLanding";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";

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
import { ServiceItem } from "@/types/services";
import AnimatedTabs from "../ui/animatedTabs";

const tecnologiesServices: ServiceItem[] = [
  {
    id: "internet",
    icon: Globo,
    title: "Internet",
    desc: "Fibra óptica para una conexión más rápida, estable y segura.",
    link: "/servicios",
  },
  {
    id: "television",
    icon: Television,
    title: "Televisión",
    desc: "La mejor programación con calidad y entretenimiento para disfrutar en casa.",
    link: "/servicios",
  },
  {
    id: "telefonia",
    icon: Telefono,
    title: "Telefonía",
    desc: "Servicio de línea fija con comunicación clara, confiable y sin interrupciones.",
    link: "/servicios",
  },
];

const educationServices: ServiceItem[] = [
  {
    id: "jardin",
    icon: Niño,
    title: "Jardín «Niños creciendo»",
    desc: "Jardín de infantes, educación inicial con juego y aprendizaje.",
    link: "/instituciones/colegios/jardin",
  },
  {
    id: "instituto",
    icon: Sombrero,
    title: "Instituto «Dr. René Favaloro»",
    desc: "Instituto educativo primario, con compromiso y valores.",
    link: "/instituciones/colegios/primaria",
  },
];

const socialServices: ServiceItem[] = [
  {
    id: "biblioteca",
    icon: Libro,
    title: "Biblioteca «Segundo Severino Lago»",
    desc: "Biblioteca comunitaria, un espacio de lectura y conocimiento.",
    link: "/instituciones/biblioteca",
  },
  {
    id: "salon-eventos",
    icon: Calendario,
    title: "Salón de eventos «El Italiano»",
    desc: "Salón de eventos sociales y empresariales.",
    link: "/nosotros/socios/reuniones-sociales",
  },
  {
    id: "sepelios",
    icon: Flor,
    title: "Sepelios «Casa Oviedo»",
    desc: "Servicio de sepelios con atención personalizada y contención.",
    link: "/instituciones/sepelios",
  },
];

type TabId = "tecnologicos" | "educacion" | "sociales";

interface Tab {
  id: TabId;
  label: string;
  services: ServiceItem[];
}

export default function Service() {
  const [activeTab, setActiveTab] = useState<TabId>("tecnologicos");
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.2 : 0.35,
    ease: cubicBezier(0.22, 1, 0.36, 1),
  };

  const variants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20,
    },
  };

  const tabs: Tab[] = [
    {
      id: "tecnologicos",
      label: "Tecnológicos",
      services: tecnologiesServices,
    },
    { id: "educacion", label: "Educación", services: educationServices },
    { id: "sociales", label: "Sociales", services: socialServices },
  ];

  //Servicios activos
  const activeServices =
    tabs.find((tab) => tab.id === activeTab)?.services || [];

  return (
    <section className="w-full py-16 px-6 text-center flex flex-col justify-center items-center">
      <h2 className="text-[40px] font-medium sm:text-[64px]">
        Nuestros <span className="text-titelServices">servicios</span>
      </h2>

      <div className="mt-10 w-full">
        <AnimatedTabs
          tabs={tabs.map(({ id, label }) => ({ id, label }))}
          value={activeTab}
          onChange={setActiveTab}
          className="mx-auto mb-14 w-fit sm:w-[495px]"
        />
        <div className="md:px-20 mb-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <KeenServicesCarousel items={activeServices} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center">
        <ScrollInfoButton link="#faqs" />
      </div>
    </section>
  );
}
