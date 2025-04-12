
'use client'
import Image from 'next/image'
import {FaFacebookF,FaTwitter,FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import { Logo2, Logo3 } from '@/public'

export default function Footer() {
  return (
    <footer className="w-full bg-[#17253D] text-white py-[80px] px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[80px]">

        {/* Top: Logo + Columnas */}
        <div className="flex flex-col md:flex-row justify-start gap-[80px] items-start">

          {/* Logos apilados (centrado en mobile, a la izquierda en desktop) */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto min-w-[180px]">
            <Image src={Logo2} alt="Logo principal" width={90} height={40} />
            <Image
              src={Logo3}
              alt="Texto logo"
              width={140}
              height={20}
              className="-mt-1"
            />
          </div>

          {/* Columnas de enlaces */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-[80px] text-sm w-full">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Contact Support</li>
                <li>Our Services</li>
                <li>Pricing Plans</li>
                <li>Latest News</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Blog Posts</li>
                <li>FAQs</li>
                <li>Support Center</li>
                <li>User Guides</li>
                <li>Community Forum</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Facebook Page</li>
                <li>Twitter Feed</li>
                <li>LinkedIn Profile</li>
                <li>YouTube Channel</li>
                <li>Instagram Gallery</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Link to Blog</li>
                <li>Support Resources</li>
                <li>Service Updates</li>
                <li>Feedback Form</li>
                <li>Join Our Community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/40 w-full" />

        {/* Footer inferior: textos legales + íconos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          {/* Links legales */}
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 InnovaTeam. All rights reserved.</span>
            <a href="#" className="hover:underline">Políticas de privacidad</a>
            <a href="#" className="hover:underline">Términos y condiciones</a>
            <a href="#" className="hover:underline">Configurar cookies</a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4 text-white text-base">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  )
}

