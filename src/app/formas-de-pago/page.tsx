import {
  Breadcrumb,
  GestarCoopAccess,
  PartnerCarousel,
  PaymentPlatform,
} from "@/components";

export const metadata = {
  title: "Formas de Pago | Cooperativa Telefónica de Grand Bourg y Pablo Nogués",
  description:
    "Conocé todas las formas de pago disponibles para abonar tus servicios de la Cooperativa Telefónica de Grand Bourg y Pablo Nogués de manera rápida y segura.",
};

export default function Page() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Formas de pago", href: "" },
  ];

  return (
    <main>
      <Breadcrumb items={pathItems} />
      <GestarCoopAccess />
      <PartnerCarousel />
      <PaymentPlatform />
    </main>
  );
}

