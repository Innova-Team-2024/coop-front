// components/PrimaryButton.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * GreenButton - Botón simple y verde
 *
 * @example
 * // Botón básico
 * <PrimaryButton onClick={handleClick}>Enviar</PrimaryButton>
 *
 * // Botón con ícono
 * <PrimaryButton icon={<IconoEnviar />}>Enviar Mensaje</PrimaryButton>
 *
 * // Botón de tipo "submit" para formularios
 * <PrimaryButton type="submit">Guardar</PrimaryButton>
 *
 * // Con clases personalizadas
 * <PrimaryButton className="mt-4 w-full">Botón con margen</PrimaryButton>
 *
 * // Diferentes niveles de redondeo
 * <PrimaryButton rounded="none">Sin bordes redondeados</PrimaryButton>
 * <PrimaryButton rounded="sm">Poco redondeado</PrimaryButton>
 * <PrimaryButton rounded="full">Totalmente redondeado</PrimaryButton>
 *
 * // Diferentes tamaños
 * <PrimaryButton size="sm">Botón pequeño</PrimaryButton>
 * <PrimaryButton size="md">Botón mediano (por defecto)</PrimaryButton>
 * <PrimaryButton size="lg">Botón grande</PrimaryButton>
 */
interface GreenButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Contenido del botón (texto)
  icon?: ReactNode; // Ícono opcional que aparece junto al texto
  size?: "sm" | "md" | "lg" | "default"; // Tamaño del botón: sm (pequeño), md (mediano), lg (grande), default toma todos los tamaños.
  className?: string; // Clases adicionales para personalizar el contenedor exterior
  type?: "button" | "submit" | "reset"; // Tipo de botón HTML
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "full"; // Nivel de redondeo de esquinas
}

export default function GreenButton({
  children,
  icon,
  size = "md",
  className = "",
  type = "button",
  rounded = "lg",
  ...props
}: GreenButtonProps) {
  // Configuración de estilos según el tamaño seleccionado
  const sizeStyles =
    size === "sm"
      ? "px-4 py-2 text-sm font-semibold"
      : size === "lg"
      ? "px-6 py-3 text-lg font-bold"
      : size === "default"
      ? "px-4 py-2 text-sm font-semibold md:px-5 md:py-3 md:text-base md:font-semibold lg:px-6 lg:py-3 lg:text-lg lg:font-bold"
      : "px-5 py-3 text-base font-semibold";

  // Configuración del nivel de redondeo
  const roundedStyles =
    rounded === "none" ? "rounded-none" : `rounded-${rounded}`;

  return (
    <button
      type={type}
      {...props}
      className={`
          ${roundedStyles} bg-[#039140]
          hover:bg-[#097237]
          text-white transition-all
          duration-200 active:bg-[#095E30]
          disabled:bg-[#87c5a2] gap-2
          ${sizeStyles} ${className}
        `}
    >
      {children}
      {icon}
    </button>
  );
}
