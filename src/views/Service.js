import React from "react";
import ReactCompareImage from "react-compare-image";
import Slider from "react-slick";
import Footer from "../components/footer/Footer";

export default function Service() {
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: false,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <main>
        <img
          src={require("../images/works/social-service/portada.png")}
          alt=""
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
            <div className="col-12 col-md-6">
              <h2>Visión del proyecto</h2>
              <p>
                Sistema web integral para administrar procesos y dar seguimiento a los estudiantes del Instituto Tecnológico de Morelia, que realizan su servicio social dentro de esta institución. Como objetivo principal, es facilitar el acceso a la información de cada uno de los expedientes y documentos necesarios.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h2>Retos</h2>
              <ul>
                <li>
                  Explorar cada uno de los datos y como se relacionan con los procesos.
                </li>
                <li className="mt-3">
                  Identificar dudas frecuentes en el proceso.
                </li>
                <li className="mt-3">
                  Representar los datos de manera eficaz y sencilla.
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="shadow-2"
                style={{
                  borderRadius: 100,
                }}
              >
                <ReactCompareImage
                  leftImageCss={{
                    borderRadius: 10,
                  }}
                  rightImageCss={{
                    borderRadius: 10,
                  }}
                  sliderLineColor="#FDCA40"
                  sliderLineWidth={4}
                  leftImageAlt="home view light version"
                  rightImageAlt="home view dark version"
                  leftImage={require("../images/works/social-service/light.png")}
                  rightImage={require("../images/works/social-service/dark.png")}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <h2>Primeros pasos</h2>
              <p>
              Al principio, me hice algunas preguntas iniciales. ¿Quién es nuestro usuario principal? ¿Qué tipo de tareas tienen? ¿Qué es tan difícil para usted hacer en su día normal de trabajo? ¿Cuál es el alcance que quiero que tenga este proyecto?
              </p>
              <p>
              Decidí pasar un mes viviendo el proceso dentro de las oficinaa para comprender mejor sus tareas, procesos y obtener una mejor comprensión de lo que necesitan.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src={require("../images/works/social-service/prototipe.png")}
                alt=""
                width="100%"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Guia de estilos</h2>
              <img
                src={require("../images/works/social-service/styleguide.png")}
                alt="style guide"
                width="100%"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 style={{ textAlign: "center" }}>Capturas</h2>
              <Slider {...settings}>
                <img
                  src={require("../images/works/social-service/capture-1.png")}
                  alt="capture view"
                />
                <img
                  src={require("../images/works/social-service/capture-2.png")}
                  alt="capture view"
                />
                <img
                  src={require("../images/works/social-service/capture-3.png")}
                  alt="capture view"
                />
                <img
                  src={require("../images/works/social-service/capture-4.png")}
                  alt="capture view"
                />
              </Slider>
            </div>
          </div>
        </div>
      </main>
      <Footer backgroundColor="#4D7CFE" color="#ffffff" />
    </>
  );
}
