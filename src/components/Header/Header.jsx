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
        <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232046/landing-react/tump1uvnzzdrsegmv28r.png" alt="carrito"/>
        </a>
        </CartIcon>
        <MenuIcon>
        <a href="/#">
        <img src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232048/landing-react/yn8wd99yceipbnyj11eg.png" alt="menu"/>
        </a>
      </MenuIcon>
      </IconMenuAndCart>
    </HeaderContainer>
  );
};
