// components/PrimaryButton.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * SecondaryButton - Botón con borde de degradado difuminado y estilo moderno
 *
 * El borde con degradado difuminado aparece suavemente con una animación al hacer hover,
 * creando un efecto de brillo alrededor del botón
 *
 * @example
 * // Botón básico
 * <SecondaryButton onClick={handleClick}>Enviar</SecondaryButton>
 *
 * // Botón con ícono
 * <SecondaryButton icon={<IconoEnviar />}>Enviar Mensaje</SecondaryButton>
 *
 * // Botón de tipo "submit" para formularios
 * <SecondaryButton type="submit">Guardar</SecondaryButton>
 *
 * // Con clases personalizadas
 * <SecondaryButton className="mt-4 w-full">Botón con margen</SecondaryButton>
 *
 * // Diferentes niveles de redondeo
 * <SecondaryButton rounded="none">Sin bordes redondeados</SecondaryButton>
 * <SecondaryButton rounded="sm">Poco redondeado</SecondaryButton>
 * <SecondaryButton rounded="full">Totalmente redondeado</SecondaryButton>
 *
 * // Diferentes tamaños
 * <SecondaryButton size="sm">Botón pequeño</SecondaryButton>
 * <SecondaryButton size="md">Botón mediano (por defecto)</SecondaryButton>
 * <SecondaryButton size="lg">Botón grande</SecondaryButton>
 */
interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Contenido del botón (texto)
  icon?: ReactNode; // Ícono opcional que aparece junto al texto
  size?: "sm" | "md" | "lg" | "full"; // Tamaño del botón: sm (pequeño), md (mediano), lg (grande)
  className?: string; // Clases adicionales para personalizar el contenedor exterior
  type?: "button" | "submit" | "reset"; // Tipo de botón HTML
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "full"; // Nivel de redondeo de esquinas
}

export default function SecondaryButton({
  children,
  icon,
  size = "md",
  className = "",
  type = "button",
  rounded = "lg",
  ...props
}: SecondaryButtonProps) {
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
        return `before:rounded-full`;
    }
  };

  const roundedBefore = getRoundedClass();
  const roundedStyles =
    rounded === "none" ? "rounded-none" : `rounded-${rounded}`;

  return (
    <div
      className={`inline-block ${roundedStyles} p-[2px] relative before:absolute before:-inset-[0.5px] ${roundedBefore} before:bg-gradient-to-r before:from-[#FF6600]/60 before:via-[#FF4CFF]/60 before:to-[#00AAFF]/60 before:opacity-0 hover:before:opacity-80 before:transition-opacity before:duration-300 before:ease-in-out before:blur-[1.5px] ${className}`}
    >
      <button
        type={type}
        {...props}
        className={`
          relative z-10 w-full ${roundedStyles} bg-white
          border border-[#E4E4E4] shadow-cta-shadow 
          text-[#1C1F23] transition-all font-medium leading-6
          duration-200 
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
