import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { CategoryWidget } from "../../components/Categories/Category_widget/Category_widget";
import { ProductsWidget } from "../../components/Productos/Products_widget/Products_widget";



export const Home = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <CategoryWidget/>
    <ProductsWidget/>
  </>
  )
};
