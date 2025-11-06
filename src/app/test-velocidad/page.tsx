import { Breadcrumb, ContactForm } from "@/components";
import NperfEmbed from "@/components/NperfEmbed/NperfEmbed";

export const metadata = {
  title: "Test de Velocidad | Cooperativa Telefónica de Grand Bourg y Pablo Nogués",
  description:
    "Medí la velocidad de tu conexión a Internet con nuestro test oficial. Si tu resultado no coincide con tu plan o tenés inconvenientes, podés contactarte con nuestro equipo técnico.",
};

export default function TestVelocidadPage() {
  const pathItems = [
    { label: "Home", href: "/" },
    { label: "Test Velocidad", href: "" },
  ];

  return (
    <main className="pb-8 mb-6 max-w-[1440px] mx-auto">
      <Breadcrumb className="lg:px-32" items={pathItems} />

      <section className="px-6 md:px-24 lg:px-32 py-10 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8">
          Test de Velocidad
        </h1>
        <NperfEmbed />
      </section>

      <section className="px-2">
        <ContactForm
          titulo="Comunícate"
          descripcion="Si tu velocidad no coincide con tu plan o tenés inconvenientes, dejanos tu consulta."
          horario="Respondemos de lunes a viernes, entre las 8 y las 16 h."
          mostrarLogo={true}
        />
      </section>
    </main>
  );
}
