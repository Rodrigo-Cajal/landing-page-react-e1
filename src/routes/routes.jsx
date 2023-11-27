import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from '../screens/home/home';
import { Nosotros } from '../screens/nosotros/nosotros';
import { Contacto } from '../screens/contacto/contacto';
import { Productos } from '../screens/productos/productos';

export const ContainerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nostros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="productos" element={<Productos />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  );
};
