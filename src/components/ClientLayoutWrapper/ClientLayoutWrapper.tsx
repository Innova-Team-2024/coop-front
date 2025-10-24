"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper() {
  const [hasToken, setHasToken] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem("auth_token");
    setHasToken(!!token);

    const handleStorageChange = () => {
      const newToken = localStorage.getItem("auth_token");
      setHasToken(!!newToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname]);

  return (
    <Navbar hasAdminBanner={isClient && hasToken} />
  );
}