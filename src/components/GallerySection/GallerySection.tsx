
"use client";

import { ImageSlideGallery } from "@/components";
import {
  AboutUsPage1,
  AboutUsPage2,
  AboutUsPage3,
  AboutUsPage4,
  AboutUsPage5,
  AboutUsPage6,
} from "@/public";

const images = [
  AboutUsPage1,
  AboutUsPage2,
  AboutUsPage3,
  AboutUsPage4,
  AboutUsPage5,
  AboutUsPage6,
];

export default function GallerySection() {
  return (
    <section className="w-full px-6 md:px-[120px] py-[60px] bg-[#F7F7FB]">
      <div className="max-w-[1200px] mx-auto">
        <ImageSlideGallery images={images} />
      </div>
    </section>
  );
}
