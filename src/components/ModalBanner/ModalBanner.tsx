/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { PiInfo } from "react-icons/pi";
import { useBannerStore } from "@/stores/bannerStore";
import { Portada } from "@/public";
import BannerCarousel from "../BannerCarrousel/BannerCarrouse";
import { AiOutlineLoading } from "react-icons/ai";
import { fetchGetBanners } from "@/apis/bannerService";

interface ModalBannerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface Banner {
  id: string;
  title?: string;
  description?: string;
  footer?: string;
  fileUrl?: string[];
}

const ModalBanner = ({ isOpen, onClose, onSuccess }: ModalBannerProps) => {
  const { banners, setBanners } = useBannerStore((state) => state);
  const [_, setIsHydrated] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleClose = async () => {
    try {
      const freshBanners = await fetchGetBanners();
      setBanners(freshBanners);
      localStorage.setItem("banners", JSON.stringify(freshBanners));
    } catch (error) {
      console.error("Error al recargar banners:", error);
    } finally {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const storedBanners = localStorage.getItem("banners");
      if (storedBanners) {
        const parsed = JSON.parse(storedBanners);
        setBanners(parsed);

        const imageUrls = parsed
          .filter((b: { fileUrl?: string[] }) => (b.fileUrl ?? []).length > 0)
          .map(
            (b: { fileUrl: string[] }) =>
              `http://localhost:3000/uploads/banners/${b.fileUrl[0]}`
          );

        if (imageUrls.length === 0) {
          setTimeout(() => {
            setImagesLoaded(true);
          }, 2000);
        } else {
          Promise.all(
            imageUrls.map(
              (url: string) =>
                new Promise((resolve) => {
                  const img = new window.Image();
                  img.src = url;
                  img.onload = resolve;
                  img.onerror = resolve;
                })
            )
          ).then(() => {
            setTimeout(() => {
              setImagesLoaded(true);
            }, 2000);
          });
        }
      }
      setIsHydrated(true);
    }
  }, [isOpen, setBanners]);

  if (!isOpen) return null;

  const initialSlideIndex = isCreating
    ? banners.length
    : banners.findIndex((b) => b.id === selectedBannerId);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-[900px] rounded-md p-6 relative">
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

        {!selectedBannerId && (
          <p className="text-sm text-center text-[#005AAA] mb-8">
            Portadas actuales: {banners.length}/6
          </p>
        )}

        {!selectedBannerId && !imagesLoaded ? (
          <div className="flex justify-center items-center h-[160px]">
            <AiOutlineLoading className="animate-spin text-[#005AAA] text-3xl" />
          </div>
        ) : (selectedBannerId !== null || isCreating) && banners.length > 0 ? (
          <BannerCarousel
            key={selectedBannerId ?? "new-banner"}
            initialSlideIndex={initialSlideIndex}
            onExit={() => {
              setSelectedBannerId(null);
              setIsCreating(false);
              handleClose();
            }}
            onSuccess={() => {
              const updated = localStorage.getItem("banners");
              if (updated) {
                setBanners(JSON.parse(updated));
                setIsCreating(false);
                setSelectedBannerId(null);
                handleClose();
              }
            }}
            isCreating={isCreating}
          />
        ) : (
          <div className="grid grid-cols-3 gap-6 w-fit mx-auto place-items-center mb-6">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => {
                  setSelectedBannerId(banner.id);
                  setIsCreating(false);
                }}
              >
                <p className="text-black text-sm font-medium mb-1 text-center">
                  Portada {index + 1}
                </p>
                <div className="relative w-[200px] h-[92px] rounded overflow-hidden group-hover:brightness-50 transition-all duration-300">
                  {banner.fileUrl?.length > 0 ? (
                    <>
                      <Image
                        src={`http://localhost:3000/uploads/banners/${banner.fileUrl[0]}`}
                        alt={`Portada {index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <BiPencil
                        size={18}
                        className="absolute bottom-2 right-2 text-white z-10"
                        title="Editar portada"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#878787] flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                        <FaPlus className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {banners.length < 6 && (
              <div
                className="flex flex-col group cursor-pointer"
                onClick={() => {
                  setSelectedBannerId(null);
                  setIsCreating(true);
                }}
              >
                <p className="text-black text-sm font-medium mb-1 text-center">
                  Portada {banners.length + 1}
                </p>
                <div className="relative w-[200px] h-[92px] bg-[#878787] flex items-center justify-center rounded overflow-hidden group-hover:brightness-50 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <FaPlus className="text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {!selectedBannerId  && !isCreating && imagesLoaded && (
          <div className="flex justify-center items-start gap-2 p-2 px-24 mb-4 pt-6 w-full text-[#232527] font-['Roboto'] text-[16px] leading-[20px] font-normal">
            <PiInfo className="w-8 h-8 shrink-0 mt-[2px]" />
            <div>
              <p>Podés subir hasta 6 fotos.</p>
              <p>
                Esto nos ayuda a mantener la página liviana, rápida y ordenada
                para quienes la visitan. Elegí las imágenes que mejor
                representen lo que querés comunicar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalBanner;
