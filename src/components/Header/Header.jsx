import { LogoImg } from "../Header/Styles";
import { HeaderContainer } from "../Header/Styles";
import { IconMenuAndCart } from "../Header/Styles";
import { MenuIcon } from "../Header/Styles";
import { CartIcon } from "../Header/Styles";
import { LinksMenu } from "../Header/Styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <a href="/#">
          <LogoImg src="src/images/logo-atlas.svg" alt="Logo Atlas" />
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
        <img src="../../../src/images/cart.png" alt="carrito"/>
        </a>
        </CartIcon>
        <MenuIcon>
        <a href="/#">
        <img src="../../../src/images/menu.png" alt="menu"/>
        </a>
      </MenuIcon>
      </IconMenuAndCart>
    </HeaderContainer>
  );
};
