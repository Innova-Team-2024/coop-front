"use client";

import {
  Banner,
  PlansSection,
  Faqs,
  Service,
  ContactForm,
  PartnerCarousel,
  AboutUs,
  Sucursal,
  ButtonUploadBanner
} from "@/components";
import { SucursalImage } from "@/public";

export default function Home() {
  return (
    <>
      <Banner />
      <ButtonUploadBanner/>
      <PlansSection />
      <PartnerCarousel />
      <Service />
      <AboutUs />
      <Faqs />
      <ContactForm
        titulo="¿Tenés alguna duda?"
        descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea una consulta, una sugerencia o un reclamo, tu mensaje es importante para nosotros."
        horario="Respondemos de lunes a viernes, entre las 8 y las 16 h. ¡Te vamos a estar leyendo!"
        mostrarLogo={true}
      />
      <Sucursal
        titulo="Nuestras sucursales"
        subtitulo="Más información"
        sucursales={[
          {
            nombre: "Sede central",
            direccion: "Av. El Callao 1328, Grand Bourg, Buenos Aires.",
            telefono: "Atención comercial 02320 - 483000",
            imagen: SucursalImage,
          },
          {
            nombre: "Sucursal Pablo Nogués",
            direccion: "Ejército de los Andes 2622 - Pablo Nogués.",
            telefono: "Atención comercial 02320 - 486000",
            imagen: SucursalImage,
          },
        ]}
      />
    </>
  );
}
