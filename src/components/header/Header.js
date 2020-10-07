import React from "react";

export default function Header({ image, alt }) {
  return (
    <div
      className="header"
      style={{
        height: 300,
        position: "relative",
        display: "block",
        width: "100%"
      }}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </div>
  );
}
