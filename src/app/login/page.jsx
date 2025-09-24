"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Imagen o logo */}
        <div className="hidden md:flex w-1/2 bg-gray-200 items-center justify-center">
          <span className="text-xl font-bold text-black-600">IMAGEN</span>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-2 text-center">Iniciar Sesión</h1>
          <p className="text-black-500 mb-6 text-center">
            Bienvenido, por favor ingresa tus datos para continuar
          </p>

          <form onSubmit={handleSubmit}>
            {/* Usuario */}
            <label className="block mb-2">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />

            {/* Contraseña con mostrar/ocultar */}
            <label className="block mb-2">Contraseña</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Olvidar contraseña */}
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón ingresar */}
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
            >
              Ingresar
            </button>
          </form>

          {/* Ingreso con Google */}
          <div className="mt-6">
            <button className="w-full border p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Ingresar con Google
            </button>
          </div>

          {/* Registrarse */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
