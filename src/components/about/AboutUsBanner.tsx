import React from "react";
import Image from "next/image";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4, AboutUs5,} from "@/public"; 
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

const AboutUsBanner = () => {
  const images = {
    left: [AboutUs1, AboutUs2],
    right: [AboutUs3, AboutUs4, AboutUs5],
  };

  return (
    <div className="lg:w-full bg-white rounded-lg border border-[#E3F0E8] overflow-hidden shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] lg:max-w-[1200px] lg:h-[526px] lg:mx-auto flex flex-col-reverse lg:flex-row m-4">
      {/* Text Content */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-96 lg:pl-14 lg:py-8 px-6 py-6 flex flex-col justify-center">
          <h2 className="lg:text-5xl text-3xl font-semibold lg:font-bold text-[#1C1F23] text-nowrap">
            Defendamos lo
          </h2>
          <span className="lg:text-5xl text-3xl font-semibold lg:font-bold text-[#46AF3F] mb-4">
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

          <Link href={"/#"} className="lg:self-start">
            <button className="bg-[#1C1F23] text-lg text-white w-full m-1 px-6 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors font-medium">
              Quiero saber más
              <IoIosArrowForward className="h-4 w-4" />
            </button>
          </Link>
        </div>

        {/* Image Gallery */}
      </div>
      {/* Image Gallery */}
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:justify-end">
        <div className="flex flex-row lg:flex-col gap-4 justify-center">
          {images.left.map((img, index) => (
            <div key={`left-${index}`} className="h-auto w-1/2 md:w-auto">
              <Image
                src={img}
                alt={`Facility image left ${index + 1}`}
                width={360}
                height={228}
                className="w-full rounded-lg"
                style={{ width: 360, height: 228 }}
              />
            </div>
          ))}
        </div>

        {/* Image Gallery - Right column (3 images: 295x195px) */}
        <div className="flex flex-col gap-4">
          <div className="block md:hidden">
            <Image
              src={images.right[0]}
              alt="Featured facility image"
              width={600}
              height={195}
              className="rounded-2xl w-full"
              style={{ maxWidth: "100%", height: 195 }}
            />
          </div>

          {images.right.map((img, index) => (
            <div key={`right-${index}`} className="hidden md:block h-48">
              <Image
                src={img}
                alt={`Facility image right ${index + 1}`}
                width={295}
                height={195}
                className="rounded-2xl"
                style={{ width: "295px", height: 195 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
