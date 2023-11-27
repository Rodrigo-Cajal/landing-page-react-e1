import React, {createContext, useState} from "react";

export const MenuHambContext = createContext ();

export const ContextMenuHamb = ({children})=>{

    const [menu, setMenu] = useState(false)

    const switchMenu = ()=>{

        if (menu === false)
        setMenu (true)
        if (menu === true)
        setMenu (false)
    }

    const closeMenu = ()=>{

        if (menu === true)
        setMenu (false)
    }

    return(

        <MenuHambContext.Provider value={{menu, switchMenu, closeMenu}}>
            {children}
        </MenuHambContext.Provider>
    )

}