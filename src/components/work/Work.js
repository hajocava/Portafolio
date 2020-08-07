import React from "react";

export default function Work({ work }) {
  return (
    <div className="work">
      <img
        src={require(`../../images/works/${work.image}`)}
        alt={work.project}
        width="100%"
        style={{
          borderRadius: 5,
          cursor: "pointer",
        }}
        loading="lazy"
      />
    </div>
  );
}
