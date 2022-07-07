import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";
import "./styles.sass";

export default function Hero() {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".ml12");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime({
      targets: ".ml12 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 500 + 30 * i,
    });

    anime({
      targets: "#hero p, #hero .btn",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 800,
      delay: 1200,
    });
  }, []);

  return (
    <div id="hero">
      <h1 className="ml12">!Hola!</h1>
      <p>
      Soy ingeniero en sistemas computacionales, programador y diseñador de productos digitales. Me especializo en tecnologías web, aplicaciones móviles, y diseño de UX/UI.
      </p>
      <NavLink exact to="/about" className="btn btn-secondary mt-2">
        Sobre mi
      </NavLink>
    </div>
  );
}
