import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = (props) => {
  const [active, setActive] = useState(false);

  return (
    <MenuContext.Provider value={{ active, setActive }} >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
