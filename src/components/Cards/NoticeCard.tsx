import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import slugify from "slugify";

type Props = {
  title: string;
  description: string;
  id: string | number;
  image?: string | StaticImageData;
};

const NoticeCard = ({ title, description, image, id }: Props) => {
  return (
    <Link
      href={`/nosotros/socios/reuniones-sociales/${slugify(title, {
        lower: true,
        strict: true,
      })}-${id}`}
      className="flex flex-col gap-3 my-6 p-4 lg:p-6 w-[312px] lg:w-[492px] lg:h-[451px] h-[359px] rounded-xl border border-[#DDD] bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10),0px_4px_6px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_20px_25px_0px_rgba(0,0,0,0.15),0px_8px_10px_0px_rgba(0,0,0,0.08)] transition-shadow duration-200"
    >
      <div className="relative rounded-2xl max-w-[459px] h-80 w-full mx-auto overflow-hidden">
        <Image
          src={image || "/aboutUsPage/NoticeExample.png"}
          fill
          alt={`Noticia ${title}`}
          className="select-none rounded-2xl object-fill"
        />
      </div>
      <div className="text-center gap-1">
        <h5 className="text-2xl font-medium text-[#334155] mb-1">{title}</h5>
        <p className="text-[#475569] text-ellipsis overflow-hidden line-clamp-3 leading-5">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default NoticeCard;
