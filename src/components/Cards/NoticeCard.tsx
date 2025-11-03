import React from "react";
import Image from "next/image.js";

type Props = {
  title: string;
  description: string;
  imageSrc?: string; // ✅ agregamos este prop opcional
};

const NoticeCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex flex-col gap-3 my-6 p-4 w-[312px] lg:w-[492px] lg:h-[451px] h-[359px] rounded-xl border border-[#DDD] bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10),0px_4px_6px_0px_rgba(0,0,0,0.05)]">
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc || "/NoticeExample.jpg"} // ✅ usa tu imagen dinámica o una por defecto
          alt={`Noticia ${title}`}
          fill
          className="object-cover select-none"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <div className="text-center mt-2">
        <h5 className="text-2xl font-medium text-[#334155]">{title}</h5>
        <p className="text-[#475569] text-ellipsis overflow-hidden line-clamp-3 leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NoticeCard;
