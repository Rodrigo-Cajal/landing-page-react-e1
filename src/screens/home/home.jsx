import React from "react";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { CategoryWidget } from "../../components/Categories/Category_widget/Category_widget";
import { ProductsWidget } from "../../components/Productos/Products_widget/Products_widget";
import { Footer } from "../../components/Footer/Footer";
import { MenuProvider } from './Header/MenuContext';

export const Home = () => {
  return (
    <>
    <MenuProvider>
      <div>
  <Header/>
    <Hero/>
    <AboutUs/>
    <CategoryWidget/>
    <ProductsWidget/>
  <Footer/>
  </div>
    </MenuProvider>
  </>
  )
};
