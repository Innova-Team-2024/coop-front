import type React from "react";
import Link from "next/link";

/**
 * @component Breadcrumb
 * @description Componente de navegación que muestra la ruta jerárquica actual del usuario en la aplicación.
 * Proporciona enlaces a las páginas anteriores visitadas y destaca la página actual.
 *
 * @example
 * // Ejemplo básico de uso
 * const pathItems = [
 *   { label: 'Inicio', href: '/' },
 *   { label: 'Productos', href: '/productos' },
 *   { label: 'Categoría', href: '/productos/categoria' },
 *   { label: 'Nombre del producto', href: '' }
 * ];
 *
 * <Breadcrumb items={pathItems} />
 *
 * @example
 * // Con clase personalizada
 * <Breadcrumb items={pathItems} className="my-8 bg-gray-100 p-4 rounded" />
 */

// Definimos la interfaz para cada elemento del breadcrumb
interface BreadcrumbItem {
  /** Texto a mostrar para este elemento de la ruta */
  label: string;
  /** URL a la que debe dirigir este elemento (vacío para el elemento actual) */
  href: string;
}

// Interfaz para las props del componente
interface BreadcrumbProps {
  /** Arreglo de elementos que conforman la ruta de navegación */
  items: BreadcrumbItem[];
  /** Clases CSS adicionales para personalizar el contenedor */
  className?: string;
}

/**
 * Componente que muestra una barra de navegación tipo "migas de pan".
 *
 * @param {BreadcrumbProps} props - Las propiedades del componente
 * @param {BreadcrumbItem[]} props.items - Elementos de la ruta (obligatorio)
 * @param {string} props.className - Clases CSS adicionales (opcional)
 * @returns {React.ReactElement | null} El componente Breadcrumb o null si no hay items
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
}) => {
  // Si no hay elementos que mostrar, no renderizamos nada
  if (!items || items.length === 0) return null;

  return (
    <nav className={`flex px-6 pt-12 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index} {...(isLastItem ? { "aria-current": "page" } : {})}>
              <div className="flex items-center">
                {/* Flecha separadora (excepto para el primer elemento) */}
                {index > 0 && (
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                )}

                {/* Elemento final (página actual) o elemento con enlace */}
                {isLastItem ? (
                  <span className="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
