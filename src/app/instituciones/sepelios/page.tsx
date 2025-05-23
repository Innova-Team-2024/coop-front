import { Breadcrumb , ContactForm,  SepeliosResponsive  } from "@/components";

export const metadata = {
  title: 'Servicio de sepelios | Acompañamiento y contención',
  description:
    'Servicio de sepelios solidario, con cobertura y contención para los momentos difíciles. Consultá condiciones y beneficios para socios.',
};

export default function Sepelios() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Instituciones', href: '/instituciones' },
    { label: 'Sepelios', href: '' },
  ];

  return (
    <main className="px-6 py-14 md:px-10">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Bloque responsive adaptado a escritorio y mobile */}
      <SepeliosResponsive />

      <div className="mt-20">
        <ContactForm
          titulo="¿Tenés alguna duda?"
          descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea una consulta, una sugerencia o un reclamo, tu mensaje es importante para nosotros."
          horario="Respondemos de lunes a viernes, entre las 8 y las 16 h. ¡Te vamos a estar leyendo!"
          mostrarLogo={true}
        />
      </div>
    </main>
  );
}
