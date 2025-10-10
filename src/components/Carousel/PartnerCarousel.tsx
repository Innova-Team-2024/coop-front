'use client'

import Image from 'next/image'
import styles from './PartnerCarousel.module.css'
import {
  Link,
  MercadoPago,
  Provincia,
  PagoFacil,
  Credicoop,
} from '../../../public'

const brands = [
  { src: Link, alt: 'Link' },
  { src: PagoFacil, alt: 'Pago Fácil' },
  { src: MercadoPago, alt: 'Mercado Pago' },
  { src: Credicoop, alt: 'Banco Credicoop' },
  { src: Provincia, alt: 'Provincia Net' },
]

export default function PartnerCarousel() {
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="relative w-full py-8 ">
      <div className="pointer-events-none absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-[#f7f7ff]/90 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-[#f7f7ff]/90 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px]">
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className={styles.slideItem}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={138}
                  height={138}
                  className="object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
