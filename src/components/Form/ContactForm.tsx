
'use client';

import { useState, FormEvent } from "react";
import Image from "next/image";
import { isologoform } from "@/public";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface ContactFormProps {
  titulo: string;
  descripcion: string;
  horario: string;
  mostrarLogo?: boolean;
  telefono?: string;
  email?: string;
}

export default function ContactForm({
  titulo,
  descripcion,
  horario,
  mostrarLogo = true,
  telefono,
  email,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
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
    <div className="max-w-[1080px] mx-auto px-4 sm:px-10 py-8 sm:py-14 bg-white rounded-[32px] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IZQUIERDA */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
        {mostrarLogo && (
          <div className="mb-4 flex justify-center md:justify-start">
            <Image
              src={isologoform}
              alt="Logo Cooperativa Telefónica"
              width={200}
              height={42}
              className="md:w-[287px]"
            />
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 leading-[40px] sm:leading-[56px]">
          {titulo}
        </h2>

        <p className="text-base sm:text-xl font-medium text-zinc-900 opacity-75 leading-normal">
          {descripcion}
        </p>

        {(telefono || email) && (
          <>
            <p className="text-lg sm:text-2xl font-medium text-[#1C1F23] leading-7 sm:leading-9">
              Contactanos también por acá:
            </p>

            {telefono && (
              <div className="flex items-center gap-2 text-base sm:text-xl text-black font-medium leading-loose">
                <FaPhoneAlt className="text-black" />
                Teléfono: {telefono}
              </div>
            )}

            {email && (
              <div className="flex items-center gap-2 text-base sm:text-xl text-black font-medium leading-loose">
                <FaEnvelope className="text-black mt-1 text-xl min-w-[24px]" />
                <span>
                  <span className="mr-1">Email:</span>
                  <span className="font-bold">{email}</span>
                </span>
              </div>
            )}
          </>
        )}

        <p className="text-base sm:text-xl font-medium text-[#1C1F23] opacity-75 leading-normal">
          {horario}
        </p>
      </div>

      {/* DERECHA: FORMULARIO */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2">
            Nombre
          </label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresá tu nombre..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2">
            Correo electrónico
          </label>
          <input
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresá tu correo electrónico..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]"
          />
        </div>

        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribinos tu consulta o pedido de inscripción..."
            className="w-full h-32 sm:h-40 px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91] resize-none"
          />
        </div>

        <div className="flex justify-center md:justify-start">
          <PrimaryButton type="submit" size="lg" rounded="2xl">
            Enviar mensaje
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
