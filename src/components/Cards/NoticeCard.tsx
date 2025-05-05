import React from "react";
import Image from "next/image.js";
import { NoticeExample } from "@/public";

type Props = {
  /* images: StaticImageData; */
  title: string;
  description: string;
};

const NoticeCard = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-3 my-6 p-4 w-[312px] lg:w-[492px] lg:h-[451px] h-[359px] rounded-xl  border border-[#DDD] bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10),0px_4px_6px_0px_rgba(0,0,0,0.05)]">
      <div className="rounded-2xl max-h-80">
        <Image
          src={NoticeExample}
          alt={`Noticia ${title}`}
          layout="responsive"
          className="select-none"
        />
      </div>
      <div className="text-center">
        <h5 className="text-2xl font-medium text-[#334155]">{title}</h5>
        <p className="text-[#475569] text-ellipsis overflow-hidden line-clamp-3 leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NoticeCard;
