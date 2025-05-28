import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './app/pages/login';
import Dashboard from './app/pages/dashboard';
import Meseros from './app/pages/meseros';
import Mesas from './app/pages/mesas';
import Bebidas from './app/pages/bebidas';
import Comidas from './app/pages/comidas';
import Postres from './app/pages/postres';
import Ordenes from './app/pages/ordenes';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meseros" element={<Meseros title="Meseros" />} />
      <Route path="/mesas" element={<Mesas title="Mesas" />} />
      <Route path="/bebidas" element={<Bebidas title="Bebidas" />} />
      <Route path="/comidas" element={<Comidas title="Comidas" />} />
      <Route path="/postres" element={<Postres title="Postres" />} />
      <Route path="/ordenes" element={<Ordenes title="Órdenes" />} />

    </Routes>
  );
}
