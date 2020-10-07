import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "./Context";
import anime from "animejs";
import SocialLinks from "../about/Social"

export default function Items() {
  const { active, setActive } = useContext(MenuContext);

  useEffect(() => {
    anime({
      targets: ".items div li",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 600,
      delay: 1200,
    });
  }, []);

  return (
    <ul className={`items ${active && "active"}`}>
      <li className="item">
        <NavLink exact to="/" onClick={() => setActive(false)}>
          Home
        </NavLink>
      </li>
      <li className="item">
        <NavLink exact to="/about" onClick={() => setActive(false)}>
          About
        </NavLink>
      </li>
      <li className="item">
        <NavLink exact to="/resume" onClick={() => setActive(false)}>
          Resume
        </NavLink>
      </li>
      <SocialLinks />
    </ul>
  );
}
