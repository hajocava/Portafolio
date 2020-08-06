import anime from "animejs";

export function animeIn() {
  anime({
    targets: ".icons-social img",
    opacity: [0, 1],
    translateY: [-10, 0],
    easing: "easeInOutQuad",
    duration: 600,
  });

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
}

export function animeOut() {
  anime({
    targets: ".icons-social img",
    opacity: [1, 0],
    translateY: [0, -10],
    easing: "easeInOutQuad",
    duration: 1000,
  });

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
