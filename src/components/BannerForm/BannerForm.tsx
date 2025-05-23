"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import portadaEstatica from "../../public/Portada6.png";

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
  onClose,
  isNew = false,
}: BannerFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [footer, setFooter] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const formId = isNew ? "banner-form-new" : `banner-form-${selectedBannerId}`;

  useEffect(() => {
    onFormReady?.(formId);

    if (isNew) {
      // Para la portada 6, mostramos imagen estática y limpiamos campos
      setTitle("");
      setDescription("");
      setFooter("");
      setPreviewImage(portadaEstatica.src);
      setSelectedFile(null);
    } else {
      // Carga banner normal desde localStorage
      const stored = localStorage.getItem("banners");
      if (stored) {
        const banners: Banner[] = JSON.parse(stored);
        const banner = banners.find((b) => b.id === selectedBannerId);
        if (banner) {
          setTitle(banner.title || "");
          setDescription(banner.description || "");
          setFooter(banner.footer || "");
          if (banner.fileUrl?.[0]) {
            setPreviewImage(
              `http://localhost:3000/uploads/banners/${banner.fileUrl[0]}`
            );
          } else {
            setPreviewImage(null);
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
    if (loading) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("footer", footer);
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      const url = isNew
        ? `http://localhost:3000/banner`
        : `http://localhost:3000/banner/${selectedBannerId}`;
      const method = isNew ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al guardar el banner");
      }

      onSuccess();
      toastr.success(
        isNew
          ? "La portada se creó correctamente."
          : "La portada se actualizó correctamente."
      );

      onClose?.();

      if (!isNew) {
        const stored = localStorage.getItem("banners");
        if (stored) {
          const banners: Banner[] = JSON.parse(stored);
          const updatedBanners = banners.map((b) => {
            if (b.id === selectedBannerId) {
              return {
                ...b,
                title,
                description,
                footer,
                fileUrl: selectedFile ? [selectedFile.name] : b.fileUrl,
              };
            }
            return b;
          });

          localStorage.setItem("banners", JSON.stringify(updatedBanners));
        }
      }

      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
          setSelectedFile(null);
        };
        reader.readAsDataURL(selectedFile);
      }
    } catch (error) {
      console.error("Error al guardar:", error);
      toastr.error("Error al guardar el banner.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} className="p-4 w-full">
      <h2 className="text-xl font-bold mb-2 pl-8">{headerTitle}</h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-start gap-[6px] pl-8 w-full md:w-1/2">
          <p className="text-sm">Tamaño recomendado: 1440x668</p>
          <Image
            src={previewImage || "/image.png"}
            alt="Preview"
            width={300}
            height={140}
            className="w-[240px] h-[110.4px] object-cover"
            unoptimized
          />
          <label className="underline text-[14px] text-[#005194] cursor-pointer">
            Subir imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="w-full md:w-1/2 md:ml-4 relative bottom-8 md:mt-0 space-y-2 pl-6 mr-24">
          <div>
            <label className="block text-sm font-medium mb-2 ml-4">Título - H1</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[407.5px] rounded-[24px] border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2 mb-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 ml-4">Subtítulo - H2</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[407.5px] rounded-[24px] border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2 mb-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 ml-4">Texto - H3</label>
            <textarea
              value={footer}
              onChange={(e) => setFooter(e.target.value)}
              className="w-[407.5px] h-[100px] rounded-[24px] border border-[#AAB2B6] bg-[#EEF1FE] px-4 py-2 mb-2"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BannerForm;
