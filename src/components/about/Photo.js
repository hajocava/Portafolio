import React, { useEffect } from "react";
import anime from "animejs";
import "./styles.sass"

export default function Photo() {
  useEffect(() => {
    window.innerWidth < 768 ? (
      anime({
        targets: "#img-profile",
        width: [0, "100%"],
        opacity: [0, 1],
        duration: 1500,
        easing: "easeOutExpo"
      })
    ) : (
      anime({
        targets: "#img-profile",
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuad'
      })
    )
  }, []);

  return (
    <img
      id="img-profile"
      src={require("./image-profile.jpg")}
      alt="perfil"
    />
  );
}
