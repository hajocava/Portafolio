import React from "react";
import { NavLink } from "react-router-dom";
import WinDim from "../../functions/WindowDImentions";
import "./styles.sass";

export default function Portafolio({ work }) {
  const { width } = WinDim()

  return (
    <NavLink
      style={{
        height: width < 768 ? 250 : 400,
      }}
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
