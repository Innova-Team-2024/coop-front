import Image from "next/image.js";
import React from "react";

type Props = {
  items: string[];
};

function CarouselX({ items }: Props) {
  return (
    <>
      {/* Image Gallery - right */}
      <div className="hidden md:flex flex-row lg:flex-col mx-4">
        <div
          className="flex flex-col animate-scrollY-up"
          style={{ height: `${items.length * (228 + 16)}px` }}
        >
          {items.map((img, index) => (
            <div key={`left-${index}`} className="h-auto w-[360px] my-2">
              <Image
                src={img}
                alt={`AboutUs image right ${index + 1}`}
                width={360}
                height={228}
                className="w-full rounded-2xl"
                style={{ width: "360px", maxWidth: 360, height: 228 }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Image Gallery - left */}
      <div className="hidden md:flex flex-row lg:flex-col">
        <div
          className="flex flex-col animate-scrollY-down"
          style={{ height: `${items.length * (195 + 16)}px` }}
        >
          {items.map((img, index) => (
            <div key={`left-${index}`} className="h-auto w-[295px] my-2">
              <Image
                src={img}
                alt={`AboutUs image left ${index + 1}`}
                width={295}
                height={195}
                className="w-full rounded-2xl"
                style={{ width: "295px", maxWidth: 295, height: 195 }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarouselX;
