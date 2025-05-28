import React from 'react';
import Header from '../components/header'; // Asegúrate de tener bien la ruta
import { useNavigate } from 'react-router-dom';

const options = [
  { label: 'Meseros', img: '/icons/meseros.png', route: '/meseros' },
  { label: 'Mesas', img: '/icons/mesas.png', route: '/mesas' },
  { label: 'Bebidas', img: '/icons/bebidas.png', route: '/bebidas' },
  { label: 'Comidas', img: '/icons/comidas.png', route: '/comidas' },
  { label: 'Postres', img: '/icons/postres.png', route: '/postres' },
  { label: 'Ordenes', img: '/icons/ordenes.png', route: '/ordenes' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header
        name="Carlos"
        role="Administrador"
        logoUrl="/logo.png"
        userImage="/usuario.jpg"
      />

      {/* Contenido principal */}
      <main className="p-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 text-xl lg:grid-cols-4 gap-15 p-10 justify-center max-w-5xl mx-auto">
    {options.map(({ label, img, route }) => (
      <button
        key={label}
        onClick={() => navigate(route)}
        className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition"
      >
        <img src={img} alt={label} className="w-20 h-20 object-contain mb-4" />
        <span className="text-md font-medium text-gray-700">{label}</span>
      </button>
    ))}
  </div>
</main>
    </div>
  );
};

export default Dashboard;
