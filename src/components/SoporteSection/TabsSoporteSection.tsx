
"use client";

import { useState } from "react";
import clsx from "clsx";

const TABS = ["Internet", "Telefonía", "Comercial"];

export default function TabsSoporteSection() {
  const [activeTab, setActiveTab] = useState("Internet");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white rounded-[32px] border border-gray-200 p-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "relative flex-1 px-8 py-3 text-lg font-roboto rounded-full transition-all duration-300",
                  isActive ? "text-zinc-900 font-medium" : "text-zinc-600 font-normal"
                )}
                style={{
                  background: isActive
                    ? "linear-gradient(white, white) padding-box, linear-gradient(to right, #FF6600, #FF4CFF, #00AAFF) border-box"
                    : "transparent",
                  border: isActive ? "2px solid transparent" : "2px solid transparent",
                  borderRadius: "9999px",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Antes de reclamar */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold font-roboto text-[#1C1F23] mb-4">
            Antes de reclamar
          </h3>

          {activeTab === "Internet" && (
            <div className="text-[#5F5F5F] space-y-4">
              <p>
                Las velocidades contratadas son las <strong>máximas</strong> de cada plan y se verifican con un dispositivo
                conectado <strong>por cable</strong>.
              </p>
              <p className="font-bold">Factores que pueden afectar la velocidad WiFi:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Distancia entre dispositivos y módem.</li>
                <li>Interferencias (microondas, teléfonos inalámbricos, otras señales WiFi).</li>
                <li>Cantidad de dispositivos conectados.</li>
                <li>Repetidores WiFi o routers mal instalados.</li>
                <li>Dispositivos no homologados.</li>
              </ul>
            </div>
          )}

          {activeTab === "Telefonía" && (
            <div className="text-[#5F5F5F] space-y-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Identificá si tu servicio de telefonía es por <strong>fibra óptica</strong> o por{" "}
                  <strong>línea tradicional (cobre)</strong>.
                </li>
                <li>
                  Si es por fibra: aplican los mismos pasos preventivos que en <strong>Internet</strong>.
                </li>
                <li>
                  Si es por línea tradicional: usá los canales de contacto del sector (mail y teléfono).
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Comercial" && (
            <div className="text-[#5F5F5F]">
              <p>Información comercial general y requisitos de alta/baja próximos a publicarse.</p>
            </div>
          )}
        </div>

        {/* Soluciones */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold font-roboto text-[#1C1F23] mb-4">Soluciones</h3>

          {activeTab === "Internet" && (
            <div className="text-[#5F5F5F] space-y-6">
              <div>
                <p className="font-bold">Internet (falta de servicio)</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Apagá y encendé el módem.</li>
                  <li>Esperá a que cargue la configuración.</li>
                  <li>
                    Si queda alguna <strong>luz roja</strong> o persiste el problema:&nbsp;
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSchQcAqGjkGcGny3BFcj_y0oT1QTvU2ZPBvGiUvon7JFAM7Zw/viewform?usp=sf_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      completá el formulario de reclamo
                    </a>{" "}
                    o llamá al <strong>02320-484000</strong> (Lunes a Sábados, 8:30 a 21:00).
                  </li>
                </ol>
              </div>

              <div>
                <p className="font-bold">Televisión</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Salir de la App (botón de casita) y reintentar.</li>
                  <li>Reiniciar el decodificador.</li>
                  <li>Probar con otra app (ej.: YouTube).</li>
                </ul>
                <p className="mt-2">
                  Si persiste: completá el formulario o llamá al <strong>02320-484000</strong> (Lunes a Sábados, 8:30 a 21:00).
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSchQcAqGjkGcGny3BFcj_y0oT1QTvU2ZPBvGiUvon7JFAM7Zw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  Formulario Factura Electrónica
                </a>
                <a
                  href="https://docs.google.com/forms/d/1l5uyhRL8QSqeL-Y7p4tBFtsptXiMnWJrjp8XWsY9RDg/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  Formulario Débito Automático
                </a>
              </div>
            </div>
          )}

          {activeTab === "Telefonía" && (
            <div className="text-[#5F5F5F] space-y-4">
              <div>
                <p className="font-bold">Canales de contacto</p>
                <p>
                  Correo: <strong>114mesa@interbourg.com.ar</strong>
                  <br />
                  Teléfono general: <strong>02320-484000</strong> (Lun a Sáb, 8:30 a 21:00)
                </p>
              </div>
              <p className="text-sm">
                Si tu telefonía funciona por fibra óptica, aplican los mismos pasos de reinicio y verificación que en
                Internet.
              </p>
            </div>
          )}

          {activeTab === "Comercial" && (
            <div className="text-[#5F5F5F] space-y-4">
              <p>
                Para altas, bajas y cambios de plan podés escribir a{" "}
                <strong>ventas@interbourg.com.ar</strong> o comunicarte en el horario de atención:
                <br />
                <strong>Lunes a Viernes, 8:30 – 16:00</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
