
import {
  Breadcrumb,
  Herosection,
  InfoCardSection,
  NosotrosSection,
  GallerySection,
  ArancelesCard,
  ContactForm,
  SocialMediaSection,
  Sucursal
} from "@/components";

import {
  ImagenJardin,
  imagenAranceles,
  jardinImagen1,
  SucursalImage
} from "@/public";

export const metadata = {
  title: "Jardín Niños Creciendo | Educación infantil en Grand Bourg",
  description:
    "Propuesta educativa basada en el cuidado, la creatividad y el trabajo en equipo. Un espacio para crecer en comunidad desde los primeros años.",
};

export default function JardinPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Instituciones", href: "/instituciones" },
    { label: "Colegios", href: "/instituciones/colegios" },
    { label: "Jardín", href: "" },
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />

      <Herosection
        title="Jardín “Niños Creciendo”"
        description={`Estamos en Soler 1570, Grand Bourg - Salas de 3, 4 y 5 años.\n¡Envíanos tu consulta!`}
        buttonText="Solicita información"
        buttonHref="/contacto"
        image={ImagenJardin}
        imageAlt="Cartel del Jardín Niños Creciendo"
      />

      <InfoCardSection />
      <NosotrosSection />
      <GallerySection />

      <ArancelesCard
        titulo="Aranceles"
        matricula="$ 25.000"
        cuotaActual="$ 35.000"
        logo={imagenAranceles}
        logoAlt="Logo Jardín Niños Creciendo"
      />

      <div className="mt-[100px]">
        <ContactForm
          titulo="¿Consulta o inscripción?"
          descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea para solicitar información, iniciar la inscripción o comunicarte con nosotros, tu mensaje es importante para seguir creciendo juntos."
          telefono="02320 - 411000"
          email="creciendo@cooperativagb.com.ar"
          horario="Respondemos de lunes a viernes, entre las 8:30 a las 12 h. ¡Te vamos a estar leyendo!"
          mostrarLogo={false}
        />
      </div>

      <div className="mt-[80px]">
        <SocialMediaSection
          categoria="Redes sociales"
          tituloPrincipal1="Las voces del"
          tituloPrincipal2="aula"
          descripcion="Mirá cómo aprenden, juegan y comparten nuestros chicos todos los días. Las seños te lo muestran todo en nuestras redes."
          botones={[
            { label: "Instagram", href: "https://instagram.com/tuPerfil" },
            { label: "YouTube", href: "https://youtube.com/tuCanal" },
          ]}
          imagen={jardinImagen1}
          imagenAlt="Docente y niños realizando una actividad artística"
        />
      </div>

      <Sucursal
        titulo="Nuestras sucursales"
        subtitulo="Más información"
        sucursales={[
          {
            nombre: "Jardín Niños Creciendo",
            direccion: "Soler 1570 – Grand Bourg",
            telefono: "Teléfono 02320 – 411000",
            imagen: SucursalImage,
          },
          {
            nombre: "Sede central",
            direccion: "Av. El callao 1328, Grand Bourg",
            telefono: "Atención comercial 02320 – 483000",
            imagen: SucursalImage,
          },
        ]}
      />
    </main>
  );
}

