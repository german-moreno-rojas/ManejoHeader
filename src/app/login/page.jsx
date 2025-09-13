"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm border p-6 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>

        <label className="block mb-2">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
