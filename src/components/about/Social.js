import React from "react";

export default function Social() {
  const styles = {
    textDecoration: "none",
    fontSize: "1.195rem",
    paddingTop: 8,
    paddingBottom: 8,
  };

  return (
    <div>
      <a
        rel="noopener noreferrer"
        href="https://behance.net/hazielcastillo"
        target="_blank"
        style={styles}
        className="btn btn-secondary mt-2 mr-2"
      >
        <i className="ri-behance-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/hatrixs/"
        target="_blank"
        style={styles}
        className="btn btn-secondary mt-2 mr-2"
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/haziel-castillo"
        target="_blank"
        style={styles}
        className="btn btn-secondary mt-2 mr-2"
      >
        <i className="ri-linkedin-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/hajocava"
        target="_blank"
        style={styles}
        className="btn btn-secondary mt-2"
      >
        <i className="ri-github-line"></i>
      </a>
    </div>
  );
}
