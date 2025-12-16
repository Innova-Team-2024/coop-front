import {
  BoardAccordion,
  Breadcrumb,
  ContactForm,
  NuestraHistoria,
  ImageGridGallery,
  ImageSlideGallery,
  ObrasSection,
} from "@/components";

import {
  AboutUsPage1,
  AboutUsPage2,
  AboutUsPage3,
  AboutUsPage4,
  AboutUsPage5,
  AboutUsPage6,
} from "../../../public";
import FaqSection from "@/components/Faqs/FaqsSection";

export const metadata = {
  title: "Nosotros | Cooperativa Telefónica de Grand Bourg y Pablo Nogués",
  description:
    "Conocé la historia, los valores y el equipo de la Cooperativa Telefónica de Grand Bourg y Pablo Nogués. Más de 60 años brindando servicios y compromiso con la comunidad.",
};

export default function Nosotros() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "" },
  ];

  const images = [
    AboutUsPage1,
    AboutUsPage2,
    AboutUsPage3,
    AboutUsPage4,
    AboutUsPage5,
    AboutUsPage6,
  ];

  return (
    <main className="pb-8 mb-6 max-w-[1440px] mx-auto">
      <Breadcrumb className="lg:px-32" items={pathItems} />

      {/* SECCIÓN ENCABEZADO + CONSEJO */}
      <section
        id="consejo"
        className="px-6 py-10 md:px-24 lg:px-32 lg:py-16 space-y-8 lg:space-y-20 scroll-mt-[120px]"
      >
        <article className="text-center text-pretty self-stretch">
          <h3 className="font-semibold mb-2 lg:mb-4">Sobre nosotros</h3>
          <h1 className="text-4xl leading-10 font-semibold mb-3 lg:mb-6 lg:text-5xl lg:leading-[56px]">
            Cooperativa Telefónica <span className="hidden lg:block" /> de{" "}
            <span>Grand Bourg</span> y <span>Pablo Nogués</span>
          </h1>
          <p className="text-sm lg:text-xl font-normal">
            Servicios Públicos, Urbanización y Asistencia Social LTDA
          </p>
        </article>

        <article className="mt-6 flex justify-center w-full">
          <div className="w-full max-w-[800px]">
            <BoardAccordion />
          </div>
        </article>
      </section>

      {/* GALERÍA */}
      <section>
        <article className="hidden lg:block">
          <ImageSlideGallery images={images} />
        </article>
        <article className="lg:hidden">
          <ImageGridGallery images={images} />
        </article>
      </section>

      {/* NUESTRA HISTORIA */}
      <section id="historia" className="scroll-mt-[120px]">
        <NuestraHistoria />
      </section>

      {/* AVISO */}
      <section id="obras" className="py-10 scroll-mt-[120px]">
        <ObrasSection />
      </section>

      {/* FAQS + MOLÉCULAS */}
      <section className="relative -mt-20 lg:-mt-56 lg:-mb-40">
        <FaqSection />
      </section>

      {/* CONTACTO */}
      <section className="px-2">
        <ContactForm
          titulo="¿Tenés alguna duda?"
          descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea una consulta, una sugerencia o un reclamo, tu mensaje es importante para nosotros."
          horario="Respondemos de lunes a viernes, entre las 8 y las 16 h. ¡Te vamos a estar leyendo!"
          mostrarLogo={true}
        />
      </section>
    </main>
  );
}

