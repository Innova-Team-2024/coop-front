"use client";

import { useState, FormEvent, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  email?: string;
  password?: string;
}

export default function LoginForm({
  email = "",
  password = "",
}: LoginFormProps) {
  const [formData, setFormData] = useState({ email, password });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAllUsersAndStoreId = async () => {
      try {
        const usersRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users`
        );

        if (!usersRes.ok) {
          console.error(
            "No se pudo obtener la lista de usuarios al cargar la página."
          );
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const users: any[] = await usersRes.json();

        const targetUser = users[0];

        if (targetUser && targetUser.id) {
          localStorage.setItem("user_id", targetUser.id.toString());
          console.log(
            "ID del primer usuario de /users guardado en localStorage al cargar:",
            targetUser.id
          );
        } else {
          console.warn(
            "No se encontraron usuarios o ID no disponible en la carga inicial."
          );
        }
      } catch (error) {
        console.error(
          "Error al obtener datos de usuarios en la carga inicial:",
          error
        );
      }
    };

    fetchAllUsersAndStoreId();
  }, []);

  const validateEmail = (value: string) => {
    if (!value) return "El correo es obligatorio";
    if (!/\S+@\S+\.\S+/.test(value)) return "Correo no válido";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const errorMsg = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: errorMsg }));
    }

    if (name === "password") {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validateOnSubmit = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    newErrors.email = validateEmail(formData.email);
    if (newErrors.email) valid = false;

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateOnSubmit()) return;

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          toastr.error("Credenciales incorrectas. Intente nuevamente.");
        } else {
          toastr.error(
            "Error al intentar iniciar sesión. Inténtelo más tarde."
          );
        }
        return;
      } 

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("auth_token", data.token);
        console.log("Token JWT guardado en localStorage.");
      }

      toastr.success("Ingresando a la página principal");
      router.push("/");

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error(error);
      toastr.error("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 px-3">{errors.password}</p>
        )}
      </div>

      <div className="hidden lg:block">
        <button
          className="text-base underline cursor-pointer"
          type="button"
          onClick={() => router.push("/recovery")}
        >
          Olvidé mi contraseña
        </button>
      </div>

      <div className="flex justify-center md:justify-start">
        <PrimaryButton
          className="w-156 shadow-xl"
          type="submit"
          size="lg"
          rounded="2xl"
          disabled={loading}
        >
          {loading ? "Verificando..." : "Iniciar sesión"}
        </PrimaryButton>
      </div>
    </form>
  );
}
