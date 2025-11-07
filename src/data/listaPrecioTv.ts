import React from "react";
import { Plan } from "@/types/plan";
import { FaWifi, FaTv } from "react-icons/fa";
/* 
planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 30403, 31928, false],
      ["30 Megas", 32497, 34255, false],
      ["40 Megas", 36094, 38251, false],
      ["50 Megas", 37150, 39425, false],
      ["100 Megas", 42401, 45260, false], 
      ["200 Megas", 51969, 55891, false],
      ["300 Megas", 55084, 59352, false],
    ], */

export const ListaPreciosTV: Plan[] = [
  {
    title: "20 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 20 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 31.928",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 30.403",
    recommended: false,
  },
  {
    title: "30 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 30 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 34.255",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 32.497",
    recommended: false,
  },
  {
    title: "40 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 40 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 38.251",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 36.094",
    recommended: false,
  },
  {
    title: "50 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 50 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 39.425",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 37.150",
    recommended: false,
  },
  {
    title: "100 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 100 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 45.260",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 42.401",
    recommended: false,
  },
  {
    title: "200 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 200 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 55.891",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 51.969",
    recommended: false,
  },
  {
    title: "300 MB + TV",
    features: [
      { icon: React.createElement(FaWifi), text: "FIBRA 300 MB" },
      { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
    ],
    price: "$ 59.352",
    note: "$ 8.000 x instalación",
    memberPrice: "SOCIOS $ 55.084",
    recommended: false,
  },
];
