
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { HiMenu, HiChevronDown } from 'react-icons/hi'
import { FaRegUserCircle } from 'react-icons/fa'
import { Logo } from '@/public'
import { ButtonAccount } from '@/components'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[120px] py-[24px] h-[72px] md:h-[103px] relative">

        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-0 md:flex-none">
          {/* Hamburguesa solo mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden"
          >
            <HiMenu className="text-3xl text-black" />
          </button>

          {/* Logo */}
          <div className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0">
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Enlaces de navegación: solo desktop */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer flex items-center">
            Servicios
            <HiChevronDown className="ml-1 text-gray-500" size={16} />
          </li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center">
            Instituciones
            <HiChevronDown className="ml-1 text-gray-500" size={16} />
          </li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center">
            Nosotros
            <HiChevronDown className="ml-1 text-gray-500" size={16} />
          </li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center">
            Soporte
            <HiChevronDown className="ml-1 text-gray-500" size={16} />
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Formas de pago
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Solo desktop: botón completo */}
          <div className="hidden md:block">
            <ButtonAccount />
          </div>

          {/* Solo mobile: ícono */}
          <div className="md:hidden">
            <FaRegUserCircle size={26} className="text-black" />
          </div>
        </div>
      </nav>

      {/* Línea de colores visible en todas las vistas */}
      <div className="flex h-[4px] w-full">
        <div className="w-[16.66%] bg-[#76257e]" />
        <div className="w-[16.66%] bg-[#1b45aa]" />
        <div className="w-[16.66%] bg-[#1dc2d2]" />
        <div className="w-[16.66%] bg-[#f9ed0f]" />
        <div className="w-[16.66%] bg-[#f2741f]" />
        <div className="w-[16.66%] bg-[#e31e25]" />
      </div>

      {/* Mobile dropdown menu (centrado) */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg px-4 py-3">
          <ul className="flex flex-col gap-4 text-sm font-medium items-center text-center">
            <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
            <li className="hover:text-blue-600 cursor-pointer">Instituciones</li>
            <li className="hover:text-blue-600 cursor-pointer">Nosotros</li>
            <li className="hover:text-blue-600 cursor-pointer">Soporte</li>
            <li className="hover:text-blue-600 cursor-pointer">Formas de pago</li>
          </ul>
        </div>
      )}
    </header>
  )
}
