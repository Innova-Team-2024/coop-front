"use client";

import {
  useRef,
  useLayoutEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { motion } from "framer-motion";
import { TabItem } from "@/components";

type Tab<T extends string> = {
  id: T;
  label: string;
};

interface AnimatedTabsProps<T extends string> {
  tabs: Tab<T>[];
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
  className?: string;
}

export default function AnimatedTabs<T extends string>({
  tabs,
  value,
  onChange,
  className = "",
}: AnimatedTabsProps<T>) {
  const tabRefs = useRef<Record<T, HTMLButtonElement | null>>(
    {} as Record<T, HTMLButtonElement | null>,
  );
  const [indicator, setIndicator] = useState({
    width: 0,
    x: 0,
  });

  useLayoutEffect(() => {
    const activeEl = tabRefs.current[value];
    const container = activeEl?.parentElement;

    if (!activeEl || !container) return;

    const elRect = activeEl.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();

    setIndicator({
      width: elRect.width,
      x: elRect.left - parentRect.left,
    });
  }, [value]);

  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(val) => val && onChange(val as SetStateAction<T>)}
      className={`relative flex justify-between gap-2 p-1 rounded-full border shadow-sm bg-white ${className}`}
    >
      {/* Indicador animado */}
      <motion.div
        className="absolute inset-0 rounded-full z-0 pointer-events-none"
        animate={{
          width: indicator.width,
          x: indicator.x,
          filter: ["blur(6px)", "blur(4px)"],
        }}
        transition={{
          x: { type: "spring", stiffness: 320, damping: 30 },
          width: { type: "spring", stiffness: 320, damping: 30 },
          filter: { duration: 0.25, ease: "easeOut" },
        }}
        style={{
          background:
            "linear-gradient(270deg, rgba(0,170,255,0.64) 0.67%, rgba(85,64,167,0.44) 21.34%, rgba(255,76,255,0.44) 41.96%, rgba(255,63,99,0.44) 62.45%, rgba(255,102,0,0.44) 99%)",
          opacity: 0.85,
        }}
      />

      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          ref={(el) => {
            tabRefs.current[tab.id] = el;
          }}
          value={tab.id}
          label={tab.label}
          isActive={value === tab.id}
        />
      ))}
    </ToggleGroup.Root>
  );
}
