import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "./Context";
import anime from "animejs";

export default function Items() {
  const [state, setState] = useState(false);
  const { active, setActive } = useContext(MenuContext);

  useEffect(() => {
    const { innerWidth: width } = window;

    if (width < 768) {
      // Animations for mobile devices
      if (active) {
        anime({
          targets: ".items li",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 600,
          delay: function (el, i, l) {
            return i * 150;
          },
        });
      } else {
        anime({
          targets: ".items li",
          opacity: [1, 0],
          easing: "easeInOutQuad",
          duration: 1,
          delay: function (el, i, l) {
            return i * 50;
          },
        });
      }
    } else if(!state) {
      // Animations for desktop
      anime({
        targets: ".items li",
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: "easeInOutQuad",
        duration: 600,
        delay: 1200,
      });
    }

    setState(true);

  }, [active, state]);

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
