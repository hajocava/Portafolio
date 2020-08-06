import React, { useContext } from "react";
import { MenuContext } from "./Context";

export default function Social() {
  const { active } = useContext(MenuContext);

  return (
    <div className={`icons-social ${active && 'active'}`}>
      <a
        rel="noopener noreferrer"
        href="https://behance.net/hazielcastillo"
        target="_blank"
      >
        <img src={require("../../images/behance-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/hatrixs/"
        target="_blank"
      >
        <img src={require("../../images/instagram-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/haziel-castillo"
        target="_blank"
      >
        <img src={require("../../images/linkedin-line.svg")} alt="" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/hajocava"
        target="_blank"
      >
        <img src={require("../../images/github-line.svg")} alt="" />
      </a>
    </div>
  );
}
