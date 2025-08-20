
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Si es la primera vez que renderiza (ej: entrar al home),
    // no mostramos el loader
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // duración del loader entre rutas

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader onFinish={() => {}} /> : null;
}
