'use client';

import { BiPencil } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import ModalBanner from '../ModalBanner/ModalBanner';

export default function ButtonAccount() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem('auth_token');
    setIsAuthenticated(!!token);

    const handleStorageChange = () => {
      const newToken = localStorage.getItem('auth_token');
      setIsAuthenticated(!!newToken);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!isClient || !isAuthenticated) {
    return null;
  }
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-[204px] h-[48px] py-2 bg-white text-[#0F172A] shadow-md mt-16 border border-gray-300 rounded-[64px] hover:bg-gray-100 transition mx-auto text-[18px] font-semibold"
      >
        <span className="flex items-center font-semibold whitespace-nowrap">
          Editar portadas
          <BiPencil className="ml-2 text-[24px]" />
        </span>
      </button>

      <ModalBanner isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}