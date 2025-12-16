"use client";

import { useState, useMemo } from "react";
import { ScrollInfoButton } from "@/components";
import AnimatedTabs from "@/components/ui/animatedTabs";
import PricesCard from "@/components/Cards/PricesCard";
import { ListaPreciosWifi } from "@/data/listaPrecioWifi";
import { ListaPreciosTV } from "@/data/listaPrecioTv";
import { ListaPreciosTel } from "@/data/listaPrecioTel";
import type { Plan } from "@/types/plan";

type TabId = "wifi" | "iptv" | "voip";

interface Tab {
  id: TabId;
  label: string;
  plans: Plan[];
}

export default function OptimizedListPlans() {
  const [activeTab, setActiveTab] = useState<TabId>("wifi");

  // Configuración centralizada de tabs
  const tabs: Tab[] = useMemo(
    () => [
      { id: "wifi", label: "Internet", plans: ListaPreciosWifi },
      { id: "iptv", label: "Televisión", plans: ListaPreciosTV },
      { id: "voip", label: "Telefonía", plans: ListaPreciosTel },
    ],
    [],
  );

  // Planes activos
  const activePlans = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.plans || [],
    [activeTab, tabs],
  );

  return (
    <section className="w-full pb-16 px-6 text-center flex flex-col justify-center items-center">
      <div className="mt-10 w-full">
        {/* Tabs */}
        <AnimatedTabs
          tabs={tabs.map(({ id, label }) => ({ id, label }))}
          value={activeTab}
          onChange={setActiveTab}
          className="mx-auto mb-14 w-fit sm:w-[495px]"
        />

        {/* Plans Grid */}
        <div className="md:px-20 mb-8 flex justify-center">
          <div
            className={`grid gap-6 items-end w-full ${
              activePlans.length === 1
                ? "grid-cols-1 max-w-sm"
                : activePlans.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
            }`}
          >
            {activePlans.map((plan, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className={`flex justify-center ${
                  activePlans.length > 2 &&
                  activePlans.length % 3 === 1 &&
                  idx === activePlans.length - 1
                    ? "sm:col-start-2 lg:col-start-2"
                    : ""
                }`}
              >
                <PricesCard
                  plan={plan}
                  showPromoNote={false}
                  variant="compact"
                  link={"/soporte"}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {activePlans.length === 0 && (
            <div className="py-20 text-gray-500">
              <p className="text-lg">
                No hay planes disponibles en esta categoría
              </p>
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
