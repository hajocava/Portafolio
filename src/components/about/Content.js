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
        Me encanta crear y aprender cosas nuevas. También me gusta trabajar con gente más inteligente que yo, para aprender de ellos, y aportar valor a los que me rodean.
      </p>

      <p>
        Actualemente me encuentro trabajando como engineering manager de una startup mexicana, llamada <a className="text-primary" target="_blank" rel="noopener noreferrer" href="https://truehome.com.mx">truehome by loft</a> dentro del mercado de compra y venta de inmuebles.
      </p>

      <p>Entre mis funciones esta el liderar equipos, asegurar la calidad del software, implementar mejoras para el performance del sitio y buenas practicas, entrevistar futuros desarrolladores, así como entender las reglas del negocio.</p>

      <p>
        Creo que el <span className="text-primary">éxito</span> es despertar cada día haciendo lo que mas te gusta, agregando valor a ti y a los que te rodean.
      </p>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <a
          rel="noopener noreferrer"
          href={resume}
          target="_blank"
          className="btn mt-2"
        >
          Descargar CV
        </a>
        <SocialLinks />
      </div>
    </div>
  );
}
