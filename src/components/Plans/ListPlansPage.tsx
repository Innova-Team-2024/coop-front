"use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { PlanCard, ScrollInfoButton, TabItem } from "@/components";

import { ListaPreciosWifi } from "@/data/listaPrecioWifi";
import { ListaPreciosTV } from "@/data/listaPrecioTv";
import { ListaPreciosTel } from "@/data/listaPrecioTel";
/* import { motion, AnimatePresence } from "framer-motion"; */

export default function Service() {
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

        {/* <div className="md:px-20 mb-8">
          <AnimatePresence mode="wait">
            {activeTab === "tecnologicos" && (
              <motion.div
                key="tecnologicos"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={tecnologiesServices} />
              </motion.div>
            )}

            {activeTab === "educacion" && (
              <motion.div
                key="educacion"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={educationServices} />
              </motion.div>
            )}

            {activeTab === "sociales" && (
              <motion.div
                key="sociales"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ListServices items={socialServices} />
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
        <div className="md:px-20 mb-8">
          {activeTab === "wifi" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosWifi.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PlanCard plan={plan} variant="desktop" />
                </div>
              ))}
            </div>
          )}
          {activeTab === "iptv" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosTV.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PlanCard plan={plan} variant="desktop" />
                </div>
              ))}
            </div>
          )}
          {activeTab === "voip" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-end">
              {ListaPreciosTel.map((plan, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <PlanCard plan={plan} variant="desktop" />
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
