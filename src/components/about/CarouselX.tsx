import Image from "next/image.js";
import React from "react";

type Props = {
  items: string[];
};

function CarouselX({ items }: Props) {
  return (
    <>
      {/* Image Gallery - top */}
      <div className="block md:hidden">
        <div className="overflow-hidden relative w-full">
          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-gray-50/60 to-transparent z-10 pointer-events-none"></div>
          <div
            className="flex animate-scrollX-l"
            style={{ width: `${items.length * (295 + 16)}px` }}
          >
            {/* Renderizar las imágenes originales */}
            {items.map((img, index) => (
              <div key={`original-${index}`} className="h-[228px] mx-2">
                <Image
                  src={img}
                  alt={`AboutUs top image ${index + 1}`}
                  width={295}
                  height={228}
                  className="rounded-2xl"
                  style={{ width: "295px", maxWidth: 295, height: 228 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery - bt */}
      <div className="flex flex-col ">
        <div className="block md:hidden relative px-[1px]">
          <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="overflow-hidden w-full">
            <div
              className="flex animate-scrollX-r"
              style={{ width: `${items.length * (295 + 16)}px` }}
            >
              {/* Renderizar las imágenes originales */}
              {items.map((img, index) => (
                <div key={`bt-${index}`} className="h-48 m-2">
                  <Image
                    src={img}
                    alt={`AboutUs bt image ${index + 1}`}
                    width={295}
                    height={195}
                    className="rounded-2xl"
                    style={{ width: "295px", maxWidth: 295, height: 195 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselX;
