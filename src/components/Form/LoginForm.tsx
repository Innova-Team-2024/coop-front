'use client';

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";

interface LoginFormProps {
  email?: string;
  password?: string;
}

export default function LoginForm({ email = "", password = "" }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email,
    password,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Validar formato de email en tiempo real
  const validateEmail = (value: string) => {
    if (!value) return "El correo es obligatorio";
    if (!/\S+@\S+\.\S+/.test(value)) return "Correo no válido";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      // Validar email mientras escribe
      const errorMsg = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: errorMsg }));
    }

    if (name === "password") {
      // Limpia error de contraseña si empieza a escribir
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validateOnSubmit = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email (por si no lo completó)
    newErrors.email = validateEmail(formData.email);
    if (newErrors.email) valid = false;

    // Contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateOnSubmit()) return;

    console.log("Enviando datos:", formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 gap-1 mt-8">
      {/* Campo Email */}
      <div>
        <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
          Correo electrónico
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresar correo electrónico..."
          className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl transition-all duration-300 ${
            errors.email ? "outline-red-500" : "outline-[#AAB2B6]"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 px-3">{errors.email}</p>
        )}
      </div>

      {/* Campo Contraseña */}
      <div>
        <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
          Contraseña
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresar contraseña..."
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl pr-12 transition-all duration-300 ${
              errors.password ? "outline-red-500" : "outline-[#AAB2B6]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 px-3">{errors.password}</p>
        )}
      </div>

      <div className="hidden lg:block">
        <p className="text-base underline cursor-pointer">Olvidé mi contraseña</p>
      </div>

      <div className="flex justify-center md:justify-start">
        <PrimaryButton
          className=" w-156 shadow-xl "
          type="submit"
          size="lg"
          rounded="2xl"
        >
          Iniciar sesión
        </PrimaryButton>
      </div>
    </form>
  );
}
