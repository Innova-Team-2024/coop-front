'use client'

import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { Logo2, Logo3 } from '@/public'

export default function Footer() {
  return (
    <footer className="w-full bg-[#17253D] text-white py-[80px] px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[80px]">

        {/* Top: Logo + Links */}
        <div className="flex flex-col items-center md:items-start gap-[40px] md:flex-row md:justify-start md:gap-[80px]">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start min-w-[180px]">
            <Image src={Logo2} alt="Logo principal" width={90} height={40} />
            <Image src={Logo3} alt="Texto logo" width={140} height={20} className="-mt-1" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[60px] gap-y-[40px] text-sm text-left w-full justify-between">
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>Internet</li>
                <li>Televisión</li>
                <li>Telefonía</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Instituciones</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>Jardín</li>
                <li>Primaria</li>
                <li>Biblioteca</li>
                <li>Eventos</li>
                <li>Sepelios</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Nosotros</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>Consejo directivo</li>
                <li>Historia</li>
                <li>Obras</li>
                <li>Memoria y balance</li>
                <li>Asamblea</li>
                <li>Reuniones sociales</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>Ayuda</li>
                <li>Centro de reclamos</li>
                <li>Contacto</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 w-full" />

        {/* Bottom: Legales + RRSS */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          {/* Textos legales */}
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-2">
            <span>© 2025 Innova. All rights reserved.</span>
            <span className="hidden md:inline-block">|</span>
            <a href="#" className="hover:underline text-gray-300">
              Términos y condiciones
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4 text-white text-lg mt-2 md:mt-0 cursor-pointer">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  )
}
