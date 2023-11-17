import { LogoImg } from "../Header/Styles";
import { HeaderContainer } from "../Header/Styles";
import { IconMenuAndCart } from "../Header/Styles";
import { IoMenu } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
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
        <IoMdCart value={{ size: "2em" }} />
        </a>
        </CartIcon>
        <MenuIcon>
        <a href="/#">
        <IoMenu value={{ size: "2em" }} />
        </a>
      </MenuIcon>
      </IconMenuAndCart>
    </HeaderContainer>
  );
};
