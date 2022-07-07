import React from "react";

export default () => {
  return (
    <main>
      <div className="container reduce">
        <h2 className="text-center mt-5">Blackbull</h2>
        <p>
          Fue una propuesta de diseño para una landing page, para un lugar de donde hacen Crossfit.
        </p>
      </div>
      <div className="container">
        <h2>Captura</h2>
        <img
          src={require("../images/works/blackbull/home.png")}
          alt="style guide"
          width="100%"
        />
      </div>
    </main>
  );
};
