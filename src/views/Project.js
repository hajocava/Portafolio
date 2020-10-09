import React from "react";

export default function Project() {
  return (
    <main>
      <div className="container reduce">
        <h2 className="text-center mt-5">Style Guide</h2>
        <p>
          The color combination arose from an analysis of the psychology of
          color. Where people the technological sense to the blue palette. In
          fact the competition and companies Related to the sector use this type
          of colors. To contrast, light colors were used.
        </p>
      </div>
      <div className="container">
        <img
          src={require("../images/works/besoft/styleguide.png")}
          alt="style guide"
          width="100%"
        />
      </div>
      <div className="container">
        <h2>Captures</h2>
        <img
          src={require("../images/works/besoft/besoft.png")}
          alt="style guide"
          width="100%"
        />
        <p>
          You can see the final project already programmed for all devices in
          the following{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://upbeat-goldberg-ca2d1d.netlify.app/"
          >
            link.
          </a>
        </p>
      </div>
    </main>
  );
}
