import React, { useEffect } from "react";
import anime from "animejs";

export default function Title() {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".text-anime .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime({
      targets: ".text-anime .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 800,
      easing: "easeOutExpo",
      delay: (_, i) => 50 * i,
    });

  }, []);

  return (
    <h2 className="text-anime m-0" style={{ fontSize: "2rem"}}>
      <span className="text-wrapper">
        <span className="letters">Sobre mi</span>
      </span>
    </h2>
  );
}
