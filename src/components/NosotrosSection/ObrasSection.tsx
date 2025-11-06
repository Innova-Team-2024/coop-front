import React from "react";
import { ChevronRight } from "lucide-react";
import notices from "@/data/listNotice.json";
import NoticeCard from "../Cards/NoticeCard";
import { NoticesSlide } from "../Notices/NoticesSlide";
import slugify from "slugify";

function ObrasSection() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <article className="text-center mb-3">
        <h3 className="font-semibold mb-4">Sobre nosotros</h3>
        <h2 className="text-3xl leading-10 font-semibold lg:mb-6 lg:text-5xl lg:leading-[56px]">
          Últimas noticias <span className="lg:hidden block"> </span> en obras
        </h2>
      </article>

      <NoticesSlide pagination={true} spaceBetween={24}>
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            title={notice.title}
            description={notice.description}
            image={notice.image}
            cardClasses="my-6 lg:p-6 w-[312px] lg:w-[492px]"
            href={`/nosotros/socios/reuniones-sociales/${slugify(notice.title, {
              lower: true,
              strict: true,
            })}-${notice.id}`}
          />
        ))}
      </NoticesSlide>

      <article className="md:hidden">
        <button className="px-6 py-2 bg-transparent font-semibold text-lg text-center mx-auto text-[#0071D2] hover:text-[#0071D2]/50 transition-colors text-nowrap flex items-center gap-2">
          Consultar más información <ChevronRight />
        </button>
      </article>
    </div>
  );
}

export default ObrasSection;
