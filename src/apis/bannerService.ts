// services/bannerService.ts
import { BannerItem } from "../types/bannerItem";

export const fetchGetBanners = async (): Promise<BannerItem[]> => {
  const res = await fetch("http://localhost:3000/banner", {
    cache: "no-store", // evita cacheo en dev
  });

  if (!res.ok) {
    throw new Error("Error al obtener los banners");
  }

  return res.json();
};
