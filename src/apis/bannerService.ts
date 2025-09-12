// services/bannerService.ts
import { BannerItem } from "../types/bannerItem";

export const fetchGetBanners = async (): Promise<BannerItem[]> => {
  const res =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner`, {
    cache: "no-store", // evita cacheo en dev
  });

  if (!res.ok) {
    throw new Error("Error al obtener los banners");
  }

  return res.json();
};
