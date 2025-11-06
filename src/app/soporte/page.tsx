import Image from "next/image";
import {
  Breadcrumb,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TabsSoporteSection,
  FaqsSoporteSection,
  ContactForm,
} from "@/components";
import { BannerSoporte } from "../../../public";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte | Cooperativa Telefónica de Grand Bourg y Pablo Nogués",
  description:
    "Encontrá toda la información de soporte técnico, administración y ventas. Contactate con nuestros profesionales para resolver tus dudas o problemas de servicio.",
};

type Item = {
  titulo: string;
  descripcion: React.ReactNode;
  email: string;
};

const items: Item[] = [
  {
    titulo: "Administración",
    descripcion: <>Para realizar trámites, consultas y reclamos podés contactarte con nosotros vía mail y responderemos a la brevedad.</>,
    email: "ventas@interbourg.com.ar",
  },
  {
    titulo: "Ventas",
    descripcion: <>Estamos atendiendo en la sucursal de Grand Bourg y Pablo Nogués.<br />8:30 – 16:00 de Lunes a Viernes.</>,
    email: "notificaciones@cooperativagb.com.ar",
  },
  {
    titulo: "Servicio técnico",
    descripcion: <>Si necesitás soporte técnico de telefonía o internet podés contactarte con nuestros profesionales.</>,
    email: "soporte@interbourg.com.ar",
  },
];

function SupportCard({ item }: { item: Item }) {
  return (
    <Card className="bg-white shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl text-center font-semibold">
          {item.titulo}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm sm:text-base">
        <p className="text-gray-700 mb-3 sm:mb-4 text-center">{item.descripcion}</p>
        <p className="text-green-700 text-center font-semibold break-words">{item.email}</p>
      </CardContent>
    </Card>
  );
}

export default function SoportePage() {
  return (
    <div className="overflow-x-hidden">
      {/* BANNER */}
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[640px] overflow-hidden">
        <Image
          src={BannerSoporte}
          alt="Banner Soporte"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Contenido del banner */}
        <div className="relative z-20 flex flex-col items-center h-full px-4">
          <div className="w/full max-w-6xl mt-6 mb-3 sm:mb-4 px-2 sm:px-4 self-start">
            <Breadcrumb
              className="text-white [&_a]:text-white [&_a:hover]:text-gray-300 [&_span]:text-white [&_svg]:text-white [&_svg:hover]:text-gray-300"
              items={[
                { label: "Home", href: "/" },
                { label: "Soporte", href: "/soporte" },
              ]}
            />
          </div>

          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center mt-2">
            Estamos para ayudarte
          </h1>

          {/* GRID DESKTOP/TABLET */}
          <div className="hidden md:block w-full">
            <div className="mx-auto w-full max-w-6xl mt-10">
              <div className="grid grid-cols-3 gap-6">
                {items.map((it, i) => (
                  <div key={i} className="relative">
                    <SupportCard item={it} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS MOBILE */}
      <section className="md:hidden bg-[#F7F8F9] pt-8 pb-10 sm:pb-14 px-4">
        <div className="w-full max-w-[28rem] mx-auto grid grid-cols-1 gap-6">
          {items.map((it, i) => (
            <SupportCard key={i} item={it} />
          ))}
        </div>
      </section>

      {/* TABS */}
      <section className="bg-white py-12 sm:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <TabsSoporteSection />
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-[#F7F8F9] py-12 sm:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FaqsSoporteSection />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-white py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <ContactForm
            titulo="¿Tenés alguna duda?"
            descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea una consulta, una sugerencia o un reclamo, tu mensaje es importante para nosotros."
            horario="Respondemos de lunes a viernes, entre las 8 y las 16 h. ¡Te vamos a estar leyendo!"
            mostrarLogo={true}
          />
        </div>
      </section>
    </div>
  );
}
