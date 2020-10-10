import React from "react";

export default function Social({ extraClass, extraStyles }) {
  const styles = {
    textDecoration: "none",
    fontSize: "1.195rem",
    paddingTop: 8,
    paddingBottom: 8,
    ...extraStyles
  };

  return (
    <div>
      <a
        rel="noopener noreferrer"
        href="https://behance.net/hazielcastillo"
        target="_blank"
        style={styles}
        className={`btn btn-secondary mt-2 mr-2 ${extraClass}`}
      >
        <i className="ri-behance-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/hatrixs/"
        target="_blank"
        style={styles}
        className={`btn btn-secondary mt-2 mr-2 ${extraClass}`}
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/haziel-castillo"
        target="_blank"
        style={styles}
        className={`btn btn-secondary mt-2 mr-2 ${extraClass}`}
      >
        <i className="ri-linkedin-line"></i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/hajocava"
        target="_blank"
        style={styles}
        className={`btn btn-secondary mt-2 ${extraClass}`}
      >
        <i className="ri-github-line"></i>
      </a>
    </div>
  );
}
