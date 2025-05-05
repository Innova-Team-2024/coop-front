import React from "react";
import Image from "next/image.js";
import { Mancha } from "@/public";

const Molecules = () => {
  return (
    <div className="flex w-full gap-12">
      <div className="h-full w-full">
        <Image
          src={Mancha}
          alt={"Molecula mancha"}
          height={60}
          width={52}
          className="blur-[2.5px] opacity-35 rotate-3"
        />
      </div>
      <Image
        src={Mancha}
        alt={"Molecula mancha"}
        height={170}
        width={194}
        className="blur-[3px] opacity-35"
      />
      <div className="h-full w-full relative">
        <Image
          src={Mancha}
          alt={"Molecula mancha"}
          height={60}
          width={52}
          className="blur-[1.5px] opacity-35 -rotate-2 absolute top-40 z-20"
        />
      </div>
    </div>
  );
};

export { Molecules };
