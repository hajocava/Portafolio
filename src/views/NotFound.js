import React from "react";
import WindowDimention from "../functions/WindowDimention";

export default function NotFound() {
  const { width } = WindowDimention();

  return (
    <main>
      <div
        style={{
          position: "absolute",
          height: "100%",
          top: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            height: width < 768 ? 230 : 300,
          }}
          src={require("../images/error404.svg")}
          alt="Error 404 page not found"
        />
        <h1 className="container" style={{ textAlign: "center" }}>Oh no! Page not found.</h1>
      </div>
    </main>
  );
}
