"use client";
import { Directive } from "@/types/directive.js";
import React from "react";

const DirectivesCard = ({ cargo, nombre }: Directive) => {
  return (
    <div className="flex w-full text-start border-b border-[#D5EBDD] bg-white rounded-3xl overflow-hidden text-nowrap">
      <div className="w-36 md:w-40 bg-[#0688372B] py-4 px-6 font-bold">
        {cargo}
      </div>
      <div className="p-4 font-medium">{nombre}</div>
    </div>
  );
};

export default DirectivesCard;
