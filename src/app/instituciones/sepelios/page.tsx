import { Breadcrumb } from "@/components";

export const metadata = {
  title: "Servicio de sepelios | Acompañamiento y contención",
  description:
    "Servicio de sepelios solidario, con cobertura y contención para los momentos difíciles. Consultá condiciones y beneficios para socios.",
};


export default function Sepelios() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Instituciones", href: "/instituciones" },
    { label: "Sepelios", href: "" },
  ];
  
  return (
    <main>
          <Breadcrumb items={breadcrumbItems} />
    </main>
  );
}