import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import data from "../data/works.json";
import WindowDimention from "../functions/WindowDimention";
import anime from "animejs";
import Portafolio from "../components/portafolio/Portafolio";

export default function Home() {
  const { width } = WindowDimention();

  useEffect(() => {
    anime({
      targets: `.works .work-video`,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 1200,
    });
  }, []);

  return (
    <main className="container">
      <Hero />
      <div className="works" style={{ marginTop: width < 768 ? 50 : 100 }}>
        <div className="row">
          {data.map((work, i) => (
            <div key={i} className="col-12 col-md-6 mb-4">
              <Portafolio work={work} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
