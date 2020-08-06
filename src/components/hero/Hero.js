import React, { useEffect } from "react";
import WindowDimention from "../../WindowDimention";
import anime from "animejs";
import "./styles.sass"

export default function Hero() {
  const { width } = WindowDimention();

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
      targets: "#hero p, #hero button",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 800,
      delay: 900,
    });
  }, []);

  return (
    <div id="hero">
      <h1
        className="ml12"
        style={{ textTransform: width < 768 ? "uppercase" : "capitalize" }}
      >
        {width < 768 ? "Hi" : "Hello~"}, I'm Haziel
      </h1>
      <p>System engineer, expert in web technologies, UI & UX Designer</p>
      <button className="btn-secondary mt-2">Read More</button>
    </div>
  );
}
