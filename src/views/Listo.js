import React from 'react'

export default () => {
  return (
    <main>
      <div className="container reduce">
        <h2 className="text-center mt-5">Listo</h2>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://upbeat-goldberg-ca2d1d.netlify.app/"
          >
            Listo
          </a> fue una de las empresas en las que trabaje como desarrollador full stack. Realice este diseño como una propuesta para el sitio principal de la empresa.
        </p>
      </div>
      <div className="container">
        <h2>Captura</h2>
        <img
          src={require("../images/works/listo/home.png")}
          alt="style guide"
          width="100%"
        />
      </div>
    </main>
  )
}
