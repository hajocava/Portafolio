import React, { useEffect } from "react";
import anime from "animejs";
import "./styles.sass"

export default function Photo() {
  useEffect(() => {
    window.innerWidth < 768 && (
      anime({
        targets: "#img-profile",
        width: [0, "100%"],
        duration: 1500,
        easing: "easeOutExpo"
      })
    )
  }, []);

  return (
    <img
      id="img-profile"
      src={require("./perfil.jpg")}
      alt="perfil"
    />
  );
}
