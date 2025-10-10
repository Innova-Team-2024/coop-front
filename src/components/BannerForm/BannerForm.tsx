"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import portadaEstatica from "../../../public/Portada6.png";
import { useBannerStore } from "@/stores/bannerStore";

interface BannerFormProps {
  selectedBannerId: string;
  onSuccess: () => void;
  onClose?: () => void;
  headerTitle: string;
  onFormReady?: (formId: string) => void;
  isNew?: boolean;
}
interface Banner {
  id: string;
  title?: string;
  description?: string;
  footer?: string;
  fileUrl?: string[];
}

const BannerForm = ({
  selectedBannerId,
  onSuccess,
  headerTitle,
  onFormReady,
  isNew = false,
}: BannerFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [footer, setFooter] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { setActionLoading, fetchBanners } = useBannerStore();
  const formId = isNew ? "banner-form-new" : `banner-form-${selectedBannerId}`;

  useEffect(() => {
    onFormReady?.(formId);

    if (isNew) {
      setTitle("");
      setDescription("");
      setFooter("");
      setPreviewImage(portadaEstatica.src);
      setSelectedFile(null);
    } else if (typeof window !== "undefined") {
      const stored = localStorage.getItem("banners");
      if (stored) {
        const banners: Banner[] = JSON.parse(stored);
        const banner = banners.find((b) => b.id === selectedBannerId);
        if (banner) {
          setTitle(banner.title || "");
          setDescription(banner.description || "");
          setFooter(banner.footer || "");
          if (banner.fileUrl?.[0]) {
            const url = banner.fileUrl[0];
            const isAbsoluteUrl =
              url.startsWith("http://") || url.startsWith("https://");
            setPreviewImage(
              isAbsoluteUrl
                ? url
                : `${process.env.NEXT_PUBLIC_UPLOADS_URL}/${url}`
            );
          } else {
            setPreviewImage(portadaEstatica.src);
          }
          setSelectedFile(null);
        }
      }
    }
  }, [selectedBannerId, onFormReady, formId, isNew]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);

    onSuccess?.();

    try {
      const method = isNew ? "POST" : "PUT";
      const url = isNew
        ? `${process.env.NEXT_PUBLIC_API_URL}/banner`
        : `${process.env.NEXT_PUBLIC_API_URL}/banner/${selectedBannerId}`;

      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("footer", footer);
      if (selectedFile) {
        data.append("file", selectedFile);
      }

      const res = await fetch(url, {
        method,
        body: data,
      });

      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result?.message || "Error al guardar portada");
      }

      await fetchBanners();

      toastr.success(
        isNew
          ? "La portada se subió correctamente."
          : "La portada se actualizó correctamente."
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error en handleSubmit:", err);
      toastr.error(err.message || "Ocurrió un error al guardar la portada.");
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} className="p-4 w-full">
      <h2 className="text-xl font-bold mb-4 px-4 md:px-8">{headerTitle}</h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Sección de imagen */}
        <div className="flex flex-col items-start gap-2 px-4 md:px-8 w-full md:w-1/2">
          <p className="text-sm">Tamaño recomendado: 1440x668</p>
          <Image
            src={previewImage || portadaEstatica.src}
            alt="Preview"
            width={300}
            height={140}
            className="w-full max-w-xs h-auto object-cover rounded"
            unoptimized
          />

          <label className="underline text-sm text-[#005194] cursor-pointer mt-2">
            Subir imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Sección de texto */}
        <div className="w-full md:w-1/2 space-y-3 px-4 md:px-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Título - H1
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-2xl border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Subtítulo - H2
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-2xl border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Texto - H3</label>
            <textarea
              value={footer}
              onChange={(e) => setFooter(e.target.value)}
              className="w-full h-24 md:h-28 rounded-2xl border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2 resize-none"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BannerForm;
