"use client";

import Image from "next/image";
import {
  BannerAzul,
  BannerCeleste,
  BannerNaranja,
  BannerVerde,
  BannerVioleta,
} from "@/public";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { PiInfo } from "react-icons/pi";
import { Portada } from "@/public";

const banners = [
  { id: 1, src: BannerCeleste, label: "Portada 1" },
  { id: 2, src: BannerVioleta, label: "Portada 2" },
  { id: 3, src: BannerVerde, label: "Portada 3" },
  { id: 4, src: BannerAzul, label: "Portada 4" },
  { id: 5, src: BannerNaranja, label: "Portada 5" },
];

interface ModalBannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalBanner({ isOpen, onClose }: ModalBannerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-4 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <Image
          src={Portada}
          alt="Imagen decorativa de portada"
          width={46}
          height={46}
          className="mx-auto mb-4"
        />

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Editar portadas
        </h2>
        <p className="text-sm text-center text-blue-600 mb-8">
          Portadas actuales: {banners.length}/6
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {banners.map((banner) => (
            <div key={banner.id} className="relative flex flex-col">
              <p className="text-black text-sm font-medium mb-1">
                {banner.label}
              </p>
              <div className="relative">
                <Image
                  src={banner.src}
                  alt={banner.label}
                  width={200}
                  height={92}
                  className="rounded object-cover"
                />
                <BiPencil
                  size={18}
                  className="absolute bottom-2 right-2 text-white"
                  title="Editar portada"
                />
              </div>
            </div>
          ))}

          {/* Portada 6 vacía */}
          <div className="flex flex-col">
            <p className="text-black text-sm font-medium mb-1">Portada 6</p>
            <div className="w-[200px] h-[92px] bg-[#878787] flex items-center justify-center rounded">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <FaPlus className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center pt-4 gap-2 text-[#232527] font-['Roboto'] text-[16px] leading-[20px] font-normal">
          <PiInfo className="w-8 h-8 shrink-0 mt-[2px]" />
          <div>
            <p>Podés subir hasta 6 fotos.</p>
            <p>
              Esto nos ayuda a mantener la página liviana, rápida y ordenada
              para quienes la visitan. Elegí las imágenes que mejor representen
              lo que querés comunicar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
