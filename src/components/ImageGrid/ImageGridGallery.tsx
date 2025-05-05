"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image.js";

type Props = {
  images: StaticImageData[];
  initialVisible?: number;
  step?: number;
};

export default function ImageGridGallery({
  images,
  initialVisible = 4,
  step = 2,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + step, images.length));
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisible);
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;
  const hasLess = visibleCount > initialVisible;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={"Image gallery grid" + index}
              fill
              className="object-cover transition-transform duration-600 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 6}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center flex justify-center gap-4">
        {hasMore && (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-transparent font-semibold text-[#0071D2] hover:text-[#0071D2]/50 transition-colors"
          >
            Ver más
          </button>
        )}

        {hasLess && (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-transparent font-semibold text-[#0071D2] hover:text-[#0071D2]/50 transition-colors"
          >
            Ver menos
          </button>
        )}
      </div>
    </div>
  );
}
