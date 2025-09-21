'use client';

import { useState, FormEvent } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

interface LoginFormProps{
    email: string;
    password: string;
}

export default function LoginForm({
    email,
    password
}: LoginFormProps){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando datos:", formData);
        setFormData({email: "", password: ""});
    };

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return(
    <form onSubmit={handleSubmit} className="space-y-6 gap-1">
        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
            Correo electrónico
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresar correo electrónico..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl"
          />
        </div>
        <div>
          <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
            Contraseña
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresar contraseña..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 outline-[#AAB2B6] bg-white rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl"
          />
        </div>
        <div className="hidden lg:block">
          <p className="text-base underline ">Olvidé mi contraseña</p>
        </div>
        <div className="flex justify-center md:justify-start ">
                  <PrimaryButton className="w-full shadow-xl" type="submit" size="lg" rounded="2xl">
                    Iniciar sesión
                  </PrimaryButton>
        </div>
        </form>
  )
 
}