import React, { createContext, useContext, useState } from 'react';

const MenuHambContext = createContext();

export const useMenuHamb = () => {
  return useContext(MenuHambContext);
};

export const MenuHambProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuHambContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuHambContext.Provider>
  );
};