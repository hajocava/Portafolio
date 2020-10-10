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
        <h3 className="m-0">Let's make the first contact</h3>
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
          Looking for a developer who shows passion in their work? Interested in
          working together? I would love to hear from you!
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Haziel Castillo</p>
      </div>
    </footer>
  );
}
