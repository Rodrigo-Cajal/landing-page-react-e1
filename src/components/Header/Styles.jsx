import styled from "styled-components";

export const LogoImg = styled.img`
  display: flex;
  height: 3.5rem;
  width: 3.5rem;
`;

export const HeaderContainer = styled.div`
  height: 60px;
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.1rem #39a7ff33;
  font-weight: var(--font-weight-secondary);
  padding: 1rem 4rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const LinksMenu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconMenuAndCart = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 1rem;
`;

export const MenuIcon = styled.div`
  padding: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CartIcon = styled.div`
  padding: 0.5rem;
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--primary);
    padding: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    a {
      display: block;
      margin-bottom: 0.5rem;
      color: white;
      text-decoration: none;
    }
  }
`;

export const Nav = styled.div`
  .activo {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 63px;
      left: 0;
      right: 0;
      background-color: #000;
      padding: 10px;
      border-top: solid 1px #dbdfea3b;
    }
  }
`;
