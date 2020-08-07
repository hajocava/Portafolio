import React from "react";
import { animateScroll } from "react-scroll";
import HandleScroll from "../../functions/HandleScroll";
import "./styles.sass";

export default function ScrollToTop() {
  return (
    <i
      id="scroll-to-top-icon"
      className={` ${HandleScroll() > 100 && "visible"}`}
      onClick={() => animateScroll.scrollToTop()}
    >
      <span />
      <span />
    </i>
  );
}
