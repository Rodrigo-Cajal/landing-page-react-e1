import React from 'react';
import { LogoImg, HeaderContainer, IconMenuAndCart, MenuIcon, CartIcon, LinksMenu } from './HeaderStyles';
import { IoMenu, IoMdCart } from 'react-icons/io5';
import { useMenuHamb } from '../context/MenuHambContext';

export const Header = () => {
  const { toggleMenu } = useMenuHamb();

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
    </HeaderContainer>
  );
};

export default Header;
