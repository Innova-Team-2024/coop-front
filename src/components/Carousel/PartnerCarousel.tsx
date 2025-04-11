'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { Link, MercadoPago, Provincia, PagoFacil, Credicoop } from "@/public"

const brands = [
  { src: Link, alt: 'Link' },
  { src: PagoFacil, alt: 'Pago Fácil' },
  { src: MercadoPago, alt: 'Mercado Pago' },
  { src: Credicoop, alt: 'Banco Credicoop' },
  { src: Provincia, alt: 'Provincia Net' },
]

export default function PartnerCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 2,
      spacing: 40,
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
      duration: 1500, // duración de la animación
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
    }, 5000) // más lento (cada 5s)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section className="w-full py-8 bg-[#f7f7ff]">
      <div className="max-w-[1440px] px-[120px] mx-auto">
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
