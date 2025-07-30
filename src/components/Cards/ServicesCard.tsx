import React from "react";
//import { Card } from "@/components";
import Image, { StaticImageData } from "next/image.js";
import SecondaryButton from "../Buttons/SecondaryButton";

type Props = {
  icon: StaticImageData;
  title: string;
  desc: string;
};

const ServicesCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between text-left rounded-[16px] border border-[#E3F0E8] bg-white shadow-lg lg:hover:scale-105 lg:hover:shadow-xl transition-all p-6 w-52 md:w-auto max-w-[388px] h-full">
      <div className="space-y-6 flex flex-col h-full">
        <Image
          src={props.icon}
          alt={props.title}
          width={40}
          height={40}
          className="w-10 h-10 max-w-10 max-h-10"
        />
        <div className="flex-grow flex flex-col">
          <h3 className="text-base lg:text-2xl font-medium mb-2 leading-5">
            {props.title}
          </h3>
          <p className="text-descriptionServices text-sm lg:text-[16px] flex-grow">
            {props.desc}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <SecondaryButton rounded="full" size="sm" className="w-full">
            Me interesa
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
