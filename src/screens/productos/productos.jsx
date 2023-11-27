import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CategoryWidget } from "../../components/Categories/Category_widget/Category_widget";
import { ProductsWidget } from "../../components/Productos/Products_widget/Products_widget";

export const Productos = () => {
    return (
      <>
    <Header/>
    <CategoryWidget/>
    <ProductsWidget/>
    <Footer/>
    </>
    )
  };
