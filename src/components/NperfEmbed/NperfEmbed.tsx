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
      {/* Botón principal con borde degradado (mismo patrón que tabs) */}
      <div className="rounded-xl p-[2px] bg-btn-gradient">
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-3 rounded-xl bg-white text-[#1C1F23] font-medium
                     hover:shadow-sm transition-all"
          type="button"
        >
          Test de velocidad
        </button>
      </div>

      {/* Modal */}
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
          <div className="relative w-[92%] max-w-md rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl border border-gray-200 dark:border-neutral-800">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Fast.com: Prueba de velocidad
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Este test se abrirá en una nueva pestaña, manteniendo tu sitio
              abierto. ¿Deseás continuar?
            </p>

            <div className="flex items-center justify-end gap-3">
              {/* Botón NO (neutral) */}
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 
                           text-[#1C1F23] dark:text-gray-200 bg-white dark:bg-neutral-900 
                           hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
                type="button"
              >
                No
              </button>

              {/* Botón SÍ con borde degradado (como tabs) */}
              <div className="rounded-full p-[2px] bg-btn-gradient">
                <button
                  onClick={goToFast}
                  className="px-5 py-2 rounded-full bg-white text-[#1C1F23] font-medium hover:shadow-sm transition-all"
                  type="button"
                >
                  Sí, abrir Fast.com
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs opacity-60">Recomendado: Fast.com</p>
    </div>
  );
}

