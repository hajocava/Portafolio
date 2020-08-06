import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "./Context";
import anime from "animejs";
import WindowDimention from "../../WindowDimention";

export default function Items() {
  const { active, setActive } = useContext(MenuContext);

  const { width } = WindowDimention();

  useEffect(() => {
    if (width < 768) {
      // Animations for mobile devices
      if (active) {
        anime({
          targets: ".items li",
          opacity: [0, 1],
          translateY: [60, 0],
          easing: "easeInOutQuad",
          duration: 600,
          delay: function (el, i, l) {
            return i * 100;
          },
        });
      } else {
        anime({
          targets: ".items li",
          opacity: [1, 0],
          translateY: [0, -60],
          easing: "easeInOutQuad",
          duration: 1000,
          delay: function (el, i, l) {
            return i * 50;
          },
        });
      }
    } else {
      // Animations for desktop
      anime({
        targets: ".items li",
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: "easeInOutQuad",
        duration: 600,
        delay: 1200
      });
    }
  }, [active, width]);

  return (
    <ul className={`items ${active && "active"}`}>
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
