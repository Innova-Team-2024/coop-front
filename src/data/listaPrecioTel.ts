import React from "react";
import { Plan } from "@/types/plan";
import { FaWifi, FaPhoneAlt } from "react-icons/fa";
/* 
planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 17269, 19056, false],
      ["30 Megas", 19363, 21383, false],
      ["40 Megas", 22960, 25379, false],
      ["50 Megas", 24016, 26553, false],
      ["100 Megas", 29267, 32388, false], 
      ["200 Megas", 38835, 43019, false],
      ["300 Megas", 41950, 46480, false],
    ], */

export const ListaPreciosTel: Plan[] = [
  {
    title: "20 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 20 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 17.269",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 19.056",
    recommended: false,
  },
  {
    title: "30 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 30 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 19.383",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 21.383",
    recommended: false,
  },
  {
    title: "40 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 40 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 22.960",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 25.379",
    recommended: false,
  },
  {
    title: "50 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 50 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 24.016",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 26.553",
    recommended: false,
  },
  {
    title: "100 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 100 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 29.267",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 32.388",
    recommended: false,
  },
  {
    title: "200 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 200 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 38.835",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 43.019",
    recommended: false,
  },
  {
    title: "300 MB + TELEFONÍA",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 300 MB" },
      { icon: React.createElement(FaPhoneAlt), text: "LINEA FIJA" },
    ],
    price: "$ 41.950",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 46.480",
    recommended: false,
  },
];
