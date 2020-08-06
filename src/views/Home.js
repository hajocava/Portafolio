import React from "react";
import { animateScroll } from "react-scroll";
import Hero from "../components/hero/Hero";
import Work from "../components/work/Work";
import data from "../data/works.json";
import HandleScroll from "../functions/HandleScroll";
import WindowDimention from "../functions/WindowDimention";

export default function Home() {
  const { height } = WindowDimention();

  console.log(height)

  return (
    <main className="container">
      <Hero />
      <div className="works" style={{ marginTop: height < 768 ? 50 : 100 }}>
        <div className="row">
          {data.map((value, i) => (
            <div key={i} className="col-12 col-md-6 mb-4">
              <Work work={value} />
            </div>
          ))}
        </div>
      </div>
      <i
        className={`scroll-to-top-icon ${HandleScroll() > 200 && "visible"}`}
        onClick={() => animateScroll.scrollToTop()}
      >
        <img src={require("../images/arrow-up-s-line.svg")} alt="arrow up" />
      </i>
    </main>
  );
}
