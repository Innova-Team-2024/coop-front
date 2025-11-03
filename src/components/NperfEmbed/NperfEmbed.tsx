
"use client";

import { useState } from "react";

export default function NperfEmbed() {
  const [open, setOpen] = useState(false);

  const goToFast = () => {
    window.open("https://fast.com/es/", "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-xl font-medium bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
      >
        Test de velocidad
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-[92%] max-w-md rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-2">
              Fast.com: Prueba de velocidad
            </h2>
            <p className="text-sm opacity-80 mb-6">
              Este test se abrirá en una nueva pestaña, manteniendo tu sitio
              abierto. ¿Deseás continuar?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                No
              </button>
              <button
                onClick={goToFast}
                className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
              >
                Sí, abrir Fast.com
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs opacity-60">Recomendado: Fast.com</p>
    </div>
  );
}
