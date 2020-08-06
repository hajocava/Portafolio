import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "./Context";

export default function Items() {
  const { active, setActive } = useContext(MenuContext);

  return (
    <ul className={`items ${active && 'active'}`}>
      <li>
        <NavLink exact to="/" onClick={() => setActive(false)}>
          Work
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about" onClick={() => setActive(false)}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/resume" onClick={() => setActive(false)}>
          Resume
        </NavLink>
      </li>
    </ul>
  );
}
