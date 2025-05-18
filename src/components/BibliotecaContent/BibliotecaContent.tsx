
export default function BibliotecaContent() {
  return (
    <section className="w-full px-6 md:px-28 pt-14 pb-28 flex flex-col items-center gap-12">
      {/* TÍTULO PRINCIPAL */}
      <div className="text-center text-5xl font-semibold leading-[56px] text-[#222427]">
        Defendamos lo nuestro
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full">
        {/* Cuadrados decorativos + video */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 bg-orange-500 rounded-xl" />
          <div className="w-40 h-40 bg-indigo-800 rounded-xl" />
          <video
            src="/videoBiblo.mp4"
            width={670}
            height={378}
            className="rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* TEXTO DESCRIPTIVO */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-2xl font-medium text-[#222427] leading-loose">
            Biblioteca
            <br />
            <span className="text-3xl font-semibold leading-10">
              “Segundo Severino Lago”
            </span>
          </div>
          <p className="text-base font-normal text-[#222427] leading-tight text-justify">
            El sueño de contar con una biblioteca comunitaria, impulsado por nuestras socias Amanda Acosta y María Capdevila, se hizo realidad gracias al apoyo incondicional de su fundador, Segundo Severino Lago. El 23 de enero de 2006, inauguramos este espacio acompañados por el consejo administrativo de nuestra cooperativa, autoridades y socios.
            <br /><br />
            Iniciamos con apenas 400 libros, y hoy la biblioteca alberga más de 3.400 unidades, muchas de ellas donadas generosamente por nuestros socios. Este espacio nació para brindar a la comunidad un lugar de acceso a la lectura, el conocimiento, el intercambio cultural y el estudio.
            <br /><br />
            ¡Los invitamos a sumarse y disfrutar de este hermoso espacio! Siempre estamos esperando nuevos lectores y, por supuesto, nuevos miembros que deseen compartir y aprender con nosotros.
            <br /><br />
            Esperamos a muchos más nuevos lectores que siempre serán bienvenidos a participar de nuestra hermosa biblioteca.
          </p>
        </div>
      </div>
    </section>
  );
}