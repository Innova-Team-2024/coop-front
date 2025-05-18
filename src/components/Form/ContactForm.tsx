"use client";

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
    <div className="max-w-[1080px] mx-auto bg-white px-10 py-14 rounded-[32px] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IZQUIERDA */}
      <div className="flex flex-col gap-6">
        {mostrarLogo && (
          <div className="mb-4 hidden md:block">
            <Image
              src={isologoform}
              alt="Logo Cooperativa Telefónica"
              width={287}
              height={42}
            />
          </div>
        )}

        <h2 className="text-3xl font-semibold text-zinc-900 leading-[56px]">
          {titulo}
        </h2>

        <p className="text-xl font-medium text-zinc-900 opacity-75 leading-normal">
          {descripcion}
        </p>

        {(telefono || email) && (
          <>
            <p className="text-2xl font-medium text-[#1C1F23] leading-9">
              Contactanos también por acá:
            </p>

            {telefono && (
              <div className="flex items-center gap-2 text-xl text-black font-medium leading-loose">
                <FaPhoneAlt className="text-black" />
                Teléfono: {telefono}
              </div>
            )}

            {email && (
              <div className="flex items-center gap-2 text-xl text-black font-medium leading-loose">
                <FaEnvelope className="text-black" />
                Email: {email}
              </div>
            )}
          </>
        )}

        <p className="text-xl font-medium text-[#1C1F23] opacity-75 leading-normal">
          {horario}
        </p>
      </div>

      {/* DERECHA: FORMULARIO */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-[#1C1F23] mb-2">
            Nombre
          </label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresá tu nombre..."
            className="w-full px-6 py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-[#1C1F23] mb-2">
            Correo electrónico
          </label>
          <input
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresá tu correo electrónico..."
            className="w-full px-6 py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-[#1C1F23] mb-2">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribinos tu consulta o pedido de inscripción..."
            className="w-full h-40 px-6 py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91] resize-none"
          />
        </div>

        <div className="flex justify-start">
          <PrimaryButton type="submit" size="lg" rounded="2xl">
            Enviar mensaje
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
