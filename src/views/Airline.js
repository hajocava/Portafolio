import React from "react";

export default () => {
  const imageNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <div className="container reduce">
        <h2 className="text-center mt-5">Airline</h2>
        <p>
          Fue un proyecto que se me dejo como prueba tecnica para entrar a
          trabajar a{" "}
          <a
            className="text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://truehome.com.mx/"
          >
            truehome by loft.
          </a>
        </p>
        <p>
          El proyecto consiste en una aplicación web responsive que permite a
          los usuarios registrarse y buscar vuelos. El proyecto se desarrollo
          con React y Redux.
        </p>
        <p>
          Puedes ver el proyecto desarrollado en el siguiente{" "}
          <a
            className="text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tender-colden-93989e.netlify.app/"
          >
            enlace
          </a>
          .
        </p>
      </div>
      <div className="container">
        <h2>Capturas</h2>
        <div className="row">
          {imageNumbersArray.map((imageName, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ marginTop: '1rem' }}>
              <img src={require(`../images/works/airline/${imageName}.jpeg`)} alt="airline" width={'100%'} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
