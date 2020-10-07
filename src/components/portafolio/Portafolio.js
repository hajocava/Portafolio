import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.sass";

export default function Portafolio({ work }) {
  return (
    <NavLink
      style={{
        height: 300,
      }}
      className="work"
      exact
      to={`/project/${String(work.project).toLocaleLowerCase()}`}
    >
      <img
        src={require(`../../images/works/${work.image}`)}
        alt={work.project}
        loading="lazy"
      />
      <div className="overlay">
        <h3>{work.project}</h3>
      </div>
    </NavLink>
  );
}
