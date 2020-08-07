import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink exact to="/">
          <img
            id="logo-firma"
            height="30"
            src={require("../../images/firma.png")}
            alt="Firma HC"
            border="0"
          />
        </NavLink>
        <Items />
      </div>
    </nav>
  );
}
