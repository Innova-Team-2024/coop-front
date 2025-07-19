
"use client";

import Image from "next/image";
import {
  Breadcrumb,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TabsSoporteSection,
  FaqsSoporteSection,
  ContactForm
} from "@/components";
import { BannerSoporte } from "@/public";

export default function SoportePage() {
  return (
    <>
      <section className="relative w-full h-[650px] md:h-[720px]">
        <Image
          src={BannerSoporte}
          alt="Banner Soporte"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
          <div className="w-full max-w-6xl mb-4">
            <Breadcrumb
              className="
                text-white
                [&_a]:text-white
                [&_a:hover]:text-gray-400
                [&_span]:text-white
                [&_svg]:text-white
                [&_svg:hover]:text-gray-400"
              items={[
                { label: "Home", href: "/" },
                { label: "Soporte", href: "/soporte" },
              ]}
            />
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-12 text-center">
            Estamos para ayudarte
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            <Card className="bg-white shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg text-center font-semibold">
                  Administración
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Para realizar trámites, consultas y reclamos podés
                  contactarte con nosotros vía mail y responderemos a la
                  brevedad.
                </p>
                <p className="text-green-700 text-center font-semibold">
                  ventas@interbourg.com.ar
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg text-center font-semibold">
                  Ventas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Estamos atendiendo en la sucursal de Grand Bourg y Pablo
                  Nogués.
                  <br />
                  8:30 – 16:00 de Lunes a Viernes.
                </p>
                <p className="text-green-700 text-center font-semibold">
                  notificaciones@cooperativagb.com.ar
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg text-center font-semibold">
                  Servicio técnico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Si necesitás soporte técnico de telefonía o internet podés
                  contactarte con nuestros profesionales.
                </p>
                <p className="text-green-700 text-center font-semibold">
                  soporte@interbourg.com.ar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <TabsSoporteSection />
        </div>
      </section>

      <section className="bg-[#F7F8F9] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FaqsSoporteSection />
        </div>
      </section>

      {/* NUEVA SECCIÓN DE FORMULARIO */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <ContactForm
            titulo="¿Tenés alguna duda?"
            descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea una consulta, una sugerencia o un reclamo, tu mensaje es importante para nosotros."
            horario="Respondemos de lunes a viernes, entre las 8 y las 16 h. ¡Te vamos a estar leyendo!"
            mostrarLogo={true}
          />
        </div>
      </section>
    </>
  );
}
