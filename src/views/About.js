import React from "react";
import Title from "../components/about/Title";
import Content from "../components/about/Content";
import Photo from "../components/about/Photo";

export default function About() {
  return (
    <main id="about" className="container">
      <div className="mt-2">
        <Photo />
        <div className="float-right">
          <Title />
          <Content />
        </div>
      </div>
    </main>
  );
}
