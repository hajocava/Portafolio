import React from "react";
import ReactCompareImage from "react-compare-image";
import Slider from "react-slick";

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
    <main>
      <img
        src={require("../images/works/social-service/portada.png")}
        alt=""
        width="100%"
        height="auto"
        style={{
          maxHeight: "70vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>Project vision</h2>
            <p>
              Comprehensive web system to administer processes and give
              monitoring of the students of the Technological Institute of
              Morelia, who perform their social service within this institution.
              How main objective, is to facilitate access to information of each
              of the necessary files and documents.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h2>Challenges</h2>
            <ul>
              <li>
                Explore each of the processes and identify the relationships
                between the data.
              </li>
              <li className="mt-3">
                Identify frequent doubts in students in their social service
                process.
              </li>
              <li className="mt-3">
                Create easy-to-understand data visualizations for users.
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
                leftImage={require("../images/works/social-service/home-light.png")}
                rightImage={require("../images/works/social-service/home-dark.png")}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <h2>Kickoff</h2>
            <p>
              At the beginning, I asked myself some initial questions. Who is
              our main user? What kinds of tasks do they have? What is so
              difficult for you to do on your normal work day? What is the scope
              I want this project to have?
            </p>
            <p>
              I decided to spend a month living through the process in the
              office to better understand their tasks and gain a better
              understanding of what they need.
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
        <h2 style={{ textAlign: "center" }}>Captures</h2>
        <div className="row">
          <div className="col-12">
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
  );
}
