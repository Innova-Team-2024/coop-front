// src/app/nosotros/page.tsx

import {
  BoardAccordion,
  Breadcrumb,
  ContactForm,
  Faqs,
  ImageGridGallery,
  ImageSlideGallery,
  Molecules,
  Notice,
} from "@/components";

import {
  AboutUsPage1,
  AboutUsPage2,
  AboutUsPage3,
  AboutUsPage4,
  AboutUsPage5,
  AboutUsPage6,
} from "@/public";

export default function Nosotros() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "" },
  ];

  //Imagenes para la galeria
  const images = [
    AboutUsPage1,
    AboutUsPage2,
    AboutUsPage3,
    AboutUsPage4,
    AboutUsPage5,
    AboutUsPage6,
    // etc...
  ];

  return (
    <main className="py-8 mt-6 mb-6 md:mt-16 max-w-[1440px] mx-auto">
      <Breadcrumb className="lg:px-32" items={pathItems} />

      <section className="px-6 py-10 md:px-24 lg:px-32 lg:py-16 space-y-8 lg:space-y-20">
        <article className="text-center text-pretty self-stretch">
          <h3 className="font-semibold mb-2 lg:mb-4">Sobre nosotros</h3>
          <h1 className="text-4xl leading-10 font-semibold mb-3 lg:mb-6 lg:text-5xl lg:leading-[56px]">
            Cooperativa Telefónica <span className="hidden lg:block"> </span> de{" "}
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
      <section>
        <article className="hidden lg:block">
          <ImageSlideGallery images={images} />
        </article>
        <article className="lg:hidden">
          <ImageGridGallery images={images} />
        </article>
      </section>
      <section className="py-10">
        <Notice />
      </section>
      <section className="relative -mt-20 lg:-mt-56 lg:-mb-40">
        <div className="absolute top-96 left-28 -z-20 hidden lg:block">
          <Molecules />
        </div>
        <div>
          <Faqs />
        </div>
        <div className="absolute top-36 right-28 -z-20 hidden lg:block">
          <Molecules />
        </div>
      </section>
      <section className="px-2">
        <ContactForm />
      </section>
    </main>
  );
}
