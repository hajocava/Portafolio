import React, { useContext, useEffect } from "react";
import { MenuContext } from "./Context";
import { animeIn, animeOut } from "../../animations/NavAnim";
import Burger from "./Burger";
import Items from "./Items";
import Social from "./Social";
import "./styles.sass";

export default function Navbar() {
  const { active } = useContext(MenuContext);

  useEffect(() => {
    active ? animeIn() : animeOut();
  }, [active]);

  return (
    <nav className={`navbar ${active && "active"}`}>
      <Burger />
      <Social />
      <Items />
    </nav>
  );
}
