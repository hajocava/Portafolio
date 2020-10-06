import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";

export default function About() {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.text-anime .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime({
      targets: '.text-anime .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 800,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    })

    anime({
      targets: `#about .content`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeInOutQuad'
    });

  }, [])

  return (
    <main id="about" className="container">
      <div className="row mt-md-5">
        <div className="col-12 col-lg-6 mb-2 mb-lg-0">
          <img
            src={require("../images/perfil.jpg")}
            alt="perfil"
            width="100%"
            style={{
              borderRadius: 5
            }}
          />
        </div>
        <section className="col-12 col-lg-6">
          <h2 class="text-anime m-0">
            <span class="text-wrapper">
              <span class="letters">Nice to meet you</span>
            </span>
          </h2>
          <div className="content">
            <p>
              Hey there! I'm Haziel Castillo, a programmer and designer of digital
              products. I am currently doing
              my professional residencies in the Technology of Morelia
          </p>
            <p>
              I love creating new things and improving my skills. I like to be
              with more intelligent people than me, to learn from them, as well as
              to add value to those around me. When I'm not working, I find myself
              exercising, playing drums, playing video games, or spending time
              with my family.
          </p>
            <p>
              I belive that success is waking up every day doing what I like the
              most.
          </p>
            <NavLink exact to="/resume" className="btn btn-secondary mt-3">
              Resume
          </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
