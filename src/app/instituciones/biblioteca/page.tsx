import { Breadcrumb, BibliotecaContent } from "@/components";

export const metadata = {
  title: "Biblioteca Cooperativa | Espacio de lectura y aprendizaje",
  description:
    "Accedé a material educativo y literario. Un espacio abierto a la comunidad para fomentar la lectura, el estudio y la participación cultural.",
};

export default function Biblioteca() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Instituciones", href: "/instituciones" },
    { label: "Biblioteca", href: "" },
  ];
  
  return (
    <main>
        <Breadcrumb items={breadcrumbItems} />
        <BibliotecaContent />
    </main>
  );
}
