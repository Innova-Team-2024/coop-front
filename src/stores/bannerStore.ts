import { create } from "zustand";

interface Banner {
  id: string;
  title?: string;
  description?: string;
  footer?: string;
  fileUrl?: string[];
}

interface BannerState {
  banners: Banner[];
  setBanners: (banners: Banner[]) => void;
  loadBannersFromLocalStorage: () => void;

  fetchBanners: () => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: (value: boolean) => void;

  actionLoading: boolean;
  setActionLoading: (value: boolean) => void;
}

export const useBannerStore = create<BannerState>((set) => ({
  banners: [],
  setBanners: (banners) => set({ banners }),
  loadBannersFromLocalStorage: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("banners");
      if (stored) set({ banners: JSON.parse(stored) });
    }
  },

 fetchBanners: async () => {
  set({ globalLoading: true });
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner`);
    const data: Banner[] = await res.json();

    set({ banners: data });
    if (typeof window !== "undefined") {
      localStorage.setItem("banners", JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error fetching banners:", error);
  } finally {
    set({ globalLoading: false });
  }
},


  globalLoading: false,
  setGlobalLoading: (value) => set({ globalLoading: value }),

  actionLoading: false,
  setActionLoading: (value) => set({ actionLoading: value }),
}));
