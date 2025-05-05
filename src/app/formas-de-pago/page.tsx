import React from "react";
import {
  Breadcrumb,
  GestarCoopAccess,
  PartnerCarousel,
  PaymentPlatform,
} from "@/components";

function page() {
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

export default page;
