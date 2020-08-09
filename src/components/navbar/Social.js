import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Context";
import anime from "animejs";

export default function Social() {
  const [state, setState] = useState(false);
  const { active } = useContext(MenuContext);

  useEffect(() => {
    const { innerWidth: width } = window;

    if (width < 992) {
      if (active) {
        anime({
          targets: ".icons-social i",
          opacity: [0, 1],
          translateY: [-10, 0],
          easing: "easeInOutQuad",
          duration: 600,
        });
      } else {
        anime({
          targets: ".icons-social i",
          opacity: [1, 0],
          translateY: [0, -10],
          easing: "easeInOutQuad",
          duration: 1,
        });
      }
    } else {
      anime({
        targets: ".icons-social i",
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: "easeInOutQuad",
        duration: 600,
        delay: 1200
      });
    }

    setState(true);
    
  }, [active, state]);

  return (
    <div className={`icons-social ${active && "active"}`}>
      <a
        rel="noopener noreferrer"
        href="https://behance.net/hazielcastillo"
        target="_blank"
      >
        <i className="ri-behance-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/hatrixs/"
        target="_blank"
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/haziel-castillo"
        target="_blank"
      >
        <i className="ri-linkedin-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/hajocava"
        target="_blank"
      >
        <i className="ri-github-line"></i>
      </a>
    </div>
  );
}
