// components/PrimaryButton.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function PrimaryButton({
  children,
  icon,
  size = "md",
  className = "",
  type = "button",
  rounded = "lg",
  ...props
}: PrimaryButtonProps) {
  const sizeStyles =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-5 py-3 text-base";

  const getRoundedClass = () => {
    switch (rounded) {
      case "none":
        return "before:rounded-none";
      case "md":
        return "before:rounded-md";
      case "lg":
        return "before:rounded-lg";
      case "xl":
        return "before:rounded-xl";
      case "2xl":
        return "before:rounded-2xl";
      case "full":
        return "before:rounded-full";
      default:
        return "before:rounded-lg";
    }
  };

  const roundedBefore = getRoundedClass();
  const roundedStyles =
    rounded === "none" ? "rounded-none" : `rounded-${rounded}`;

  return (
    <div
      className={`
        inline-block relative p-[2px] ${roundedStyles}
        before:absolute before:-inset-[1px] ${roundedBefore}
        before:bg-gradient-to-r
        before:from-[#FF6600]/70
        before:via-[#FF4CFF]/70
        before:to-[#00AAFF]/70
        before:opacity-0
        before:blur-[3px]
        before:scale-95
        before:transition-all
        before:duration-500
        before:ease-out
        hover:before:opacity-100
        hover:before:scale-100
        hover:before:blur-[4.5px]
        ${className}
      `}
    >
      <button
        type={type}
        {...props}
        className={`
          relative z-10 w-full ${roundedStyles}
          bg-[#1C1F23]
          text-white font-medium leading-6
          flex items-center justify-center gap-2
          transition-[box-shadow,background-color]
          duration-300
          ease-out
          hover:shadow-[0_6px_18px_rgba(0,0,0,0.35)]
          active:shadow-[0_6px_18px_rgba(0,0,0,0.5)]
          active:bg-[#2A2E34]
          ${sizeStyles}
        `}
      >
        {children}
        {icon}
      </button>
    </div>
  );
}
