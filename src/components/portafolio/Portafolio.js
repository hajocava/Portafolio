import React from "react";
import { NavLink } from "react-router-dom";
import WindowDimention from "../../functions/WindowDimention";
import "./styles.sass";

export default function Portafolio({ work }) {
  const { width } = WindowDimention();
  return (
    <NavLink className="work" exact to={`/project/${work.project}`}>
      {work.video !== "no" ? (
        <div
          style={{
            height: width < 992 ? 300 : 400,
            width: "100%",
            position: "relative",
          }}
        >
          <video autoPlay loop muted>
            <source
              src={require(`../../video/${work.video}`)}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <img
          src={require(`../../images/works/${work.image}`)}
          alt={work.project}
          loading="lazy"
        />
      )}
      <div className="overlay">
        <div className="text">
          <h3>{work.project}</h3>
          <p>{work.description}</p>
        </div>
      </div>
    </NavLink>
  );
}
