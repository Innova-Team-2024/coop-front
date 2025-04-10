
'use client'

import { FaWifi, FaPhoneAlt, FaTv } from 'react-icons/fa'
import { FiChevronsDown } from 'react-icons/fi'
import { cn } from '@/lib/utils'

const plans = [
  {
    title: '300 MB + TV',
    features: [
      { icon: <FaWifi />, text: 'FIBRA 300 MB' },
      { icon: <FaPhoneAlt />, text: 'LÍNEA FIJA' },
      { icon: <FaTv />, text: 'TELEVISIÓN + 300 CANALES' },
    ],
    price: '$ 43.854',
    note: '$ 6.000 x instalación',
    memberPrice: 'SOCIOS $ 39.586',
    recommended: false,
  },
  {
    title: '300 MB + TV',
    features: [
      { icon: <FaWifi />, text: 'FIBRA 300 MB' },
      { icon: <FaPhoneAlt />, text: 'LÍNEA FIJA' },
      { icon: <FaTv />, text: 'TELEVISIÓN + 300 CANALES' },
    ],
    price: '$ 43.854',
    note: '$ 6.000 x instalación',
    memberPrice: 'SOCIOS $ 39.586',
    recommended: true,
  },
  {
    title: '300 MB + TV',
    features: [
      { icon: <FaWifi />, text: 'FIBRA 300 MB' },
      { icon: <FaPhoneAlt />, text: 'LÍNEA FIJA' },
      { icon: <FaTv />, text: 'TELEVISIÓN + 300 CANALES' },
    ],
    price: '$ 43.854',
    note: '$ 6.000 x instalación',
    memberPrice: 'SOCIOS $ 39.586',
    recommended: false,
  },
]

export default function InternetPlans() {
  return (
    <section className="bg-[#F7F7FF] py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold">Promociones 2025</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
          Elige tu <span className="text-orange-500">conexión ideal</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-end">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                'w-full md:w-[384px] rounded-xl shadow-md px-6 py-8 bg-white flex flex-col justify-between relative transition-all',
                plan.recommended && 'border-2 border-orange-400 -mt-6'
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-sm px-4 py-1 rounded-t-md shadow">
                  PLAN RECOMENDADO
                </div>
              )}

              <h3 className="text-xl font-bold text-center mb-6">{plan.title}</h3>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {f.icon} <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-red-400 mb-2" />
              <p className="text-sm">{plan.note}</p>
              <p className="text-sm italic mb-4">{plan.memberPrice}</p>

              <p className="text-2xl font-bold text-center mb-6">{plan.price}</p>

              <button
                className={cn(
                  'w-full rounded-full text-sm font-semibold py-2 shadow',
                  plan.recommended
                    ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white'
                    : 'bg-white text-black border border-gray-300'
                )}
              >
                CONTRATAR
              </button>

              <p className="text-xs text-center mt-4 text-gray-500 italic">* Promo nuevos clientes *</p>
            </div>
          ))}
        </div>

        <p className="text-sm mt-14 font-medium flex justify-center items-center gap-1">
          Consultar más información <FiChevronsDown className="text-orange-500" />
        </p>
      </div>
    </section>
  )
}
