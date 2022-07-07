import React from "react";
import SocialLinks from "../about/Social";

export default function Footer({ backgroundColor, color }) {
  return (
    <footer
      style={{
        backgroundColor,
        color,
        padding: "6rem 0",
      }}
    >
      <div className="container" style={{ textAlign: "center", color }}>
        <h3 className="m-0">Contactame</h3>
        <div className="mt-4">
          <SocialLinks
            extraClass="no-hover"
            extraStyles={{ color: "#fff", borderColor: "#fff" }}
          />
        </div>
        <div className="mt-4">
          <a style={{ color }} href="mailto:hajocava@gmail.com">
            hajocava@gmail.com
          </a>
        </div>
        <p className="mt-4" style={{maxWidth: 400, textAlign: "center", margin: "0 auto"}}>
        ¿Buscas un desarrollador que muestre pasión en su trabajo? ¿Interesado en trabajar juntos? ¡Me encantaría saber de ti!
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Haziel Castillo</p>
      </div>
    </footer>
  );
}
