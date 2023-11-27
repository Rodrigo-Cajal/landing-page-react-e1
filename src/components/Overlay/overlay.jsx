import React,{ useContext }  from "react";
import {OverlayContainer} from "./Overlay/styles"
import {  MenuHambContext } from "../../context/menuHamb";


export const Overlay =()=>{

    const menuValue = useContext(MenuHambContext)      
return(
    
<OverlayContainer onClick={menuValue.closeMenu}></OverlayContainer>   

)
    
}