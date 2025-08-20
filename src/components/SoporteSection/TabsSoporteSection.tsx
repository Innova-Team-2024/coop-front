
"use client"

import { useState } from "react"
import clsx from "clsx"

const TABS = ["Internet", "Telefonía", "Comercial"]

export default function TabsSoporteSection() {
  const [activeTab, setActiveTab] = useState("Internet")

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white rounded-[32px] border border-gray-200 p-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "relative flex-1 px-8 py-3 text-lg font-roboto rounded-full transition-all duration-300",
                  isActive
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-600 font-normal"
                )}
                style={{
                  background: isActive
                    ? "linear-gradient(white, white) padding-box, linear-gradient(to right, #FF6600, #FF4CFF, #00AAFF) border-box"
                    : "transparent",
                  border: isActive ? "2px solid transparent" : "2px solid transparent",
                  borderRadius: "9999px"
                }}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Antes de reclamar */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold font-roboto text-[#1C1F23] mb-4">
            Antes de reclamar
          </h3>
          {activeTab === "Internet" && (
            <div className="text-[#5F5F5F] space-y-4">
              <p>
                Las velocidades contratadas son las máximas disponibles para cada plan y solo pueden verificarse cuando se conecta un dispositivo por cable. Para realizar mediciones válidas, conecte un único dispositivo.
              </p>
              <p className="font-bold">Las velocidades por WiFi pueden variar según estos factores:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Distancia entre los dispositivos y el módem.</li>
                <li>Interferencias en el aire (microondas, teléfonos inalámbricos, otras señales WiFi).</li>
                <li>Cantidad de dispositivos conectados simultáneamente al módem.</li>
                <li>Repetidores WiFi o routers mal instalados.</li>
                <li>Uso de dispositivos no homologados.</li>
              </ul>
            </div>
          )}
          {activeTab === "Telefonía" && (
            <div className="text-[#5F5F5F] space-y-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Tipo de servicio: Identifique si su servicio de telefonía es por fibra óptica o por línea tradicional (cobre).
                </li>
                <li>
                  Fibra óptica: Si su línea telefónica funciona a través de fibra óptica, siga los mismos pasos que para un reclamo de Internet.
                </li>
                <li>
                  Línea tradicional: Si su línea es la tradicional (cobre), utilice los siguientes canales de contacto.
                </li>
              </ul>
            </div>
          )}
          {activeTab === "Comercial" && (
            <div className="text-[#5F5F5F]">
              <p>Próximamente contenido comercial disponible.</p>
            </div>
          )}
        </div>

        {/* Soluciones */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold font-roboto text-[#1C1F23] mb-4">Soluciones</h3>
          {activeTab === "Internet" && (
            <div className="text-[#5F5F5F] space-y-4">
              <div>
                <p className="font-bold">SERVICIO DE INTERNET</p>
                <p>
                  Reinicie el módem: apáguelo, espere unos minutos y vuelva a encenderlo para que se reconfigure. Si después de esto observa alguna luz roja o el problema persiste, complete el formulario de reclamo o llame al 02320-484000 (lunes a sábados de 8:30 a 21:00).
                </p>
              </div>
              <div>
                <p className="font-bold">SERVICIO DE TELEVISIÓN</p>
                <p>
                  El decodificador Android TV funciona como cualquier dispositivo de red. Si tiene problemas, presione el botón de inicio para salir de la aplicación y vuelva a intentar. También puede reiniciar el decodificador y probar otras aplicaciones como YouTube para verificar la conexión. Para cualquier otro inconveniente, complete el formulario o llame al 02320-484000.
                </p>
              </div>
            </div>
          )}
          {activeTab === "Telefonía" && (
            <div className="text-[#5F5F5F] space-y-4">
              <div>
                <p className="font-bold">FORMAS DE CONTACTO</p>
                <p>
                  Desde una línea de la Cooperativa: Marque 114.<br />
                  Desde otras líneas o celulares: Llame al 02320-683000.<br />
                  WhatsApp: 2320-483000.<br />
                  Correo: 114mesa@interbourg.com.ar
                </p>
              </div>
              <div>
                <p className="font-bold">RECLAMOS POR DESMONTE DE CABLES</p>
                <p>
                  Si observa cuadrillas realizando desmonte de cables sin identificación adecuada, comuníquese a:<br />
                  WhatsApp: 2320-480000<br />
                  Email: reclamosctgb@gmail.com<br />
                  Teléfono: 02320-414800
                </p>
              </div>
            </div>
          )}
          {activeTab === "Comercial" && (
            <div className="text-[#5F5F5F]">
              <p>Contactos comerciales próximamente.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
