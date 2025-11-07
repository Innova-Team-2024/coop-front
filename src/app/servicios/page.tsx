import { Breadcrumb, PartnerCarousel, PlanCard } from "@/components";

import { FaWifi, FaPhoneAlt, FaTv } from "react-icons/fa";
import { ScrollInfoButton } from "@/components";
import type { Plan } from "@/types/plan";
import ListPlansPage from "@/components/Service/ListPlansPage";

export default function Servicios() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "" },
  ];

  const plans: Plan[] = [
    {
      title: "300 MB + TV",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
    {
      title: "300 MB + TV",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: true,
    },
    {
      title: "300 MB + TV",
      features: [
        { icon: <FaWifi />, text: "FIBRA 300 MB" },
        { icon: <FaPhoneAlt />, text: "LÍNEA FIJA" },
        { icon: <FaTv />, text: "TELEVISIÓN + 300 CANALES" },
      ],
      price: "$ 43.854",
      note: "$ 6.000 x instalación",
      memberPrice: "SOCIOS $ 39.586",
      recommended: false,
    },
  ];

  return (
    <main>
      <Breadcrumb className="lg:px-32" items={pathItems} />
      <section className="py-10 lg:px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-sm font-semibold">Promociones 2025</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
            Elige tu <span>conexión ideal</span>
          </h2>

          {/* Section Promotions cards */}
          <article>
            <div className="md:grid grid-cols-1 lg:flex gap-6 justify-center items-end">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-center
                      [&:nth-child(n+2)]:mt-10
                      md:[&:nth-child(n+2)]:mt-15
                      lg:mt-0"
                >
                  <PlanCard plan={plan} variant="desktop" />
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <ScrollInfoButton />
            </div>
          </article>
          <PartnerCarousel />
          {/* Section Services cards */}
          <article>
            <ListPlansPage />
          </article>
        </div>
      </section>
    </main>
  );
}

