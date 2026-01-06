// components/CtaButton.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  rounded?: "lg" | "xl" | "2xl" | "full";
}

export default function CtaButton({
  children,
  icon,
  size = "md",
  className = "",
  type = "button",
  rounded = "2xl",
  ...props
}: CtaButtonProps) {
  const sizeStyles =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
      ? "px-7 py-4 text-lg"
      : "px-6 py-3 text-base";

  return (
    <button
      type={type}
      {...props}
      className={`
        relative inline-flex items-center justify-center gap-2
        ${sizeStyles}
        rounded-${rounded}
        bg-custom-gradient
        text-white font-semibold leading-6
        transition-[box-shadow,filter]
        duration-200
        ease-out
        hover:shadow-[0_6px_18px_rgba(255,96,0,0.35)]
        active:shadow-[0_4px_12px_rgba(255,96,0,0.45)]
        active:brightness-95
        ${className}
      `}
    >
      {children}
      {icon}
    </button>
  );
}
