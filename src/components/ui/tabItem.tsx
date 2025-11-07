// ToggleItem.tsx
import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface TabItemProps {
  value: string;
  label: string;
  isActive: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ value, label, isActive }) => {
  return (
    <ToggleGroup.Item
      value={value}
      className="relative flex-1 outline-none max-w-48"
    >
      {/* Capa de gradiente con blur - solo visible cuando está activo */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-full shadow-sm"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,170,255,0.64) 0.67%, rgba(85,64,167,0.44) 21.34%, rgba(255,76,255,0.44) 41.96%, rgba(255,63,99,0.44) 62.45%, rgba(255,102,0,0.44) 99.33%)",
            filter: "blur(4px)",
            opacity: 0.8,
            zIndex: 0,
          }}
        />
      )}

      {/* Contenido del botón - siempre visible */}
      <div
        className={`relative w-full h-full rounded-full flex items-center justify-center bg-white transition-all px-4 py-2 z-10 ${
          isActive ? "text-black font-medium m-px" : "text-gray-500 font-normal"
        }`}
      >
        <span className="text-xs sm:text-sm">{label}</span>
      </div>
    </ToggleGroup.Item>
  );
};

export default TabItem;
