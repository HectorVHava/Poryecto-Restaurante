import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    setOpen(false);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="relative z-50">
      {/* Botón menú hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-md hover:bg-gray-200 transition duration-200"
        title="Abrir menú"
      >
        <MenuIcon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Fondo borroso */}
      {open && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar deslizante */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Encabezado del menú */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex items-center gap-3">
            <img
              src={user.image}
              alt="Usuario"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{user.role}</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)}>
            <X className="h-6 w-6 text-gray-600 hover:text-red-600" />
          </button>
        </div>

        {/* Opciones de navegación */}
        <ul className="mt-2">
          {[
            { name: 'Meseros', route: '/meseros' },
            { name: 'Mesas', route: '/mesas' },
            { name: 'Bebidas', route: '/bebidas' },
            { name: 'Comidas', route: '/comidas' },
            { name: 'Postres', route: '/postres' },
            { name: 'Órdenes', route: '/ordenes' },
          ].map(({ name, route }) => (
            <li
              key={name}
              onClick={() => handleNavigate(route)}
              className="px-6 py-3 cursor-pointer hover:bg-[#22577A] hover:text-white transition"
            >
              {name}
            </li>
          ))}

          <li
            onClick={handleLogout}
            className="px-6 py-3 cursor-pointer text-red-600 hover:bg-red-100 transition"
          >
            Cerrar sesión
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
