"use client";

import { ScrollInfoButton } from "@/components";
import RecomendedPlans from "./RecomendedPlans";
import { recomendedPlans } from "@/data/listaRecomendados";
import Image from "next/image";
import { cubicBezier } from "framer-motion";


import { motion, useReducedMotion } from "framer-motion";

export default function InternetPlans() {
  const shouldReduceMotion = useReducedMotion();

  const decorativeVariant = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.96,
      filter: "blur(6px)",
    },
    animate: {
      opacity: 0.6,
      y: 0,
      x: 6, // deriva horizontal sutil
      scale: 1,
      filter: "blur(4px)",
      transition: {
        duration: 0.45,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold">Promociones 2025</p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
          Elige tu <span className="text-orange-500">conexión ideal</span>
        </h2>

        <div className="relative">
          {/* Molécula izquierda – SOLO desktop */}
          <motion.div
            variants={decorativeVariant}
            initial="initial"
            animate={shouldReduceMotion ? undefined : "animate"}
            className="absolute top-40 -left-40 hidden md:block -z-10"
          >
            <Image
              src={"./molecules/orange-vector.svg"}
              alt="Vector decorativo"
              width={432}
              height={237}
              priority={false}
            />
          </motion.div>

          <RecomendedPlans plans={recomendedPlans} link="/servicios" />

          {/* Molécula derecha – SOLO desktop */}
          <motion.div
            variants={decorativeVariant}
            initial="initial"
            animate={shouldReduceMotion ? undefined : "animate"}
            className="absolute -top-40 -right-40 hidden md:block -z-10"
          >
            <Image
              src={"./molecules/orange-vector.svg"}
              alt="Vector decorativo"
              width={432}
              height={237}
              priority={false}
            />
          </motion.div>
        </div>

        <div className="mt-4 flex justify-center">
          <ScrollInfoButton link="/servicios" />
        </div>
      </div>
    </section>
  );
}
