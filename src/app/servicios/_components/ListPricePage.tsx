/* "use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ScrollInfoButton, TabItem } from "@/components";

import { FaWifi, FaPhoneAlt, FaTv } from "react-icons/fa";
import type { Plan } from "@/types/plan";

import PricesCard from "@/components/Cards/PricesCard";

export default function ListPricePage() {
  const [activeTab, setActiveTab] = useState("wifi");

  const tabs = [
    { id: "wifi", label: "Internet" },
    { id: "iptv", label: "Televisión" },
    { id: "voip", label: "Telefonía" },
  ];
 */
// Definir planes por categoría
/* const plansByTab = {
    wifi: [
      {
        title: "300 MB",
        features: [
          { icon: <FaWifi />, text: "FIBRA 300 MB" },
          { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        ],
        price: "$ 43.854",
        // ... resto de propiedades
      },
      // ... más planes de wifi
    ],
    iptv: [
      // planes específicos de TV
    ],
    voip: [
      // planes específicos de telefonía
    ],
  }; */

// Obtener planes de la tab activa
/*   const currentPlans = plansByTab[activeTab] || [];

  return (
    <section className="w-full min-h-screen pb-16 px-6 text-center flex flex-col justify-center items-center">
      <div className="mt-10 w-full">
        <ToggleGroup.Root
          type="single"
          value={activeTab}
          onValueChange={(value) => {
            if (value) setActiveTab(value);
          }}
          className="flex justify-between gap-2 p-0 rounded-full border mx-auto mb-14 shadow-sm bg-white w-fit sm:w-[495px]"
        >
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              value={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
            />
          ))}
        </ToggleGroup.Root>
 */
{
  /* Un solo bloque de renderizado */
}
{
  /*         <div className="md:px-20 mb-8">
          <div className="md:grid grid-cols-1 lg:flex gap-6 justify-center items-end">
            {currentPlans.map((plan, idx) => (
              <div
                key={idx}
                className="w-full flex justify-center
                          [&:nth-child(n+2)]:mt-10
                          md:[&:nth-child(n+2)]:mt-15
                          lg:mt-0"
              >
                <PricesCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ScrollInfoButton />
      </div>
    </section>
  );
} */
}
