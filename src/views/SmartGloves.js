import React from "react";
import YouTube from "react-youtube";
import Footer from "../components/footer/Footer";
import winDim from "../functions/WindowDImentions";
import MyResponsivePie from "../components/charts/Pie";

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
              <h2>Problematic</h2>
              <p>
                During my studies I had a partner named Carlos, a deaf mute
                person. Carlos is a very nice and friendly friend. Knowing him
                was one of the most revealing experiences I have had, because he
                showed me his lifestyle, and the struggles he experiences every
                day, from discrimination, lack of opportunities and social
                isolation from not being able to communicate with other people,
                since in my country, there is no culture of learning an
                inclusive language.
              </p>
              <p>
                This is why I wanted to find a solution to this problem, and
                with a couple of friends from school we decided to develop a
                translate sign language.
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
              <h2>Description</h2>
              <p>
                It consists of a pair of gloves with sensors, capable of
                obtaining data from all movements carried out with the hands,
                this data is sent to a device, be it a computer or a phone, via
                bluetooth and processed in order to return the message made in
                audio and text in any language.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-6">
              <h2>Process</h2>
              <p>
                We use artificial intelligence with machine learning techniques
                and neural networks to train a model capable of recognizing
                movement patterns and interpreting them as sign language words.
              </p>
              <p>
                Focused on simplicity and communication, so that any user has an
                incredible experience when using our application.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h2>Challenges</h2>
              <ul>
                <li>
                  Carry out the investigation of electronic components to obtain
                  the data.
                </li>
                <li className="mt-3">
                  Contact and better understand the needs of our users with
                  hearing and speech disabilities.
                </li>
                <li className="mt-3">
                  Identify the necessary technologies and languages ​​that best
                  suit the needs of the product.
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
              <h2>Technologies</h2>
              <ul>
                <li>
                  <span className="text-bold">Python: </span>Main programming
                  language.
                </li>
                <li>
                  <span className="text-bold">Django: </span>Python framework
                  for server side where an API is offered to query the data.
                </li>
                <li>
                  <span className="text-bold">TensorFlow: </span>Library for
                  artificial intelligence, used for training and validation of
                  the neural network.
                </li>
                <li>
                  <span className="text-bold">Swift: </span>Programming language
                  for mobile application on apple iOS devices.
                </li>
                <li>
                  <span className="text-bold">Arduino: </span>It was used to
                  collect data from the glove sensors.
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
              <h2 style={{ textAlign: "center" }}>Team</h2>

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

          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <h2>Statistics</h2>
              <p>
                A survey carried out by the National Institute of Geography,
                Statistics and Informatics (INEGI) revealed that in Mexico there
                are 1 million 795 thousand people with some type of physical or
                mental disability, of which 15.7% are hearing and 4.9% are of
                language.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ height: 300 }}>
                <MyResponsivePie />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer backgroundColor="#1C1C1C" color="#ffffff" />
    </>
  );
}
