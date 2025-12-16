import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import clsx from "clsx";

interface TabItemProps {
  value: string;
  label: string;
  isActive: boolean;
}

const TabItem = React.forwardRef<HTMLButtonElement, TabItemProps>(
  ({ value, label, isActive }, ref) => {
    return (
      <ToggleGroup.Item
        ref={ref}
        value={value}
        className={clsx(
          "relative flex-1 outline-none max-w-48 z-10 rounded-full",
          "transition-colors duration-150 ease-out",
        )}
      >
        <div
          className={clsx(
            "w-full h-full rounded-full flex items-center justify-center bg-white px-4 py-2 transition-colors duration-150 ease-out",
            isActive
              ? "text-black/80 font-medium"
              : "text-gray-500 hover:text-gray-700 hover:transform hover:scale-105 hover:bg-transparent",
          )}
        >
          <span className="text-xs sm:text-sm">{label}</span>
        </div>
      </ToggleGroup.Item>
    );
  },
);

TabItem.displayName = "TabItem";
export default TabItem;
