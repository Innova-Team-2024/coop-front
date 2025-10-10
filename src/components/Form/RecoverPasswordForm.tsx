'use client';

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import PrimaryButton from "../Buttons/PrimaryButton";

interface RecoverFormProps {
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export default function RecoverPasswordForm({ email = "", newPassword = "", confirmPassword = "" }: RecoverFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email,
    newPassword,
    confirmPassword,
  });

  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Valida email
  const validateEmail = (value: string) => {
    if (!value) return "El correo es obligatorio";
    if (!/\S+@\S+\.\S+/.test(value)) return "Correo no válido";
    return "";
  };

  // Manejar cambios
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validar en submit
  const validateOnSubmit = () => {
    let valid = true;
    const newErrors = { email: "", newPassword: "", confirmPassword: "" };

    newErrors.email = validateEmail(formData.email);
    if (newErrors.email) valid = false;

    if (!formData.newPassword) {
      newErrors.newPassword = "La nueva contraseña es obligatoria";
      valid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Debe tener al menos 6 caracteres";
      valid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Debe confirmar la contraseña";
      valid = false;
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateOnSubmit()) return;

    console.log("Recuperar contraseña:", formData);
    setFormData({ email: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 gap-1 mt-8">
      {/* Email */}
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

      {/* Nueva contraseña */}
      <div>
        <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
          Nueva contraseña
        </label>
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Ingresar nueva contraseña..."
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl pr-12 transition-all duration-300 ${
              errors.newPassword ? "outline-red-500" : "outline-[#AAB2B6]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1 px-3">{errors.newPassword}</p>
        )}
      </div>

      {/* Confirmar contraseña */}
      <div>
        <label className="block text-sm sm:text-lg font-semibold text-[#1C1F23] mb-2 px-3">
          Confirmar contraseña
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Vuelva a ingresar la contraseña..."
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 border outline outline-1 rounded-3xl text-sm placeholder:text-[#7F8A91] shadow-xl pr-12 transition-all duration-300 ${
              errors.confirmPassword ? "outline-red-500" : "outline-[#AAB2B6]"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1 px-3">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Botones */}
      <div className="flex items-center gap-3 ml-5 mr-5">
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="flex items-center text-base font-medium text-[#1C1F23] hover:text-[#5A5A5A] transition-colors duration-200 lg:mr-5"
        >
          <MdOutlineKeyboardArrowLeft size={22} />
          <span>Volver</span>
        </button>

        <PrimaryButton
          className="ml-auto shadow-xl lg:ml-0"
          type="submit"
          size="lg"
          rounded="2xl"
        >
          Confirmar
        </PrimaryButton>
      </div>
    </form>
  );
}
