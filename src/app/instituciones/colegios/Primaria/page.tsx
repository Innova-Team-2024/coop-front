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
import {ImagenJardin,ArancelPrimaria,jardinImagen1,NosotrosJardin,SucursalImage} from "@/public";
import { FaUsers, FaFileAlt,FaGraduationCap,FaCamera,} from "react-icons/fa";

export const metadata = {
  title: "Instituto Dr. René Favaloro | Educación primaria en Grand Bourg",
  description:
    "Educación primaria accesible y de calidad, con valores cooperativos y compromiso social. Formación integral para una ciudadanía solidaria.",
};

 export default function Primaria() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Instituciones", href: "/instituciones" },
    { label: "Colegios", href: "/instituciones/colegios" },
    { label: "Primaria", href: "" },
  ];

  const primariaCards = [
    {
      icon: <FaUsers className="text-blue-600" />,
      title: "Nosotros",
      href: "/primaria/nosotros",
      iconBgColor: "bg-blue-50",
    },
    {
      icon: <FaFileAlt className="text-emerald-700" />,
      title: "Aranceles 2025",
      href: "/primaria/aranceles",
      iconBgColor: "bg-emerald-50",
    },
    {
      icon: < FaGraduationCap className="text-orange-300"/>,
      title: "Inscripción",
      href: "/primaria/inscripcion",
      iconBgColor: "bg-stone-50",
    },
    {
      icon: <FaCamera className="text-rose-500" />,
      title: "Redes sociales",
      href: "/primaria/redes",
      iconBgColor: "bg-rose-50",
    },
  ];  
  
  return (
    <main>
        <Breadcrumb items={breadcrumbItems} />

      <Herosection
        title="Instituto “Dr. René Favaloro”"
        description={`Soldado Baigorria 1071, Grand Bourg - Nivel primario
Envianos tu consulta!`}
        buttonText="Solicita información"
        buttonHref="/contacto"
        image={ImagenJardin}
        imageAlt="Cartel de el Instituto Dr. René Favaloro"
      />

      <InfoCardSection  cards={primariaCards}/>
      <NosotrosSection
        titulo="Defendamos nuestros valores"
        textoCompleto={`En nuestro jardín, creemos que cada niño merece crecer en un entorno que lo escuche, lo valore y lo acompañe. Por eso, construimos un espacio educativo basado en el cooperativismo, donde el cuidado, la creatividad, la participación y el trabajo en equipo son parte del día a día. Acompañamos a cada niño con compromiso y calidez, promoviendo su autonomía, el pensamiento crítico y el vínculo con la comunidad. Nuestros educadores son guías atentos que acompañan cada etapa del desarrollo con respeto, fomentando la solidaridad, la honestidad y el deseo de aprender junto a otros. Porque educar, para nosotros, es mucho más que enseñar: es construir juntos un futuro mejor, con coherencia entre lo que decimos y lo que hacemos, y con la certeza de que, cuando crecemos en comunidad, crecemos de verdad.`}
        imagen={NosotrosJardin}
        colorCategoria="text-[#5540A7]"
        colorValor="text-[#0B77FA]"
      />
      <GallerySection />

      <ArancelesCard
        titulo="Aranceles"
        matricula="$ 25.000"
        cuotaActual="$ 35.000"
        cuotaDesde="$ 35.000"
        logo={ArancelPrimaria}
        logoAlt="Logo Instituto Dr. René Favaloro"
      />

      <div className="mt-[100px]">
        <ContactForm
          titulo="¿Consulta o inscripción?"
          descripcion="Completá el formulario y contanos en qué podemos ayudarte. Ya sea para solicitar información, iniciar la inscripción o comunicarte con nosotros, tu mensaje es importante para seguir creciendo juntos."
          telefono="02320-487906 - 02320-414600"
          whatsapp="11 2758-2013"
          email="institutorenefavaloro@cooperativagb.com.ar"
          horario="Lunes a Viernes: 8:30 a 12:00 hs / 13:00 a 16:00 hs"
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
            nombre: "Instituto Dr. René Favaloro",
            direccion: "Soler Baigorria 1071 – Grand Bourg",
            telefono: "Teléfono 02320 – 487906",
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