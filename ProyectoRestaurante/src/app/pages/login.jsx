import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría tu lógica de validación
    // Por ahora simplemente redirige
    navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?restaurant')`,
      }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-800">
            Inicia sesión en tu cuenta
          </h2>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22577A] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22577A] focus:border-transparent"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-black via-gray-700 to-gray-800 hover:opacity-90 transition"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
