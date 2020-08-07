import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";

export default function About() {

  useEffect(() => {
    anime({
      targets: `#about img`,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo"
    });

    anime({
      targets: `#about section`,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 2000,
      easing: "easeInOutExpo"
    });
  }, [])

  return (
    <main id="about" className="container">
      <div className="row mt-md-5">
        <div className="col-12 col-md-6">
          <img
            src={require("../images/perfil.jpg")}
            alt="perfil"
            width="100%"
            style={{ borderRadius: 5 }}
          />
        </div>
        <section className="col-12 col-md-6">
          <h2>NICE TO MEET YOU</h2>
          <p>
            Hey there! I'm haziel, a programmer and designer of digital
            products. I was born in Delicias Chihuahua and I am currently doing
            my professional residencies in the technology of Morelia
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
        </section>
      </div>
    </main>
  );
}
