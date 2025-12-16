"use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ScrollInfoButton, TabItem } from "@/components";

import { ListaPreciosWifi } from "@/data/listaPrecioWifi";
import { ListaPreciosTV } from "@/data/listaPrecioTv";
import { ListaPreciosTel } from "@/data/listaPrecioTel";
import PricesCard from "@/components/Cards/PricesCard";

export default function ListPlansPage() {
  const [activeTab, setActiveTab] = useState("wifi");

  const tabs = [
    { id: "wifi", label: "Internet" },
    { id: "iptv", label: "Televisión" },
    { id: "voip", label: "Telefonía" },
  ];

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

        <div className="md:px-20 mb-8">
          {activeTab === "wifi" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosWifi.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PricesCard plan={plan} />
                </div>
              ))}
            </div>
          )}
          {activeTab === "iptv" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosTV.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PricesCard plan={plan} />
                </div>
              ))}
            </div>
          )}
          {activeTab === "voip" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosTel.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PricesCard plan={plan} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <ScrollInfoButton />
      </div>
    </section>
  );
}
