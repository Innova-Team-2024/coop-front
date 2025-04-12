'use client';

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs, TabsContent, TabsList, TabsTrigger,
  ScrollInfoButton
} from "@/components";
import "./Service.css";
import "./Service.css";
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
]

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
        isFewItems ? "flex flex-col justify-center md:flex-row" : "grid grid-cols-1 md:grid-cols-3"
      } gap-6 px-4 md:px-20`}
    >
      {items.map((service) => (
        <Card
          key={service.title}
          className="text-left rounded-[16px] border border-[#E3F0E8] bg-white shadow-lg max-w-sm w-full transform transition-all hover:scale-105 hover:shadow-xl"
        >
          <CardHeader>
            <div className="mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <CardTitle className="text-[24px]">{service.title}</CardTitle>
            <CardDescription className="text-[#475569] text-[16px]">
              {service.desc}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <button className="flex px-4 py-3 w-full text-[#1C1F23] justify-center items-center gap-2 self-stretch rounded-full border border-[#E4E4E4] bg-white shadow-md text-sm font-medium hover:bg-gray-100 transition">
              Me interesa
            </button>
          </CardFooter>
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
      <h2 className="text-[40px] font-semibold sm:text-[64px]">
        Nuestros <span className="text-[#46AF3F]">servicios</span>
      </h2>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mt-10">
        <TabsList className="flex gap-2 p-0 rounded-full border mx-auto mb-10 shadow-sm bg-white w-fit">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                className={`rounded-full ${isActive ? "p-[2px] bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400" : ""}`}
              >
                <TabsTrigger
                  value={tab.id}
                  className={`rounded-full text-sm font-medium capitalize text-black text-[12px] sm:text-[14px] transition-all
                    ${isActive ? "bg-white w-full h-full" : "bg-white"}
                    px-4 md:px-6 py-2 sm:px-2
                  `}
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