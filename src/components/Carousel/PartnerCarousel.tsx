
'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { Link, MercadoPago, Provincia, PagoFacil, Credicoop } from '@/public'

const brands = [
  { src: Link, alt: 'Link' },
  { src: PagoFacil, alt: 'Pago Fácil' },
  { src: MercadoPago, alt: 'Mercado Pago' },
  { src: Credicoop, alt: 'Banco Credicoop' },
  { src: Provincia, alt: 'Provincia Net' },
]

export default function PartnerCarousel() {
  // Ajusta el valor de perView y spacing para MOBILE en slides:
  // (Default = <768px).
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 3,   // o 1 si quieres ver sólo una marca a la vez en móvil
      spacing: 16,  // reduce el espacio entre slides en móvil
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 60 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 5, spacing: 80 },
      },
    },
    defaultAnimation: {
      duration: 1500,
      easing: (t) => t,
    },
    created: (s) => s.moveToIdx(0),
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true)
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 5000) // Cada 5 seg avanza
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section className="w-full py-8 bg-[#f7f7ff]">
      {/* Ajusta el padding en mobile vs. escritorio */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px]">
        <div ref={sliderRef} className="keen-slider items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={100}
                height={60}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
