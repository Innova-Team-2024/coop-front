import React from "react";
import { Breadcrumb, GestarCoopAccess } from "@/components";

function page() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Formas de pago", href: "" },
  ];
  return (
    <main>
      <Breadcrumb items={pathItems} />
      <GestarCoopAccess />
    </main>
  );
}

export default page;
