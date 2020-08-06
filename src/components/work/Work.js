import React, { useState } from "react";
import anime from "animejs";
import VizSensor from "react-visibility-sensor";

export default function Work({ work }) {
  const [state, setState] = useState(true);

  function animation() {
    anime({
      targets: `.works .work.${work.id}`,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 2500,
      easing: "easeInOutExpo",
      delay: 800
    });

    setState(false);
  }

  return (
    <VizSensor
      onChange={(visible) => visible && animation()}
      active={state}
      partialVisibility="top"
      minTopValue={1}
    >
      <div className={`work ${work.id}`}>
        <img
          src={require(`../../images/works/${work.image}`)}
          alt={work.project}
          width="100%"
          style={{
            borderRadius: 5,
            cursor: "pointer"
          }}
          loading="lazy"
        />
      </div>
    </VizSensor>
  );
}
