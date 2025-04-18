"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ScrollInfoButton,
} from "@/components";
import {
  Globo,
  Telefono,
  Television,
  Niño,
  Libro,
  Calendario,
  Flor,
  Sombrero,
} from "@/public";

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

function ServicesCards({ items }: { items: typeof tecnologiesServices }) {
  const isFewItems = items.length < 3;

  return (
    <div
      className={`${
        isFewItems
          ? "flex flex-col justify-center md:flex-row"
          : "grid grid-cols-1 md:grid-cols-3"
      } gap-6 px-4 md:px-20`}
    >
      {items.map((service) => (
        <Card
          key={service.title}
          className="flex flex-col justify-between text-left rounded-[16px] border border-[#E3F0E8] bg-white shadow-lg max-w-sm w-full hover:scale-105 hover:shadow-xl transition-all p-6"
        >
          <div className="flex-1">
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-[24px] font-medium mb-2">{service.title}</h3>
            <p className="text-[#475569] text-[16px]">{service.desc}</p>
          </div>

          <button className="mt-4 flex px-4 py-3 w-full text-[#1C1F23] justify-center items-center gap-2 rounded-full border border-[#E4E4E4] bg-white shadow-md text-sm font-medium hover:bg-gray-100 transition">
            Me interesa
          </button>
        </Card>
      ))}
    </div>
  );
}

export default function Service() {
  const [activeTab, setActiveTab] = useState("tecnologicos");

  const tabs = [
    { id: "tecnologicos", label: "Tecnológicos" },
    { id: "educacion", label: "Educación" },
    { id: "sociales", label: "Sociales" },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#f9f9ff] text-center">
      <h2 className="text-[40px] font-medium sm:text-[64px]">
        Nuestros <span className="text-[#46AF3F]">servicios</span>
      </h2>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="mt-10"
      >
        <TabsList className="flex justify-between gap-2 p-0 rounded-full border mx-auto mb-10 shadow-sm bg-white w-fit sm:w-[495px] ">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                className={`flex-1 rounded-full  ${
                  isActive
                    ? "p-[2px] bg-[linear-gradient(270deg,_rgba(0,170,255,0.44)_0.67%,_rgba(85,64,167,0.44)_21.34%,_rgba(255,76,255,0.44)_41.96%,_rgba(255,63,99,0.44)_62.45%,_rgba(255,102,0,0.44)_99.33%)] shadow-[0_0_8px_rgba(0,0,0,0.08)]"
                    : ""
                }`}
              >
                <TabsTrigger
                  value={tab.id}
                  className={`w-full h-[px] rounded-full text-sm capitalize text-black text-[12px] sm:text-[14px] transition-all px-4 md:px-6 py-2 sm:px-2 ${
                    isActive
                      ? "bg-white font-medium"
                      : "bg-white text-[#5F5F5F] font-normal"
                  }`}
                >
                  {tab.label}
                </TabsTrigger>
              </div>
            );
          })}
        </TabsList>

        <TabsContent value="tecnologicos">
          <ServicesCards items={tecnologiesServices} />
        </TabsContent>
        <TabsContent value="educacion">
          <ServicesCards items={educationServices} />
        </TabsContent>
        <TabsContent value="sociales">
          <ServicesCards items={socialServices} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <ScrollInfoButton />
      </div>
    </section>
  );
}
