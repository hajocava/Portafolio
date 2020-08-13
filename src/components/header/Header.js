import React from "react";
import WindowDimention from "../../functions/WindowDimention";

export default function Header({ image, alt }) {
  const { width } = WindowDimention();

  return (
    <div
      className="header"
      style={{
        height: width < 992 ? 200 : 500,
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
