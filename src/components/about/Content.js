import React, { useEffect } from "react";
import resume from "../../resume.pdf"
import anime from "animejs";
import SocialLinks from "./Social";

export default function Content() {
  useEffect(() => {
    anime({
      targets: `#about .content`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className="content">
      <p>
        Hey there! I'm Haziel Castillo, a programmer and designer of digital
        products. I am currently doing my professional residencies in the
        Technology of Morelia
      </p>
      <p>
        I love creating new things and improving my skills. I like to be with
        more intelligent people than me, to learn from them, as well as to add
        value to those around me. When I'm not working, I find myself
        exercising, playing drums, playing video games, or spending time with my
        family.
      </p>
      <p>
        I belive that success is waking up every day doing what I like the most.
      </p>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <a
          rel="noopener noreferrer"
          href={resume}
          target="_blank"
          className="btn mt-2"
        >
          Resume
        </a>
        <SocialLinks />
      </div>
    </div>
  );
}
