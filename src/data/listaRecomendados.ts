import { Plan } from "@/types/plan";
import React from "react";
import { FaWifi, FaPhoneAlt, FaTv } from "react-icons/fa";

export const recomendedPlans: Plan[] = [
    {
      title: "300 MB + TV",
      features: [
        { icon: React.createElement(FaWifi), text: "FIBRA 300 MB" },
        { icon: React.createElement(FaPhoneAlt), text: "LÍNEA FIJA" },
        { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
    {
      title: "300 MB + TV",
      features: [
        { icon: React.createElement(FaWifi), text: "FIBRA 300 MB" },
        { icon: React.createElement(FaPhoneAlt), text: "LÍNEA FIJA" },
        { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: true,
    },
    {
      title: "300 MB + TV",
      features: [
        { icon: React.createElement(FaWifi), text: "FIBRA 300 MB" },
        { icon: React.createElement(FaPhoneAlt), text: "LÍNEA FIJA" },
        { icon: React.createElement(FaTv), text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
  ];