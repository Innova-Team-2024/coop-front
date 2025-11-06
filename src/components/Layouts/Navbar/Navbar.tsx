"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from "../../../../public";
import { ButtonAccount } from "@/components";

type NavbarProps = {
  hasAdminBanner?: boolean;
};

const ADMIN_MARGIN_CLASS = "mt-12 sm:mt-12";
const NORMAL_MARGIN_CLASS = "mt-0";

export default function Navbar({ hasAdminBanner = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<{
    [key: string]: boolean;
  }>({});
  const [isClient, setIsClient] = useState(false);

  const marginClass = hasAdminBanner ? ADMIN_MARGIN_CLASS : NORMAL_MARGIN_CLASS;
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMenuOpen(false);
    setOpenSubDropdowns({});
    setOpenMobileSubmenus({});
  }, [pathname]);

  const navItems = [
    { label: "Servicios", key: "servicios" },
    {
      label: "Instituciones",
      key: "instituciones",
      children: [
        {
          label: "Colegios",
          key: "colegios",
          children: ["Jardín", "Primaria"],
        },
        "Biblioteca",
        "Salón de eventos",
        "Sepelios",
      ],
    },
    {
      label: "Nosotros",
      key: "nosotros",
      children: [
        "Consejo directivo",
        "Historia",
        "Obras",
        {
          label: "Socios",
          key: "socios",
          children: ["Memoria y balance", "Reuniones sociales"],
        },
      ],
    },
    { label: "Soporte", key: "soporte" },
  ];

  // ✅ ÚNICO cambio: rutas de "Memoria y balance" y "Reuniones sociales"
  const getHref = (label: string) => {
    const map: { [key: string]: string } = {
      Servicios: "/servicios",
      Nosotros: "/nosotros",
      Soporte: "/soporte",
      "Formas de pago": "/formas-de-pago",
      "Test Velocidad": "/test-velocidad", //nuevo 

      // Instituciones
      Biblioteca: "/instituciones/biblioteca",
      "Salón de eventos": "#",
      Sepelios: "/instituciones/sepelios",
      Jardín: "/instituciones/colegios/jardin",
      Primaria: "/instituciones/colegios/primaria",

      // Nosotros → scroll interno
      "Consejo directivo": "/nosotros#consejo",
      Historia: "/nosotros#historia",
      Obras: "#", // deshabilitado

      // Socios (páginas propias)
      "Memoria y balance": "/nosotros/socios/memoria-y-balance",
      "Reuniones sociales": "/nosotros/socios/reuniones-sociales",
    };
    return map[label] || "#";
  };

  const toggleMobileSubmenu = (key: string) => {
    const allowMultiple = ["colegios", "socios"];
    setOpenMobileSubmenus((prev) => {
      const isNested = allowMultiple.includes(key);
      const wasOpen = !!prev[key];
      if (isNested) {
        return { ...prev, [key]: !wasOpen };
      } else {
        const newState: { [key: string]: boolean } = {};
        Object.keys(prev).forEach((k) => (newState[k] = false));
        newState[key] = !wasOpen;
        return newState;
      }
    });
  };

  const toggleSubDropdown = (key: string) => {
    setOpenSubDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`w-full bg-white/80 backdrop-blur-[12px] shadow-none transition-all duration-300 ${marginClass}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[120px] py-[24px] h-[72px] md:h-[103px]">
          <div className="flex items-center gap-4 md:gap-0 md:flex-none">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block md:hidden"
            >
              {menuOpen ? (
                <HiX className="text-3xl text-black" />
              ) : (
                <HiMenu className="text-3xl text-black" />
              )}
            </button>
            <div className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>

          {/* ESCRITORIO */}
          {isClient && (
            <ul className="hidden md:flex gap-4 items-center justify-center text-[18px] font-normal text-black relative z-10">
              {navItems.map(({ label, key, children }) =>
                children ? (
                  key === "nosotros" ? (
                    <li key={key} className="relative flex items-center gap-1">
                      <Link
                        href={getHref(label)}
                        className={`hover:font-semibold ${
                          isActive(getHref(label)) ? "font-semibold" : ""
                        }`}
                      >
                        {label}
                      </Link>
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === key ? null : key)
                        }
                        aria-expanded={openMenu === key}
                        aria-controls={`submenu-${key}`}
                        className="flex items-center"
                      >
                        <HiChevronDown
                          size={16}
                          className={`text-gray-500 transition-transform duration-300 ${
                            openMenu === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </li>
                  ) : (
                    <li key={key} className="relative">
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === key ? null : key)
                        }
                        className={`flex items-center gap-1 transition-colors duration-300 ${
                          openMenu === key ? "text-black font-semibold" : ""
                        }`}
                      >
                        <span>{label}</span>
                        <HiChevronDown
                          size={16}
                          className={`text-gray-500 transition-transform duration-300 ${
                            openMenu === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </li>
                  )
                ) : (
                  <li key={key}>
                    <Link
                      href={getHref(label)}
                      className={`hover:font-semibold ${
                        isActive(getHref(label)) ? "font-semibold" : ""
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/formas-de-pago"
                  className={`hover:font-semibold ${
                    isActive("/formas-de-pago") ? "font-semibold" : ""
                  }`}
                >
                  Formas de pago
                </Link>
              </li>
              <li>
                <Link
                  href="/test-velocidad"
                  className={`hover:font-semibold ${isActive("/test-velocidad") ? "font-semibold" : ""}`}
                >
                  Test Velocidad
                </Link>
              </li>
            </ul>
          )}

          <div className="flex items-center gap-2">
            <div className="hidden xl:block">
              <ButtonAccount />
            </div>
            <div className="xl:hidden">
              <FaRegUserCircle size={26} className="text-black" />
            </div>
          </div>
        </div>

        {/* SUBMENÚ ESCRITORIO */}
        {openMenu && ["instituciones", "nosotros"].includes(openMenu) && (
          <div className="hidden md:flex w-full justify-center bg-transparent transition-all duration-300 pb-6">
            <ul
              id={`submenu-${openMenu}`}
              className="text-[18px] leading-[24px] font-normal text-gray-700 flex flex-wrap gap-x-10 gap-y-2 max-w-5xl"
            >
              {navItems
                .find((item) => item.key === openMenu)
                ?.children?.map((child) =>
                  typeof child === "string" ? (
                    <li key={child}>
                      <Link
                        href={getHref(child)}
                        className={`hover:no-underline ${
                          isActive(getHref(child)) ? "font-semibold" : ""
                        }`}
                      >
                        {child}
                      </Link>
                    </li>
                  ) : (
                    <li key={child.key} className="min-w-[150px]">
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => toggleSubDropdown(child.key)}
                      >
                        <span
                          className={
                            openSubDropdowns[child.key]
                              ? "font-semibold text-black"
                              : ""
                          }
                        >
                          {child.label}
                        </span>
                        <HiChevronDown
                          size={16}
                          className={`text-gray-500 mt-[2px] transition-transform duration-300 ${
                            openSubDropdowns[child.key] ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {openSubDropdowns[child.key] && (
                        <ul className="mt-2 flex gap-x-4 ml-4">
                          {child.children.map((sub: string) => (
                            <li key={sub}>
                              <Link
                                href={getHref(sub)}
                                className={`hover:no-underline ${
                                  isActive(getHref(sub)) ? "font-semibold" : ""
                                }`}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
            </ul>
          </div>
        )}

        {/* MENÚ MOBILE */}
        {menuOpen && (
          <div className="md:hidden bg-transparent shadow-md px-4 py-3">
            <ul className="flex flex-col gap-4 text-[18px] font-normal text-black">
              {navItems.map(({ label, key, children }) => (
                <li key={key}>
                  {children ? (
                    key === "nosotros" ? (
                      <>
                        <div className="flex items-center gap-2">
                          <Link
                            href={getHref(label)}
                            className={
                              isActive(getHref(label)) ? "font-semibold" : ""
                            }
                          >
                            {label}
                          </Link>
                          <button
                            onClick={() => toggleMobileSubmenu(key)}
                            aria-expanded={!!openMobileSubmenus[key]}
                            aria-controls={`m-submenu-${key}`}
                            className="p-1"
                          >
                            <HiChevronDown
                              className={`transition-transform duration-300 ${
                                openMobileSubmenus[key] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {openMobileSubmenus[key] && (
                          <ul
                            id={`m-submenu-${key}`}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {children.map((child) =>
                              typeof child === "string" ? (
                                <li key={child}>
                                  <Link
                                    href={getHref(child)}
                                    className={
                                      isActive(getHref(child))
                                        ? "font-semibold"
                                        : ""
                                    }
                                  >
                                    {child}
                                  </Link>
                                </li>
                              ) : (
                                <li key={child.key}>
                                  <div
                                    onClick={() =>
                                      toggleMobileSubmenu(child.key)
                                    }
                                    className="flex items-center gap-1 cursor-pointer"
                                  >
                                    <span
                                      className={
                                        openMobileSubmenus[child.key]
                                          ? "font-semibold text-black"
                                          : ""
                                      }
                                    >
                                      {child.label}
                                    </span>
                                    <HiChevronDown
                                      className={`transition-transform duration-300 ${
                                        openMobileSubmenus[child.key]
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                  {openMobileSubmenus[child.key] && (
                                    <ul className="ml-4 mt-2 space-y-2">
                                      {child.children.map((sub: string) => (
                                        <li key={sub}>
                                          <Link
                                            href={getHref(sub)}
                                            className={
                                              isActive(getHref(sub))
                                                ? "font-semibold"
                                                : ""
                                            }
                                          >
                                            {sub}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </>
                    ) : (
                      <>
                        <div
                          onClick={() => toggleMobileSubmenu(key)}
                          className="flex items-center justify-start gap-1 cursor-pointer"
                        >
                          <span
                            className={
                              openMobileSubmenus[key]
                                ? "font-semibold text-black"
                                : ""
                            }
                          >
                            {label}
                          </span>
                          <HiChevronDown
                            className={`transition-transform duration-300 ${
                              openMobileSubmenus[key] ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {openMobileSubmenus[key] && (
                          <ul className="ml-4 mt-2 space-y-2">
                            {children.map((child) =>
                              typeof child === "string" ? (
                                <li key={child}>
                                  <Link
                                    href={getHref(child)}
                                    className={
                                      isActive(getHref(child))
                                        ? "font-semibold"
                                        : ""
                                    }
                                  >
                                    {child}
                                  </Link>
                                </li>
                              ) : (
                                <li key={child.key}>
                                  <div
                                    onClick={() =>
                                      toggleMobileSubmenu(child.key)
                                    }
                                    className="flex items-center gap-1 cursor-pointer"
                                  >
                                    <span
                                      className={
                                        openMobileSubmenus[child.key]
                                          ? "font-semibold text-black"
                                          : ""
                                      }
                                    >
                                      {child.label}
                                    </span>
                                    <HiChevronDown
                                      className={`transition-transform duration-300 ${
                                        openMobileSubmenus[child.key]
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                  {openMobileSubmenus[child.key] && (
                                    <ul className="ml-4 mt-2 space-y-2">
                                      {child.children.map((sub: string) => (
                                        <li key={sub}>
                                          <Link
                                            href={getHref(sub)}
                                            className={
                                              isActive(getHref(sub))
                                                ? "font-semibold"
                                                : ""
                                            }
                                          >
                                            {sub}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </>
                    )
                  ) : (
                    <Link
                      href={getHref(label)}
                      className={
                        isActive(getHref(label)) ? "font-semibold" : ""
                      }
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/formas-de-pago"
                  className={isActive("/formas-de-pago") ? "font-semibold" : ""}
                >
                  Formas de pago
                </Link>
              </li>
              <li>
                <Link href="/test-velocidad" className={isActive("/test-velocidad") ? "font-semibold" : ""}>
                  Test Velocidad
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* LINEA MULTICOLOR */}
        <div className="flex h-[4px] w-full">
          <div className="w-[16.66%] bg-[#76257e]" />
          <div className="w-[16.66%] bg-[#1b45aa]" />
          <div className="w-[16.66%] bg-[#1dc2d2]" />
          <div className="w-[16.66%] bg-[#f9ed0f]" />
          <div className="w-[16.66%] bg-[#f2741f]" />
          <div className="w-[16.66%] bg-[#e31e25]" />
        </div>
      </nav>
    </header>
  );
}

