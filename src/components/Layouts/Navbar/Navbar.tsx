"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from "@/public";
import { ButtonAccount } from "@/components";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<{
    [key: string]: boolean;
  }>({});
  const [isClient, setIsClient] = useState(false);

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
    {
      label: "Servicios",
      key: "servicios",
      children: ["Internet", "Televisión", "Telefonía"],
    },
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
    {
      label: "Soporte",
      key: "soporte",
      children: ["Reclamos", "Consultas técnicas", "Ayuda online"],
    },
  ];

  const getHref = (label: string) => {
    const map: { [key: string]: string } = {
      "Formas de pago": "/formas-de-pago",
      "Memoria y balance": "/nosotros/memoria&balance",
      Reclamos: "/soporte/reclamos",
      "Consultas técnicas": "/soporte/consultas-tecnicas",
      "Ayuda online": "/soporte/ayuda-online",
      Internet: "/servicios/internet",
      Televisión: "/servicios/television",
      Telefonía: "/servicios/telefonia",
      Biblioteca: "/instituciones/biblioteca",
      "Salón de eventos": "/instituciones/salon-de-eventos",
      Sepelios: "/instituciones/sepelios",
      Jardín: "/instituciones/colegios/jardin",
      Primaria: "/instituciones/colegios/primaria",
      Obras: "/nosotros/obras",
      Historia: "/nosotros/historia",
      "Consejo directivo": "/nosotros/consejo-directivo",
    };
    return map[label] || "#";
  };

  const toggleMobileSubmenu = (key: string) => {
    setOpenMobileSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSubDropdown = (key: string) => {
    setOpenSubDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRedirect = () => {
    window.open("https://migestarcoop.com.ar/GrandBourg/login", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full bg-white/80 backdrop-blur-[12px] shadow-none transition-all duration-300">
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
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                className="mx-auto"
              />
            </div>
          </div>

          {isClient && (
            <ul className="hidden md:flex gap-4 items-center justify-center text-[18px] font-normal text-black relative z-10">
              {navItems.map(({ label, key }) => (
                <li key={key} className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === key ? null : key)}
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
              ))}
              <li>
                <Link
                  href="/formas-de-pago"
                  className="transition-colors duration-300 hover:font-semibold"
                >
                  Formas de pago
                </Link>
              </li>
            </ul>
          )}

          <div className="flex items-center gap-2">
            <div className="hidden xl:block">
              <ButtonAccount />
            </div>
            <div className="xl:hidden">
              <FaRegUserCircle
                onClick={handleRedirect}
                size={26}
                className="text-black"
              />
            </div>
          </div>
        </div>

        {openMenu &&
          ["servicios", "instituciones", "nosotros", "soporte"].includes(
            openMenu
          ) && (
            <div className="hidden md:flex w-full justify-center bg-transparent transition-all duration-300 pb-6">
              <ul className="text-[18px] leading-[24px] font-normal text-gray-700 flex flex-wrap gap-x-10 gap-y-2 max-w-5xl">
                {navItems
                  .find((item) => item.key === openMenu)
                  ?.children?.map((child) =>
                    typeof child === "string" ? (
                      <li key={child}>
                        <Link href={getHref(child)} className="hover:underline">
                          {child}
                        </Link>
                      </li>
                    ) : (
                      <li key={child.key} className="min-w-[150px]">
                        <div
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() => toggleSubDropdown(child.key)}
                        >
                          <span className="font-semibold">{child.label}</span>
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
                                  className="hover:underline"
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

        {menuOpen && (
          <div className="md:hidden bg-transparent shadow-md px-4 py-3 rounded-b-none">
            <ul className="flex flex-col gap-4 text-[18px] font-normal text-black">
              {navItems.map(({ label, key, children }) => (
                <li key={key}>
                  <div
                    onClick={() => toggleMobileSubmenu(key)}
                    className="flex items-center justify-start gap-1 cursor-pointer"
                  >
                    <span
                      className={`$${
                        openMobileSubmenus[key]
                          ? "text-black font-semibold"
                          : ""
                      }`}
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
                      {Array.isArray(children) &&
                        children.map((child) =>
                          typeof child === "string" ? (
                            <li key={child}>
                              <Link
                                href={getHref(child)}
                                className="hover:underline"
                              >
                                {child}
                              </Link>
                            </li>
                          ) : (
                            <li key={child.key}>
                              <div
                                onClick={() => toggleMobileSubmenu(child.key)}
                                className="flex items-center justify-start gap-1 cursor-pointer"
                              >
                                <span
                                  className={`$${
                                    openMobileSubmenus[child.key]
                                      ? "text-black font-semibold"
                                      : ""
                                  }`}
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
                                        className="hover:underline"
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
                </li>
              ))}
              <li>
                <Link
                  href="/formas-de-pago"
                  className="transition-colors duration-300 hover:font-semibold"
                >
                  Formas de pago
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
