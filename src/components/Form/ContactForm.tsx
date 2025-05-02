"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { isologoform } from "@/public";
/* import MainButton from "../Buttons/MainButton"; */
/* import PrimaryButton from "../Buttons/PrimaryButton"; */

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
    <div className="max-w-4xl lg:max-w-7xl lg:mx-auto lg:mt-[72px] lg:mb-14 mx-4 bg-white rounded-3xl lg:rounded-[32px] shadow-contact px-4 py-8 lg:py-32 lg:px-16 flex flex-col lg:flex-row lg:gap-6">
      <div className="w-1/2 hidden lg:block space-y-8">
        <div className="flex items-center mb-8">
          <Image
            src={isologoform}
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
        <p className="text-[#1C1F23] opacity-75 mb-8 lg:text-xl/6 font-medium text-balance">
          Respondemos de lunes a viernes, entre las 8 y las 16 h. <br /> ¡Te
          vamos a estar leyendo!
        </p>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-center mb-4">
          <div className="flex-shrink-0">
            <Image
              src={isologoform}
              alt="Logo Cooperativa Telefónica"
              width={185}
              height={28}
              className="h-7 opacity-75"
            />
          </div>
        </div>

        <h4 className="text-2xl lg:text-4xl font-bold text-[#232527] mb-4 text-center flex flex-col">
          ¿Tenés alguna duda?
        </h4>

        <p className="text-[#232527] font-normal mb-8 opacity-75 text-center leading-5">
          Completá el formulario y contanos en qué podemos ayudarte. Respondemos
          de lunes a viernes, entre las 8 y las 16h.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-3 lg:w-1/2">
        <div>
          <label
            htmlFor="nombre"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresá tu nombre..."
            className="w-full px-4 py-2 lg:py-3.5 h-11 border border-[#AAB2B6] rounded-full cursor-pointer hover:bg-blue-50/40 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium placeholder:text-[#7F8A91] focus:bg-blue-100 focus:ring-[#7F8A91]"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresá tu correo electrónico..."
            className="w-full px-4 py-2 h-11 lg:py-3.5 border border-[#AAB2B6] rounded-full cursor-pointer hover:bg-blue-50/40 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium placeholder:text-[#7F8A91] focus:bg-blue-100 focus:ring-[#7F8A91]"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="block font-semibold text-sm lg:text-lg text-[#232527] mx-3 mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Contanos tu consulta, sugerencia o lo que quieras comunicar..."
            className="w-full px-4 py-3 lg:py-3.5 h-40 border border-[#AAB2B6] rounded-3xl cursor-pointer hover:bg-blue-50/40 focus:outline-none focus:ring-2 placeholder:font-semibold placeholder:text-sm lg:placeholder:text-base lg:placeholder:font-medium placeholder:text-[#7F8A91] focus:bg-blue-100 focus:ring-[#7F8A91] resize-none"
          />
        </div>

        <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            className="px-8 lg:px-6 text-lg mt-2 w-full lg:w-min py-3 text-center text-nowrap shadow-md bg-[#1C1F23] text-white rounded-2xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-medium"
          >
            Enviar mensaje
          </button>
          {/* <MainButton
            type="submit"
            className="px-8 lg:px-6 text-lg mt-2 w-full lg:w-min py-3 text-center text-nowrap shadow-md font-medium"
          >
            Enviar mensaje
          </MainButton>
          <PrimaryButton size="md">Quiero saber más</PrimaryButton> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
