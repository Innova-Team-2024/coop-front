'use client'

import { useRef, useState, useEffect } from 'react'
import { FaWifi, FaPhoneAlt, FaTv } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { ScrollInfoButton } from '@/components'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const mobileSortedPlans = [...plans].sort(
    (a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0)
  )

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      const scrollLeft = scrollRef.current.scrollLeft
      const width = scrollRef.current.offsetWidth
      const index = Math.round(scrollLeft / width)
      setCurrentIndex(index)
    }

    const scrollContainer = scrollRef.current
    scrollContainer?.addEventListener('scroll', handleScroll)
    return () => scrollContainer?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-[#F7F7FF] py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold">Promociones 2025</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
          Elige tu <span className="text-orange-500">conexión ideal</span>
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-row gap-6 justify-center items-end">
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
                    {f.icon} <span className="whitespace-nowrap">{f.text}</span>
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

        {/* MOBILE */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory px-1"
        >
          {mobileSortedPlans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                'min-w-[260px] snap-start rounded-xl shadow-md px-6 py-8 bg-white flex flex-col justify-between relative transition-all',
                plan.recommended && 'border-2 border-orange-400'
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
                    {f.icon} <span className="whitespace-nowrap">{f.text}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-green-400 mb-2" />
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

        {/* INDICADORES */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {mobileSortedPlans.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'h-3 w-3 rounded-full transition-all duration-300',
                currentIndex === idx ? 'bg-orange-500' : 'bg-orange-200'
              )}
            />
          ))}
        </div>

        {/* BOTÓN */}
        <div className="mt-14 flex justify-center">
          <ScrollInfoButton />
        </div>
      </div>
    </section>
  )
}
