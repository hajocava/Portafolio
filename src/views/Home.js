import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import Work from "../components/work/Work";
import data from "../data/works.json";
import WindowDimention from "../functions/WindowDimention";
import anime from "animejs";

export default function Home() {
  const { width } = WindowDimention();

  useEffect(() => {
    anime({
      targets: `.works .work`,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 1200
    });
  }, [])

  return (
    <main className="container">
      <Hero />
      <div className="works" style={{ marginTop: width < 768 ? 50 : 100 }}>
        <div className="row">
          {data.map((value, i) => (
            <div key={i} className="col-12 col-md-6 mb-4">
              <Work work={value} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
