import React, {useContext} from "react";
import { LogoImg } from "../Header/Styles";
import { HeaderContainer } from "../Header/Styles";
import { IconMenuAndCart } from "../Header/Styles";
import { IoMenu } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { MenuIcon } from "../Header/Styles";
import { CartIcon } from "../Header/Styles";
import { LinksMenu } from "../Header/Styles";
import { MenuHambContext } from "../../context/menuHamb";

export const Header = () => {
  const menuValue= useContext(MenuHambContext)

  if (menuValue.menu)
  document.body.style.overflow ="hidden";
  else
  document.body.style.overflow ="auto";
  
  return(
      
    <HeaderContainer>
      <div>
        <a href="/#">
          <LogoImg src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232046/landing-react/rllakaj3koc6tolblmne.svg" alt="Logo Atlas" />
        </a>
      </div>
      <div>
        <nav>
          <LinksMenu className={`${menuValue.menu ? "activo": ""}`}>
            <li>
              <a to="/" onClick={()=>menuValue.closeMenu()}>Inicio</a>
            </li>
            <li>
              <a to="nosotros" onClick={()=>menuValue.closeMenu()}>Nosotros</a>
            </li>
            <li>
              <a to="productos" onClick={()=>menuValue.closeMenu()}>Productos</a>
            </li>
            <li>
              <a to="contacto" onClick={()=>menuValue.closeMenu()}>Contacto</a>
            </li>
          </LinksMenu>
        </nav>
        </div>
        <IconMenuAndCart>
        <CartIcon>
        <a href="/#">
        <IoMdCart />
        </a>
        </CartIcon>
        <MenuIcon onClick={()=>menuValue.switchMenu()}>
        <a href="/#">
        <IoMenu />
        </a>
      </MenuIcon>
      </IconMenuAndCart>
    </HeaderContainer>
  );
};
