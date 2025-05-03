// components/PrimaryButton.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * PrimaryButton - Botón con borde de degradado difuminado y estilo moderno
 *
 * El borde con degradado difuminado aparece suavemente con una animación al hacer hover,
 * creando un efecto de brillo alrededor del botón
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
interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Contenido del botón (texto)
  icon?: ReactNode; // Ícono opcional que aparece junto al texto
  size?: "sm" | "md" | "lg"; // Tamaño del botón: sm (pequeño), md (mediano), lg (grande)
  className?: string; // Clases adicionales para personalizar el contenedor exterior
  type?: "button" | "submit" | "reset"; // Tipo de botón HTML
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "full"; // Nivel de redondeo de esquinas
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
  // Configuración de estilos según el tamaño seleccionado
  const sizeStyles =
    size === "sm"
      ? "px-3 py-2 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-5 py-3 text-base";

  // Configuración del nivel de redondeo
  // Usando valores explícitos para garantizar compatibilidad con el pseudo-elemento
  const getRoundedClass = () => {
    switch (rounded) {
      case "none":
        return `before:rounded-none`;

      case "md":
        return `before:rounded-md`;
      case "lg":
        return `before:rounded-lg`;
      case "xl":
        return `before:rounded-xl`;
      case "2xl":
        return `before:rounded-2xl`;
      case "full":
        return `before:rounded-full`;
      default:
        return `before:rounded-lg`;
    }
  };

  const roundedBefore = getRoundedClass();
  const roundedStyles =
    rounded === "none" ? "rounded-none" : `rounded-${rounded}`;

  return (
    <div
      className={`inline-block ${roundedStyles} p-[2px] relative before:absolute before:-inset-[0.5px] ${roundedBefore} before:bg-gradient-to-r before:from-[#FF6600]/60 before:via-[#FF4CFF]/60 before:to-[#00AAFF]/60 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out before:blur-[1.5px] ${className}`}
    >
      <button
        type={type}
        {...props}
        className={`
          relative z-10 w-full ${roundedStyles} bg-[#1C1F23]
          text-white transition-all
          duration-200 active:bg-[#2E333A]
          flex items-center justify-center gap-2
          ${sizeStyles}
        `}
      >
        {children}
        {icon}
      </button>
    </div>
  );
}
