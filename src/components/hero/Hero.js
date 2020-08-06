import React, { useEffect } from "react";
import WindowDimention from "../../WindowDimention";
import animeIn from "../../animations/Hero";

export default function Hero() {
  const { width } = WindowDimention();

  useEffect(() => {
    animeIn();
  }, []);

  return (
    <div id="hero" className="mt-5" style={{ textAlign: "center" }}>
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
