import React from "react";
import { FaWifi } from "react-icons/fa";
import { Plan } from "@/types/plan.js";

export const ListaPreciosWifi: Plan[] = [
  {
    title: "WIFI 20 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 20 MB" }],
    price: "$ 17.252",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 15.650",
    recommended: false,
  },
  {
    title: "WIFI 30 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 30 MB" }],
    price: "$ 19.695",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 17.849",
    recommended: false,
  },
  {
    title: "WIFI 40 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 40 MB" }],
    price: "$ 23.891",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 21.626",
    recommended: false,
  },
  {
    title: "WIFI 50 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 50 MB" }],
    price: "$ 25.124",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 22.735",
    recommended: false,
  },
  {
    title: "WIFI 100 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 100 MB" }],
    price: "$ 31.250",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 28.248",
    recommended: false,
  },
  {
    title: "WIFI 200 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 200 MB" }],
    price: "$ 42.413",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 38.295",
    recommended: false,
  },

  {
    title: "WIFI 300 MB",
    features: [{ icon: React.createElement(FaWifi), text: "FIBRA 300 MB" }],
    price: "$ 46.046",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 41.565",
    recommended: false,
  },
];
