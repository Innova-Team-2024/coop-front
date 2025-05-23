"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // duración del loader entre rutas

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader onFinish={() => {}} /> : null;
}
