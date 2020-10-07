import React from "react";
import Title from "../components/about/Title";
import Content from "../components/about/Content";
import Photo from "../components/about/Photo";

export default function About() {
  return (
    <main id="about" className="container">
      <Photo />
      <div className="float-right">
        <Title />
        <Content />
      </div>
    </main>
  );
}
