import React from "react";
import YouTube from "react-youtube";
import Footer from "../components/footer/Footer";
import winDim from "../functions/WindowDImentions";

export default function SmartGloves() {
  const { width } = winDim();

  return (
    <>
      <main>
        <img
          src={require("../images/works/smart-gloves/portada.png")}
          alt="portada"
          width="100%"
          height="auto"
          style={{
            maxHeight: "60vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Historia</h2>
              <p>
              Durante mis estudios tuve un compañero llamado Carlos, una persona sordomuda. Carlos es un amigo muy agradable y simpático. Conocerlo fue una de las experiencias más reveladoras que he tenido, porque me mostró su estilo de vida, y las luchas que vive día a día, desde la discriminación, la falta de oportunidades y el aislamiento social al no poder comunicarse con otras personas, ya que en mi país, no existe una cultura de aprendizaje de un idioma inclusivo.
              </p>
              <p>
              Es por eso que quería encontrar una solución a este problema, y ​​con un par de amigos de la universidad, decidimos desarrollar un traductor de lenguaje de señas.
              </p>
            </div>
            <div className="col-12 mt-3">
              <YouTube
                videoId="JS0q1HlYNj4"
                opts={{
                  width: "100%",
                  height: width < 768 ? 215 : 400,
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <h2>Descripción</h2>
              <p>
              Consiste en un par de guantes con sensores, capaces de obtener datos de todos los movimientos realizados con las manos, estos datos son enviados a un dispositivo, ya sea una computadora o un teléfono vía bluetooth y procesarlo ​​con el fin de devolver el mensaje realizado en audio y texto en cualquier idioma.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-6">
              <h2>Proceso</h2>
              <p>
              Utilizamos inteligencia artificial con técnicas de aprendizaje automático y redes neuronales para entrenar un modelo capaz de reconocer patrones de movimiento e interpretarlos como palabras en lengua de señas.
              </p>
              <p>
              Enfocados en la sencillez y la comunicación, para que cualquier usuario tenga una experiencia increíble al utilizar nuestra aplicación.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h2>Desafios</h2>
              <ul>
                <li>
                Realizar la investigación de componentes electrónicos para la obtención de los datos.
                </li>
                <li className="mt-3">
                Comprender mejor las necesidades de nuestros usuarios con discapacidad auditiva y del habla.
                </li>
                <li className="mt-3">
                Identificar las tecnologías y lenguajes necesarios que mejor se adapten a las necesidades del producto.
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={require("../images/works/smart-gloves/mockup.png")}
                alt="home"
                width="100%"
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src={require("../images/works/smart-gloves/mockup2.png")}
                alt="change language"
                width="100%"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-5">
              <h2>Tecnologías</h2>
              <ul>
                <li>
                  <span className="text-bold">Python: </span>Principal lenguaje de programación.
                </li>
                <li>
                  <span className="text-bold">Django: </span>Framework web de Python para el lado del servidor donde se ofrece una API para consultar los datos.
                </li>
                <li>
                  <span className="text-bold">TensorFlow: </span>Librería para inteligencia artificial, utilizada para entrenamiento y validación de la red neuronal.
                </li>
                <li>
                  <span className="text-bold">Swift: </span>Lenguaje de programación para aplicaciones móviles en dispositivos Apple iOS.
                </li>
                <li>
                  <span className="text-bold">Arduino: </span>Se utilizó para recopilar datos de los sensores del guante.
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <img
                  height="60px"
                  className="mr-3 mt-5 mb-5"
                  src={require("../images/technologies/python.svg")}
                  alt="python"
                />
                <img
                  height="60px"
                  className="mr-3 mt-5 mb-5"
                  src={require("../images/technologies/django.svg")}
                  alt="django"
                />
                <img
                  height="60px"
                  className="mr-3 mt-5 mb-5"
                  src={require("../images/technologies/TensorFlow.svg")}
                  alt="TensorFlow"
                />
                <img
                  height="60px"
                  className="mr-3 mt-5 mb-5"
                  src={require("../images/technologies/swift.svg")}
                  alt="swift"
                />
                <img
                  height="60px"
                  className="mr-3 mt-5 mb-5"
                  src={require("../images/technologies/arduino.svg")}
                  alt="arduino"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 style={{ textAlign: "center" }}>Equipo</h2>

              <img
                src={require("../images/works/smart-gloves/team.png")}
                alt="capture view"
                width="100%"
                height="auto"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer backgroundColor="#1C1C1C" color="#ffffff" />
    </>
  );
}
