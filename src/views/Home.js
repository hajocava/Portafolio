import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import data from "../data/works.json";
import anime from "animejs";
import Portafolio from "../components/portafolio/Portafolio";

export default function Home() {
  useEffect(() => {
    anime
    .timeline({ loop: false })
    .add({ delay: 1000 })
    .add({
      targets: `.works .work`,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 2000,
      delay: function (el, i, l) {
        return i * 200;
      },
    });
  }, []);

  return (
    <main className="container">
      <Hero />
      <div className="works mt-5">
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
