import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.sass";

export default function Portafolio({ work }) {
  return (
    <NavLink
      className="work"
      exact
      to={`/project/${String(work.link).toLocaleLowerCase()}`}
    >
      <img
        src={require(`../../images/works/${work.image}`)}
        alt={work.project}
      />
      <div className="overlay">
        <h3>{work.project}</h3>
      </div>
    </NavLink>
  );
}
