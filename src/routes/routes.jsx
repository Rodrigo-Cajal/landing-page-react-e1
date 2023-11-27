import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from '../screens/home/home';
import { AboutUs } from '../screens/aboutUs/aboutUs';
import { Contact } from '../screens/contact/contact';
import { Products } from '../screens/products/products';

export const ContainerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
