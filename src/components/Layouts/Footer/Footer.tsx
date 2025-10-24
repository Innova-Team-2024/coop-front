'use client'

import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa'

export default function Footer() {
  const router = useRouter();
  
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(true);
    
    const token = localStorage.getItem('auth_token');
    setShowAdminButton(!token);

    const handleStorageChange = () => {
      const newToken = localStorage.getItem('auth_token');
      setShowAdminButton(!newToken);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <footer className="w-full bg-[#17253D] text-white py-[80px] px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[80px]">
        <div className="flex flex-col items-center md:items-start gap-[40px] md:flex-row md:justify-start md:gap-[80px]">
          <div className="flex flex-col items-center md:items-start min-w-[180px]">
            <Image src="/Logo2.png" alt="Logo principal" width={90} height={40} />
            <Image src="/Logo3.png" alt="Texto logo" width={140} height={20} className="-mt-1" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[60px] gap-y-[40px] text-sm text-left w-full justify-between">
            {/* ... Columna de Servicios ... */}
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>Internet</li>
                <li>Televisión</li>
                <li>Telefonía</li>
              </ul>
            </div>
            {/* ... Columna de Instituciones ... */}
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
            {/* ... Columna de Nosotros ... */}
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
            {/* ... Columna de Soporte ... */}
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-300 font-normal">
                <li>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSchQcAqGjkGcGny3BFcj_y0oT1QTvU2ZPBvGiUvon7JFAM7Zw/viewform?usp=sf_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    Factura Electrónica
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/forms/d/1l5uyhRL8QSqeL-Y7p4tBFtsptXiMnWJrjp8XWsY9RDg/viewform?pli=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    Débito Automático
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:tramites@interbourg.com.ar"
                    className="hover:underline"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/40 w-full" />

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-2">
            <span>© 2025 Innova. All rights reserved.</span>
            <span className="hidden md:inline-block">|</span>
            <a href="#" className="hover:underline text-gray-300">
              Términos y condiciones
            </a>
            
            {isClient && showAdminButton && (
              <button className="hover:underline text-gray-300" type='button' onClick={() => router.push('/login')}>
                Acceso admin
              </button>
            )}
            
          </div>

          <div className="flex gap-4 text-white text-lg mt-2 md:mt-0">
            <a
              href="https://www.facebook.com/interbourg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/cooptgbourg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-gray-300" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-gray-300" />
            </a>
            <a
              href="https://wa.me/5492320483000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}