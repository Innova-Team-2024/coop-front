import React from "react";
import { Breadcrumb, SocialMeetingIntro } from "@/components";

import Image from "next/image";
/* import SecondaryButton from "@/components/Buttons/SecondaryButton"; */
import notices from "@/data/listNotice.json";
/* import { notice1, notice2, notice3, notice4 } from "@/public"; */
import Link from "next/link.js";
import slugify from "slugify";
/* import NoticeExample from "/aboutUsPage/NoticeExample.png"; */

export const metadata = {
  title: "Reuniones Sociales | Comunidad y encuentro",
  description:
    "Espacios de encuentro para socios, familias y vecinos. Promovemos el lazo social con actividades abiertas y participativas.",
};

function Page() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Socios", href: "/nosotros/socios/reuniones-sociales" },
    {
      label: "Reuniones Sociales",
      href: "/nosotros/socios/reuniones-sociales",
    },
  ];
  return (
    <div className="min-h-screen ">
      <Breadcrumb items={pathItems} />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Background Image and Gradient Overlay */}
        <div className="relative overflow-hidden rounded-2xl min-h-[738px] mt-3 mb-24">
          {/* Background Image Container - Aquí pondrás tu imagen completa */}
          <div className="absolute inset-0 bg-white">
            {/* Aquí reemplazarás este div con tu background-image que incluye las casas + logo + texto cooperativa */}
            <picture className="relative w-full h-full flex justify-center items-center">
              <Image
                src="/logo-large.png"
                alt={"Logo empresa"}
                priority
                fill
                className="max-w-sm object-contain mx-auto"
              />
            </picture>
            {/* <div className="w-full h-full flex items-center justify-center">
            </div> */}
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
          <div className="absolute bottom-8 left-4 lg:left-8 z-10">
            {/* Title and subtitle in white */}
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              ¡Estamos de vuelta!
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed lg:line-clamp-2 w-3/4">
              Renovamos el diálogo con nuestros asociados para seguir impulsando
              soluciones, valores y programas para toda la comunidad.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className=" my-16">
          {/* Section Title */}
          <div className="text-center mb-6">
            {/* Logo placeholder */}

            <div className="flex justify-center mb-6">
              <div className="w-28 h-14 rounded-lg flex items-center justify-center relative">
                <div className="w-full h-full absolute">
                  <Image
                    src="/Logo2.png"
                    alt={"Logo empresa"}
                    fill
                    priority
                    className="invert"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1E293B] mb-4 leading-relaxed">
              La primera de muchas
            </h2>
          </div>

          {/* Content Text */}
          <SocialMeetingIntro />
        </div>
        <div className="space-y-8 my-16">
          <div className="flex justify-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1E293B] leading-10 text-center">
              Conocé más <br /> nuestras reuniones
            </h2>
          </div>
          {/* <div className="space-y-2 lg:flex lg:w-min lg:items-center lg:space-y-0 lg:mx-auto lg:gap-8">
            <SecondaryButton
              rounded="full"
              className="w-full text-lg font-medium text-nowrap"
            >
              Editar publicaciones
            </SecondaryButton>

            <SecondaryButton
              rounded="full"
              className="w-full text-lg font-medium text-nowrap"
            >
              Crear publicación
            </SecondaryButton>
          </div> */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notices.map((notice) => (
                <div key={notice.id}>
                  <Link
                    href={`/nosotros/socios/reuniones-sociales/${slugify(
                      notice.title,
                      { lower: true, strict: true }
                    )}-${notice.id}`}
                  >
                    <div className="flex flex-col gap-3 p-4 w-full lg:h-[451px] h-[359px] rounded-xl  border border-[#DDD] bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10),0px_4px_6px_0px_rgba(0,0,0,0.05)]">
                      <div className="relative w-full max-w-[459px] h-80 rounded-2xl mx-auto">
                        <Image
                          src={notice.image || "/aboutUsPage/NoticeExample.png"}
                          alt={`Noticia ${notice.title}`}
                          fill
                          className="object-cover rounded-2xl select-none"
                        />
                      </div>

                      <div className="text-center">
                        <h5 className="text-2xl font-medium text-[#334155]">
                          {notice.title}
                        </h5>
                        <p className="text-[#475569] text-ellipsis overflow-hidden line-clamp-3 leading-5">
                          {notice.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
