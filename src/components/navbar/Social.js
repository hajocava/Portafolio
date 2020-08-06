import React, { useContext, useEffect } from "react";
import { MenuContext } from "./Context";
import anime from "animejs";
import WindowDimention from "../../WindowDimention";

export default function Social() {
  const { active } = useContext(MenuContext);

  const { width } = WindowDimention();

  useEffect(() => {
    if (width < 768) {
      if (active) {
        anime({
          targets: ".icons-social img",
          opacity: [0, 1],
          translateY: [-10, 0],
          easing: "easeInOutQuad",
          duration: 600,
        });
      } else {
        anime({
          targets: ".icons-social img",
          opacity: [1, 0],
          translateY: [0, -10],
          easing: "easeInOutQuad",
          duration: 1000,
        });
      }
    } else {
      anime({
        targets: ".icons-social img",
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: "easeInOutQuad",
        duration: 600,
        delay: 1200
      });
    }
  }, [active, width]);

  return (
    <div className={`icons-social ${active && "active"}`}>
      <a
        rel="noopener noreferrer"
        href="https://behance.net/hazielcastillo"
        target="_blank"
      >
        <img src={require("../../images/behance-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/hatrixs/"
        target="_blank"
      >
        <img src={require("../../images/instagram-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/haziel-castillo"
        target="_blank"
      >
        <img src={require("../../images/linkedin-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/hajocava"
        target="_blank"
      >
        <img src={require("../../images/github-line.svg")} alt="" />
      </a>
    </div>
  );
}
