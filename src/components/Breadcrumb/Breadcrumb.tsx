"use client";
import type React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * @component Breadcrumb
 * @description Componente de navegación que muestra la ruta jerárquica actual del usuario en la aplicación.
 * En dispositivos móviles, cuando hay más de dos elementos, los del medio se ocultan y se reemplazan por puntos suspensivos.
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
 * En dispositivos móviles, cuando hay más de dos elementos, los elementos intermedios se reemplazan por "...".
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
  // Estado para controlar la visualización del menú desplegable de items ocultos
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Estado para controlar si estamos en vista móvil
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para detectar el tamaño de la pantalla
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px es el breakpoint md: en Tailwind
    };

    // Verificar inicialmente
    checkIfMobile();

    // Agregar event listener para redimensionamiento
    window.addEventListener("resize", checkIfMobile);

    // Limpiar event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Si no hay elementos que mostrar, no renderizamos nada
  if (!items || items.length === 0) return null;

  // Función para renderizar un elemento del breadcrumb
  const renderBreadcrumbItem = (
    item: BreadcrumbItem,
    index: number,
    isLastItem: boolean
  ) => (
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
  );

  // Función para manejar el clic en los puntos suspensivos
  const handleEllipsisClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Verificamos si estamos en vista móvil Y tenemos más de 2 elementos
  const shouldShowEllipsis = isMobile && items.length > 2;

  return (
    <nav className={`flex px-6 pt-12 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Primer elemento siempre visible */}
        <li key={0}>{renderBreadcrumbItem(items[0], 0, items.length === 1)}</li>

        {/* En versión móvil con más de 2 elementos: mostrar puntos suspensivos para elementos intermedios */}
        {shouldShowEllipsis && (
          <li className="relative">
            <div className="flex items-center">
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
              <button
                onClick={handleEllipsisClick}
                className="ms-1 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white cursor-pointer"
                aria-expanded={isDropdownOpen}
              >
                ...
              </button>
            </div>

            {/* Dropdown con los elementos ocultos */}
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg overflow-hidden dark:bg-gray-800">
                <div className="py-1">
                  {items.slice(1, -1).map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        )}

        {/* En versión desktop o con solo 2 elementos: mostrar todos los elementos intermedios */}
        {!shouldShowEllipsis &&
          items
            .slice(1, -1)
            .map((item, idx) => (
              <li key={idx + 1}>
                {renderBreadcrumbItem(item, idx + 1, false)}
              </li>
            ))}

        {/* Último elemento siempre visible (excepto cuando solo hay un elemento) */}
        {items.length > 1 && (
          <li key={items.length - 1} aria-current="page">
            {renderBreadcrumbItem(
              items[items.length - 1],
              items.length - 1,
              true
            )}
          </li>
        )}
      </ol>
    </nav>
  );
};
