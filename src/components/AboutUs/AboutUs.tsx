import Link from "next/link.js";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import {
  AboutUs1,
  AboutUs2,
  AboutUs3,
  AboutUs4,
  AboutUs5,
} from "../../../public";
import CarouselCol from "./CarouselCol";
import CarouselRow from "./CarouselRow";
import PrimaryButton from "../Buttons/PrimaryButton";

function AboutUs() {
  const images = [AboutUs1, AboutUs2, AboutUs3, AboutUs4, AboutUs5];
  const carouselImages = [...images, ...images];

  return (
    <div className="lg:w-full bg-white rounded-3xl border border-[#E3F0E8] overflow-hidden shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] lg:max-w-[1200px] lg:h-[526px] lg:mx-auto flex flex-col-reverse lg:flex-row my-16 mx-4">
      {/* Text Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-96 lg:pl-14 lg:py-8 px-6 py-6 flex flex-col justify-center">
          <h2 className="md:text-5xl text-3xl font-semibold md:font-bold text-[#1C1F23] text-nowrap">
            Defendamos lo
          </h2>
          <span className="md:text-5xl text-3xl font-semibold md:font-bold text-[#46AF3F] mb-4">
            nuestro
          </span>

          <p className="text-lg font-normal mb-6">
            Somos una cooperativa que nació del esfuerzo, la confianza y la
            unión de vecinos que soñaron con un pueblo en crecimiento.
          </p>
          <p className="text-lg font-normal mb-6">
            Enterarte de nuestra historia y de las últimas novedades en obras,
            porque construir juntos es nuestra mayor satisfacción.
          </p>

          <Link href={"/nosotros#historia"} className="lg:self-start">
            <PrimaryButton
            type="submit" 
            size="lg" 
            rounded="2xl" 
            >
              Quiero saber más
              <IoIosArrowForward className="h-4 w-4" />
            </PrimaryButton>
          </Link>
        </div>
      </div>
      {/* Image Gallery */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-end">
        {/* Carousel Gallery - Left/Right */}
        <CarouselCol items={carouselImages} />
        {/* Carousel Gallery - Top/Bottom */}
        <CarouselRow items={carouselImages} />
      </div>
    </div>
  );
}

export default AboutUs;
