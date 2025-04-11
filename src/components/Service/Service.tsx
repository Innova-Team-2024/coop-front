'use client'

import Image from "next/image"
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ScrollInfoButton
} from "@/components"
import { Globo, Telefono, Television } from "@/public"


const services = [
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

function ServicesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
      {services.map((service) => (
        <Card
          key={service.title}
          className="text-left rounded-[16px] border border-[#E3F0E8] bg-white shadow-lg"
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
  )
}

export default function Service() {
  return (
    <section className="w-full py-16 px-6 bg-[#f9f9ff] text-center">
      <h2 className="text-[64px] font-semibold">
        Nuestros <span className="text-[#46AF3F]">servicios</span>
      </h2>

      <Tabs defaultValue="tecnologicos" className="w-full mt-10">
        <TabsList
          className="p-1 rounded-full border mx-auto mb-10 shadow-sm bg-white text-[18px]"
          style={{ width: 345 }}
        >
          {["tecnologicos", "educacion", "sociales"].map((tab, idx) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={`
                relative px-6 py-2 text-sm font-medium capitalize text-black
                rounded-full z-10
                data-[state=active]:bg-white
                data-[state=active]:shadow-[0_0_0_1.5px_white]
                transition-all
              `}
              style={
                tab === "tecnologicos"
                  ? {
                      border: "1px solid transparent",
                      backgroundClip: "padding-box",
                      borderRadius: "9999px",
                      ...(idx === 0 && {
                        backgroundImage:
                          "linear-gradient(white, white), linear-gradient(270deg, rgba(0, 170, 255, 0.44), rgba(85, 64, 167, 0.44), rgba(255, 76, 255, 0.44), rgba(255, 63, 99, 0.44), rgba(255, 102, 0, 0.44))",
                        backgroundOrigin: "padding-box, border-box",
                        backgroundClip: "padding-box, border-box",
                      }),
                    }
                  : {}
              }
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="tecnologicos">
          <ServicesCards />
        </TabsContent>
        <TabsContent value="educacion">
          <ServicesCards />
        </TabsContent>
        <TabsContent value="sociales">
          <ServicesCards />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <ScrollInfoButton />
      </div>
    </section>
  )
}
