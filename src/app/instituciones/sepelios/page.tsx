import { Breadcrumb, SepeliosAccordion, ContactForm  } from "@/components";


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
    <main className="px-10 py-14">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex flex-col lg:flex-row gap-10 mt-10 max-w-[1200px] mx-auto">
        <div className="w-full lg:w-[555.52px] h-72 bg-black/5 rounded-2xl relative">
          <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-indigo-800 rounded-xl" />
          <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-orange-500 rounded-xl" />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-[#000]">Cochería “Casa Oviedo”</h1>
          <SepeliosAccordion />
        </div>
      </div>
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