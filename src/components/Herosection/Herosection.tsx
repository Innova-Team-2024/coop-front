
"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: StaticImageData;
  imageAlt: string;
}

export default function HeroSection({
  title,
  description,
  buttonText,
  buttonHref,
  image,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative rounded-2xl overflow-hidden mx-4 lg:mx-32 mt-10 h-[506px] md:h-[560px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 p-4 md:p-10 flex flex-col justify-end text-white rounded-2xl">
        <div className="flex flex-col gap-3 md:gap-0 md:items-start items-center">
          <h2 className="text-2xl md:text-4xl font-bold leading-7 md:leading-snug text-white text-center md:text-left w-full">
            {title}
          </h2>
          <p className="text-base font-normal text-white leading-normal whitespace-pre-line text-center md:text-left w-full">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-4 bg-white text-black text-sm font-semibold px-6 py-3 rounded-lg w-fit hover:bg-gray-100 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
