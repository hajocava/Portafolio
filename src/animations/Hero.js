import anime from "animejs";

export default function animeIn() {
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
    delay: 900
  });
}
