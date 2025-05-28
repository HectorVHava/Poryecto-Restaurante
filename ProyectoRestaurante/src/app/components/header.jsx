import React from 'react';
import SidebarMenu from './menu'; // Asegúrate de tener bien la ruta

const Header = ({ name, role, logoUrl }) => {
  const user = {
    name,
    role,
    image: '/usuario.jpg', // asegúrate de tener la imagen correcta en public/
  };

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-30">
      {/* Lado izquierdo */}
      <div className="flex items-center gap-4">
        <SidebarMenu user={user} />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Bienvenido, {name}</h2>
          <p className="text-sm text-gray-500 capitalize">{role}</p>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="flex items-center space-x-2">
        <img src={logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="text-xl font-bold text-[#22577A]">Restaurante</span>
      </div>
    </div>
  );
};

export default Header;
