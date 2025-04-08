"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend
    alert("Mensaje enviado correctamente");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl lg:max-w-7xl lg:mx-auto m-4 bg-white rounded-3xl shadow-contact px-4 py-8 lg:py-24 lg:px-14 flex flex-col lg:flex-row lg:gap-6">
      <div className="w-1/2 hidden lg:block space-y-8">
        <div className="flex items-center mb-8">
          <Image
            src="/logos/isologo.png"
            alt="Logo Cooperativa Telefónica"
            width={287}
            height={42}
          />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          ¿Tenés alguna duda?
        </h1>

        <p className="text-[#1C1F23] opacity-75 mb-8 lg:text-xl/6 font-medium text-balance">
          Completá el formulario y contanos en qué podemos ayudarte. Ya sea una
          consulta, una sugerencia o un reclamo, tu mensaje es importante para
          nosotros.
        </p>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-center mb-4">
          <div className="flex-shrink-0">
            <Image
              src="/logos/imagotipo.png"
              alt="Logo Cooperativa Telefónica"
              width={185}
              height={28}
              className="h-7"
            />
          </div>
          {/*  <div className="ml-4">
       
        </div> */}
        </div>

        <h2 className="text-2xl lg:text-4xl font-bold text-[#232527] mb-4 text-center">
          ¿Tenés alguna duda? Completa el formulario
        </h2>

        <p className="text-[#232527] mb-8 opacity-75 text-center">
          Completá el formulario y contanos en qué podemos ayudarte
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-3 lg:w-1/2">
        <div>
          <label
            htmlFor="nombre"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Tu nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre..."
            className="w-full px-4 py-2 lg:py-3.5 border border-[#7F8A91] rounded-full cursor-pointer hover:bg-green-100 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium focus:bg-blue-100 focus:ring-[#7F8A91]"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingrese su correo electrónico...."
            className="w-full px-4 py-2 lg:py-3.5 border border-[#7F8A91] rounded-full cursor-pointer hover:bg-green-100 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium focus:bg-blue-100 focus:ring-[#7F8A91]"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Tu mensaje
          </label>
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Enviar mensaje..."
            className="w-full px-4 py-2 lg:py-3.5 border border-[#7F8A91] rounded-full cursor-pointer hover:bg-green-100 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium focus:bg-blue-100 focus:ring-[#7F8A91]"
          />
        </div>

        <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            className="px-8 lg:px-6 lg:text-lg mt-4 w-full lg:w-min py-3 text-center text-nowrap bg-[#1C1F23] text-white rounded-2xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
