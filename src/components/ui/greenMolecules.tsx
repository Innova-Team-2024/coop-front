import React from "react";
import Image from "next/image.js";
/* import BigGreenMolecules from "@/public/molecules/GreenVector.svg"; */

const GreenMolecules = () => {
  return (
    <div className="flex w-full">
      <div className="h-full w-full">
        <Image
          src="/molecules/GreenVector.svg"
          alt={"Molecula mancha verde"}
          height={330}
          width={329}
          className="blur-[3px] opacity-80 rotate-12"
        />
      </div>
    </div>
  );
};

export { GreenMolecules };
