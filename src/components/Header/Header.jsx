// Header.jsx
import React, {useContext} from 'react';
import { LogoImg, HeaderContainer, LinksMenu, IconMenuAndCart, MenuIcon, CartIcon } from "./Styles";
import { IoMenu, IoMdCart } from "react-icons/io5";
import { MenuProvider } from '../../context/menuHamb';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuProvider);

  return (
    <HeaderContainer>
      <div>
        <a href="/#">
          <LogoImg src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232046/landing-react/rllakaj3koc6tolblmne.svg" alt="Logo Atlas" />
        </a>
      </div>
      <div>
        <nav>
          <LinksMenu>
            <li>
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#">Nosotros</a>
            </li>
            <li>
              <a href="/#">Productos</a>
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
        <MenuIcon>
          <a href="/#" onClick={toggleMenu}>
            <IoMenu />
          </a>
        </MenuIcon>
      </IconMenuAndCart>
      {isMenuOpen && (
        <div className="mobile-menu">
          {/* Aquí puedes agregar tus elementos de menú para la versión móvil */}
          <a href="/#">Inicio</a>
          <a href="/#">Nosotros</a>
          <a href="/#">Productos</a>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
