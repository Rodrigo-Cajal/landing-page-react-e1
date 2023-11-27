import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { CategoryWidget } from "../../components/Categories/Category_widget/Category_widget";
import { ProductsWidget } from "../../components/Productos/Products_widget/Products_widget";



export const Home = () => {
  return (
    <>
  <Header/>
    <Hero/>
    <AboutUs/>
    <CategoryWidget/>
    <ProductsWidget/>
  <Footer/>
  </>
  )
};
