import React, { useContext } from "react";
import { MenuContext } from "./Context";
import Burger from "./Burger";
import Items from "./Items";
import Social from "./Social";
import "./styles.sass";

export default function Navbar() {
  const { active } = useContext(MenuContext);

  return (
    <nav className="navbar">
      <div className={`container ${active && "active"}`}>
        <Burger />
        <Social />
        <Items />
      </div>
    </nav>
  );
}
