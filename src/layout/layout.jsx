import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Home } from "../screens/home/home";

export  const Layout =({ children })=>{
    return (
<>
    <Header/>
    <Home>
    {children}
    </Home>   
    <Footer/>  
</>
    )
    
    }
