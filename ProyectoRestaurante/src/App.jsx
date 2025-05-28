import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './app/pages/login';
import Dashboard from './app/pages/dashboard';
import CrudView from './app/pages/crudView'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meseros" element={<CrudView title="Meseros" />} />
      <Route path="/mesas" element={<CrudView title="Mesas" />} />
      <Route path="/bebidas" element={<CrudView title="Bebidas" />} />
      <Route path="/comidas" element={<CrudView title="Comidas" />} />
      <Route path="/postres" element={<CrudView title="Postres" />} />
      <Route path="/ordenes" element={<CrudView title="Órdenes" />} />
      <Route path="/usuarios" element={<CrudView title="Usuarios" />} />
    </Routes>
  );
}
