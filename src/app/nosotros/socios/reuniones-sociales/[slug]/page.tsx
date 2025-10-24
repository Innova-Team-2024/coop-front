import React from "react";
import { Breadcrumb } from "@/components";

import Image from "next/image";
/* import Logotipo from "/logo-large.png"; */
import NoticesSlide from "@/components/Notices/NoticesSlide";
import notices from "@/data/listNotice.json";
import { notFound } from "next/navigation";
/* import { Logo2 } from "../../../../../../public/index.js"; */

export const metadata = {
  title: "Reuniones Sociales | Comunidad y encuentro",
  description:
    "Espacios de encuentro para socios, familias y vecinos. Promovemos el lazo social con actividades abiertas y participativas.",
};

export default async function page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const id = slug.split("-").pop();

  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    notFound(); // 404 si no existe
  }

  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Socios", href: "/nosotros/socios/reuniones-sociales" },
    {
      label: "Reuniones Sociales",
      href: "/nosotros/socios/reuniones-sociales",
    },
    { label: "Publicación", href: "" },
  ];

  //Imagenes para la galeria
  /*   const images = {
    "notice_1.jpg": notice1,
    "notice_2.jpg": notice2,
    "notice_3.jpg": notice3,
    "notice_4.jpg": notice4,
  }; */

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={pathItems} />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Background Image and Gradient Overlay */}
        <section className="relative overflow-hidden rounded-2xl min-h-[538px] lg:min-h-[738px] mt-3 mb-5 lg:mb-12">
          {/* Background Image Container - Aquí pondrás tu imagen completa */}
          <div className="absolute inset-0 bg-white">
            {/* Aquí reemplazarás este div con tu background-image que incluye las casas + logo + texto cooperativa */}
            <div className="w-full h-full flex items-center justify-center">
              <picture className="w-full flex justify-center items-center">
                <Image
                  src={notice.image || "/logo-large.png"}
                  alt={`Noticia ${notice.title}`}
                  fill
                  className="object-cover rounded-2xl select-none"
                />
              </picture>
            </div>
          </div>

          {/* Gradient Overlay - Claro arriba, oscuro abajo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%)",
            }}
          ></div>

          {/* Content positioned at bottom left */}
          <div className="absolute bottom-8 left-8 z-10">
            {/* Title and subtitle in white */}
            <h3 className="text-2xl text-center md:text-start md:text-5xl font-bold text-white mb-4 leading-tight">
              ¡Estamos de vuelta!
            </h3>
            <p className="hidden lg:flex text-white text-base md:text-lg leading-relaxed line-clamp-2 w-3/4">
              Renovamos el diálogo con nuestros asociados para seguir impulsando
              soluciones, valores y programas para toda la comunidad.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto py-16">
          {/* Section Title */}
          <div className="text-center mb-6">
            {/* Logo placeholder */}
            <div className="flex justify-center mb-6">
              <div className="w-28 h-14 rounded-lg flex items-center justify-center relative">
                <div className="w-full h-full absolute">
                  <Image
                    src="/logo2.png"
                    alt={"Logo empresa"}
                    fill
                    priority
                    className="invert"
                  />
                </div>
              </div>
            </div>
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1E293B] mb-4 leading-relaxed">
              {notice.title || "Información de turismo social"}
            </h2>
          </div>
          {/* Content Text */}
          <div>
            <div className="prose prose-lg mx-auto leading-relaxed text-center">
              <p className="whitespace-pre-line text-lg leading-relaxed">
                {notice.description}
              </p>
            </div>
          </div>
        </section>
        {/* <section className="space-y-8 my-16">
          <article className="hidden lg:block">
            <ImageSlideGallery images={images} />
          </article>
          <article className="lg:hidden">
            <ImageGridGallery images={images} />
          </article>
        </section> */}
        <section className="w-full">
          <article className="text-center mb-3">
            <h2 className="text-3xl leading-10 font-semibold lg:mb-6 lg:text-5xl lg:leading-[56px]">
              Conocé más <span className="lg:hidden block"> </span> nuestras
              reuniones
            </h2>
          </article>

          <NoticesSlide notices={notices} pagination={true} />
        </section>
      </main>
    </div>
  );
}
