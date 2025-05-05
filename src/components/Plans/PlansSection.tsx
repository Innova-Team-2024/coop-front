'use client'

import { FaWifi, FaPhoneAlt, FaTv } from 'react-icons/fa';
import { DesktopPlans, MobilePlans, ScrollInfoButton } from '@/components';
import type { Plan } from '@/types/plan';

const plans: Plan[] = [
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
];

export default function InternetPlans() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold">Promociones 2025</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
          Elige tu <span className="text-orange-500">conexión ideal</span>
        </h2>
        <DesktopPlans plans={plans} />

        <MobilePlans plans={plans} />

        <div className="mt-14 flex justify-center">
          <ScrollInfoButton />
        </div>
      </div>
    </section>
  );
}
