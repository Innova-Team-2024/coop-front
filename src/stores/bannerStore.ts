import { create } from "zustand";

interface Banner {
  id: string;
  title: string;
  description: string;
  footer: string;
  label?: string
  fileUrl: string[];
}

interface BannerState {
  banners: Banner[]; 
  setBanners: (banners: Banner[]) => void; 
  loadBannersFromLocalStorage: () => void;
}

export const useBannerStore = create<BannerState>((set: (partial: Partial<BannerState>) => void) => ({
    banners: [],

    setBanners: (banners: Banner[]): void => {
        set({ banners });
        localStorage.setItem("banners", JSON.stringify(banners));
    },

    loadBannersFromLocalStorage: (): void => {
        const storedBanners: string | null = localStorage.getItem("banners");
        if (storedBanners) {
            set({ banners: JSON.parse(storedBanners) as Banner[] });
        }
    },
}));
