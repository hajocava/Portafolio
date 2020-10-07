import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
import Items from "./Items";
import "./styles.sass";

export default function Navbar() {
  const [scroll, setScroll] = useState(window.pageYOffset);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) setScroll(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scroll > 100 ? "shadow" : ""}`}>
      <div className="container">
        <NavLink exact to="/" id="logo">
          <span className="text-primary">Haziel</span> Castillo
        </NavLink>
        <Burger />
      </div>
      <Items />
    </nav>
  );
}
