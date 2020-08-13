import React from "react";

export default function NotFound() {
  return (
    <main>
      <div style={{
          position: "absolute",
          height: "100%",
          top: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
      }}>
        <img height="400px" src={require("../images/error404.svg")} alt="Error 404 page not found"/>
        <h1>Oh no! Page not found.</h1>
      </div>
    </main>
  );
}
