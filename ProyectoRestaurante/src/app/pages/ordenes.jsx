import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';

const Ordenes = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Menu />
      <div className="flex-1">
        <Header
          name="Carlos"
          role="Administrador"
          logoUrl="/logo.png"
          userImage="/usuario.jpg"
        />

        <div className="p-6">
          {/* Barra de búsqueda y botones */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Buscar orden..."
                className="border rounded px-3 py-2"
              />
              <button className="bg-[#22577A] text-white px-4 py-2 rounded hover:bg-[#1b4661] transition">Buscar</button>
            </div>

            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Agregar</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Editar</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Eliminar</button>
            </div>
          </div>

          {/* Tabla de datos */}
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-medium text-gray-500">ID</th>
                  <th className="px-6 py-3 font-medium text-gray-500">Mesero</th>
                  <th className="px-6 py-3 font-medium text-gray-500">Mesa</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí iría el mapeo de datos desde el backend */}
                <tr>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">Luis Hernández</td>
                  <td className="px-6 py-4">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordenes;