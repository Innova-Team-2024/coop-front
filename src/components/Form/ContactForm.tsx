'use client';

import { useState, FormEvent } from "react";
import Image from "next/image";
// 💡 Usamos toastr solo para feedback de servidor
import toastr from "toastr";
import "toastr/build/toastr.min.css"; // Asegúrate de que los estilos estén importados
import { isologoform } from "../../../public";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface ContactFormProps {
  titulo: string;
  descripcion: string;
  horario: string;
  mostrarLogo?: boolean;
  telefono?: string; 
  email?: string; 
  whatsapp?: string; 
}

interface FormData {
    nombre: string;
    correo: string;
    mensaje: string;
}

interface FormErrors {
    nombre: string;
    correo: string;
    mensaje: string;
}


const validateEmail = (value: string): string => {
  if (!value) return "El correo electrónico es obligatorio.";
  if (!/\S+@\S+\.\S+/.test(value)) return "Correo electrónico no válido.";
  return "";
};

function buildTelHref(telefono?: string) {
  if (!telefono) return undefined;
  const first = telefono.split("//")[0].trim().replace(/\s+/g, "");
  return `tel:${first.replace(/[^0-9+]/g, "")}`;
}

function buildWhatsHref(whatsapp?: string) {
  if (!whatsapp) return undefined;
  let digits = whatsapp.replace(/\D/g, "");
  if (!digits.startsWith("54")) {
    digits = `54${digits.replace(/^0+/, "")}`;
  }
  return `https://wa.me/${digits}`;
}

export default function ContactForm({
  titulo,
  descripcion,
  horario,
  mostrarLogo = true,
  telefono,
  email,
  whatsapp,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({ 
    nombre: "", 
    correo: "", 
    mensaje: "" 
  });
  const [errors, setErrors] = useState<FormErrors>({ nombre: "", correo: "", mensaje: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "correo") {
      const errorMsg = validateEmail(value);
      setErrors((prev) => ({ ...prev, correo: errorMsg }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = { nombre: "", correo: "", mensaje: "" };

    // Validación de Nombre
    if (!formData.nombre.trim()) {
        newErrors.nombre = "El nombre es obligatorio.";
        isValid = false;
    }

    // Validación de Correo
    const emailErrorMsg = validateEmail(formData.correo);
    if (emailErrorMsg) {
        newErrors.correo = emailErrorMsg;
        isValid = false;
    }
    
    // Validación de Mensaje
    if (!formData.mensaje.trim()) {
        newErrors.mensaje = "El mensaje es obligatorio.";
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toastr.clear();

    if (!validateForm()) {
        toastr.error("Por favor, corregí los campos marcados en rojo.");
        return;
    }
    
    // 1. OBTENEMOS la URL base directamente en el submit.
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!apiBaseUrl) {
      toastr.error("Error de configuración. La URL de la API no está definida.");
      console.error("Missing NEXT_PUBLIC_API_URL environment variable.");
      return;
    }
    
    // 2. CONSTRUIMOS el endpoint final aquí.
    const mailEndpoint = `${apiBaseUrl}/mail/contact`;


    setIsLoading(true);

    try {
      // 3. USAMOS el endpoint CONSTRUIDO.
      const response = await fetch(mailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Intenta obtener un mensaje de error del backend
        const errorText = await response.text();
        let errorMessage = `Error en el servidor: ${response.status}`;
        try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorMessage;
        } catch {
            errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      toastr.success("Mensaje enviado correctamente. ¡Pronto te contactaremos!");
      setFormData({ nombre: "", correo: "", mensaje: "" });
      setErrors({ nombre: "", correo: "", mensaje: "" }); 

    } catch (err) {
      const message = err instanceof Error ? err.message : "Un error desconocido ocurrió.";
      console.error("Error al enviar el formulario:", err);
      toastr.error(`Error al enviar el mensaje. Intentalo de nuevo. (${message})`);
    } finally {
      setIsLoading(false);
    }
  };

  const telHref = buildTelHref(telefono);
  const waHref = buildWhatsHref(whatsapp);

  return (
    <div className="max-w-[1080px] mx-auto px-4 sm:px-10 py-8 sm:py-14 bg-white rounded-[32px] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IZQUIERDA (Contenido estático) */}
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

        {(telefono || email || whatsapp) && (
          <>
            <p className="text-lg sm:text-2xl font-medium text-[#1C1F23] leading-7 sm:leading-9">
              Contactanos también por acá:
            </p>

            {/* Teléfono */}
            {telefono && (
              <div className="flex items-center gap-2 text-base sm:text-xl text-black font-medium leading-loose">
                <FaPhoneAlt className="text-black" />
                {telHref ? (
                  <a href={telHref} className="underline">
                    Teléfono: {telefono}
                  </a>
                ) : (
                  <>Teléfono: {telefono}</>
                )}
              </div>
            )}
            
            {/* WhatsApp */}
            {whatsapp && (
              <div className="flex items-center gap-2 text-base sm:text-xl text-black font-medium leading-loose">
                <FaWhatsapp className="text-black" />
                {waHref ? (
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline">
                    WhatsApp: {whatsapp}
                  </a>
                ) : (
                  <>WhatsApp: {whatsapp}</>
                )}
              </div>
            )}
            
            {/* Email */}
            {email && (
              <div className="flex items-center gap-2 text-base sm:text-xl text-black font-medium leading-loose">
                <FaEnvelope className="text-black mt-1 text-xl min-w-[24px]" />
                <a href={`mailto:${email}`} className="font-bold underline">
                  {email}
                </a>
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
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 ${
                errors.nombre ? "outline-red-500" : "outline-[#AAB2B6]"
            } bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]`}
            disabled={isLoading}
          />
          {errors.nombre && (
            <p className="text-sm text-red-500 mt-1 pl-4">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2">
            Correo electrónico
          </label>
          <input
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresá tu correo electrónico..."
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 ${
              errors.correo ? "outline-red-500" : "outline-[#AAB2B6]"
            } bg-white rounded-3xl text-sm placeholder:text-[#7F8A91]`}
            disabled={isLoading}
          />
          {errors.correo && (
            <p className="text-sm text-red-500 mt-1 pl-4">{errors.correo}</p>
          )}
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
            className={`w-full h-32 sm:h-40 px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 ${
                errors.mensaje ? "outline-red-500" : "outline-[#AAB2B6]"
            } bg-white rounded-3xl text-sm placeholder:text-[#7F8A91] resize-none`}
            disabled={isLoading}
          />
          {errors.mensaje && (
            <p className="text-sm text-red-500 mt-1 pl-4">{errors.mensaje}</p>
          )}
        </div>
        
        <div className="flex justify-center md:justify-start">
          <PrimaryButton 
            type="submit" 
            size="lg" 
            rounded="2xl" 
            // Deshabilitar si está cargando o si hay algún error visible
            disabled={isLoading || !!errors.nombre || !!errors.correo || !!errors.mensaje}
          >
            {isLoading ? "Enviando..." : "Enviar mensaje"}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}