"use client";

import { motion, useReducedMotion, cubicBezier } from "framer-motion";
import { Molecules } from "@/components";
import Faqs from "./Faqs";

export default function FaqSection() {
  const shouldReduceMotion = useReducedMotion();

  const faqDecorativeVariant = {
    initial: {
      opacity: 0,
      y: 16,
      scale: 0.97,
      filter: "blur(6px)",
    },
    animate: {
      opacity: 0.5,
      y: 0,
      x: 4,
      scale: 1,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <section className="relative">
      {/* Molécula izquierda – desktop only */}
      <motion.div
        variants={faqDecorativeVariant}
        initial="initial"
        animate={shouldReduceMotion ? undefined : "animate"}
        className="absolute top-96 left-28 -z-20 hidden lg:block"
      >
        <Molecules />
      </motion.div>

      <Faqs />

      {/* Molécula derecha – desktop only */}
      <motion.div
        variants={faqDecorativeVariant}
        initial="initial"
        animate={shouldReduceMotion ? undefined : "animate"}
        className="absolute top-36 right-28 -z-20 hidden lg:block"
      >
        <Molecules />
      </motion.div>
    </section>
  );
}
