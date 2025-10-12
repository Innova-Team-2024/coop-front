"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MensageAdmin() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem("auth_token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    const handleStorageChange = () => {
      const newToken = localStorage.getItem("auth_token");
      setIsAuthenticated(!!newToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");

    setIsAuthenticated(false);

    router.push("/login");

    window.dispatchEvent(new Event("storage"));
  };

  if (!isClient || !isAuthenticated) {
    return null;
  }

  return (
<div className="w-full bg-[#FFFFB1] text-xs sm:text-sm md:text-base h-12 text-gray-900 font-medium flex items-center justify-center gap-4 px-4 fixed top-0 left-0 z-[60] shadow-sm"> {/* 👈 Debe ser fixed y tener un z-index alto */}
  <p className="text-center">
    Actualmente estás en modo{" "}
    <span className="font-semibold">Administrador</span>
  </p>
  <button
    onClick={handleLogout}
    className="underline hover:opacity-80 transition-opacity"
  >
    Cerrar sesión
  </button>
</div>
  );
}
