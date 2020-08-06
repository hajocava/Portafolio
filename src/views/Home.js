import React from "react";
import Hero from "../components/hero/Hero";
import Work from "../components/work/Work";
import data from "../data/works.json";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <div className="works" style={{ marginTop: 60 }}>
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
