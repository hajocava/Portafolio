import React from "react";

export default function Project() {
  return (
    <main>
      <img
          src={require("../images/works/besoft/header.png")}
          alt=""
          width="100%"
          height="auto"
          style={{
            maxHeight: "60vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      <div className="container reduce">
        <h2 className="text-center mt-5">Guía de estilos</h2>
        <p>
        La combinación de colores surgió de un análisis de la psicología del color. Donde la gente el sentido tecnológico a la paleta azul. De hecho la competencia y empresas relacionadas con el sector utilizan este tipo de colores. Para el contraste se utilizaron colores claros.
        </p>
        <p>
          Puedes ver el proyecto final ya programado para todos los dispositivos en el siguiente{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://upbeat-goldberg-ca2d1d.netlify.app/"
          >
            enlace.
          </a>
        </p>
      </div>
      <div className="container">
        <img
          src={require("../images/works/besoft/styleguide.png")}
          alt="style guide"
          width="100%"
        />
      </div>
      <div className="container">
        <h2>Capturas</h2>
        <img
          src={require("../images/works/besoft/besoft.png")}
          alt="style guide"
          width="100%"
        />
        <p>
        Puedes ver el proyecto final ya programado para todos los dispositivos en el siguiente{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://upbeat-goldberg-ca2d1d.netlify.app/"
          >
            enlace.
          </a>
        </p>
      </div>
    </main>
  );
}
