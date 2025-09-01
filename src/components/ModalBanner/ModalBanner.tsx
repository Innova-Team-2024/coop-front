/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { PiInfo } from "react-icons/pi";
import { HiOutlineTrash } from "react-icons/hi2";
import { RiErrorWarningLine } from "react-icons/ri";
import { useBannerStore } from "@/stores/bannerStore";
import { Portada } from "@/public";
import { AiOutlineLoading } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import BannerCarrousel from "../BannerCarrousel/BannerCarrousel";

type Banner = {
  id: string;
  title?: string;
  description?: string;
  footer?: string;
  fileUrl?: string[];
};

interface ModalBannerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ModalBanner = ({ isOpen, onClose, onSuccess }: ModalBannerProps) => {
  const { banners, fetchBanners, setGlobalLoading } = useBannerStore();
  const [selectedBannerId, setSelectedBannerId] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bannerToDelete, setBannerToDelete] = useState<string | null>(null);

  const getImageUrl = (url: string) => {
    return url.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_UPLOADS_URL}/${url}`;
  };

  const reloadAndClose = async () => {
    setGlobalLoading(true);
    try {
      await fetchBanners();
    } catch (err) {
      console.error("Error al recargar banners:", err);
      toastr.error("Error al recargar banners");
    } finally {
      setSelectedBannerId(null);
      setIsCreating(false);
      setShowDeleteModal(false);
      setBannerToDelete(null);
      setGlobalLoading(false);
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBanners().then(() => {
        const imageUrls = banners
          .filter((b: Banner) => (b.fileUrl ?? []).length > 0)
          .map((b: Banner) => getImageUrl(b.fileUrl![0]));

        if (imageUrls.length === 0) {
          setTimeout(() => setImagesLoaded(true), 2000);
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
          ).then(() => setTimeout(() => setImagesLoaded(true), 2000));
        }
      });
    }
  }, [isOpen, fetchBanners, banners]);

  const handleDelete = async () => {
    if (!bannerToDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/banner/${bannerToDelete}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Error al eliminar portada");

      toastr.success("La portada se eliminó correctamente.");
      await reloadAndClose();
    } catch (err) {
      console.error(err);
      toastr.error("Ocurrió un error al eliminar la portada.");
      await reloadAndClose();
    } finally {
      setShowDeleteModal(false);
      setBannerToDelete(null);
    }
  };

  if (!isOpen) return null;

  const initialSlideIndex = isCreating
    ? banners.length
    : banners.findIndex((b) => b.id === selectedBannerId);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div
        className="
    bg-white 
    w-full 
    max-w-full 
    md:max-w-3xl 
    rounded-[20px] 
    p-6 
    relative 
    shadow-lg
    h-auto    
    sm:[80vh] md:h-auto lg:h-auto xl:h-auto 2xl:h-auto
    overflow-y-auto    
    md:overflow-y-hidden
    scrollbar-hide
  "
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors z-50"
        >
          <IoClose size={28} />
        </button>

        {/* Ícono */}
        <Image
          src={Portada}
          alt="Imagen decorativa de portada"
          width={46}
          height={46}
          className="mx-auto mb-3"
        />

        {/* Título */}
        <h2 className="text-[22px] font-semibold mb-6 text-center text-[#232527]">
          Editar portadas
        </h2>

        {/* Alerta límite */}
        {banners.length === 6 && selectedBannerId === null && (
          <div className="flex items-center gap-2 text-[#B42318] font-medium mb-6 justify-center text-sm">
            <RiErrorWarningLine size={20} />
            <p>
              Ya alcanzaste el máximo de imágenes. Para subir una nueva, eliminá
              una anterior.
            </p>
          </div>
        )}

        {/* Loader */}
        {!selectedBannerId && !imagesLoaded ? (
          <div className="flex justify-center items-center h-40 md:h-44 w-full">
            <AiOutlineLoading className="animate-spin text-[#005AAA] text-3xl" />
          </div>
        ) : (selectedBannerId !== null || isCreating) && banners.length > 0 ? (
          <BannerCarrousel
            key={selectedBannerId ?? "new-banner"}
            initialSlideIndex={initialSlideIndex}
            onExit={reloadAndClose}
            onCancelForm={() => {
              setSelectedBannerId(null);
              setIsCreating(false);
            }}
            onSuccess={reloadAndClose}
            isCreating={isCreating}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mx-auto place-items-center mb-8">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="flex flex-col group cursor-pointer w-full"
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <p className="text-[#232527] text-sm font-medium">
                    Portada {index + 1}
                  </p>
                  {banners.length === 6 && (
                    <HiOutlineTrash
                      size={18}
                      className="text-gray-700 hover:text-red-500 cursor-pointer"
                      title="Eliminar portada"
                      onClick={(e) => {
                        e.stopPropagation();
                        setBannerToDelete(banner.id);
                        setShowDeleteModal(true);
                      }}
                    />
                  )}
                </div>
                <div
                  className="relative w-full h-28 sm:h-32 md:h-28 rounded-xl overflow-hidden group-hover:brightness-50 transition-all duration-300"
                  onClick={() => {
                    setSelectedBannerId(banner.id);
                    setIsCreating(false);
                  }}
                >
                  {banner.fileUrl?.length ? (
                    <>
                      <Image
                        src={getImageUrl(banner.fileUrl[0])}
                        alt={`Portada ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <BiPencil
                        size={20}
                        className="absolute bottom-2 right-2 text-white z-10"
                        title="Editar portada"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#878787] flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                        <FaPlus className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {banners.length < 6 && (
              <div
                className="flex flex-col group cursor-pointer w-full"
                onClick={() => {
                  setSelectedBannerId(null);
                  setIsCreating(true);
                }}
              >
                <p className="text-[#232527] text-sm font-medium mb-1">
                  Portada {banners.length + 1}
                </p>
                <div className="relative w-full h-28 sm:h-32 md:h-28 bg-[#878787] flex items-center justify-center rounded-xl overflow-hidden group-hover:brightness-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                    <FaPlus className="text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Footer */}
        {!selectedBannerId && !isCreating && imagesLoaded && (
          <div className="flex flex-col sm:flex-row justify-center items-start gap-3 px-2 pb-4 pt-6 w-full text-[#232527] font-['Roboto'] text-sm leading-5">
            <PiInfo className="w-6 h-6 shrink-0 mt-1 text-[#232527]" />
            <div>
              <p className="font-medium">Podés subir hasta 6 fotos.</p>
              <p className="text-[#565E64]">
                Esto nos ayuda a mantener la página liviana, rápida y ordenada
                para quienes la visitan. Elegí las imágenes que mejor
                representen lo que querés comunicar.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modal Confirmación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 overflow-auto">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Eliminar portada
            </h2>
            <p className="text-gray-700 text-sm mb-6">
              Se removerán los elementos incluyendo el texto.
              <br />
              ¿Estás seguro?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleDelete}
                className="bg-black text-white px-6 py-2 rounded-full transition-colors"
              >
                Eliminar portada
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="border shadow-sm text-gray-900 font-medium px-6 py-2 rounded-full transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ModalBanner;
