import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Context";
import anime from "animejs";

export default function Burger() {
  const { active, setActive } = useContext(MenuContext);
  const [state, setState] = useState(false);

  const styles = {
    icon: {
      width: 40,
      height: 40,
      padding: "15px 6px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    line: {
      width: "100%",
      height: 2,
      backgroundColor: "#555555",
    },
  };

  useEffect(() => {
    if (state) {
      if (active) {
        anime
          .timeline({ loop: false })
          .add({
            targets: ".icon-burger span:nth-child(1)",
            translateY: [0, 4],
            easing: "easeInOutQuad",
            duration: 150,
          })
          .add({
            targets: ".icon-burger span:nth-child(1)",
            rotate: 45,
            easing: "easeInOutQuad",
            duration: 150,
          });

        anime
          .timeline({ loop: false })
          .add({
            targets: ".icon-burger span:nth-child(2)",
            translateY: [0, -4],
            easing: "easeInOutQuad",
            duration: 150,
          })
          .add({
            targets: ".icon-burger span:nth-child(2)",
            rotate: -45,
            easing: "easeInOutQuad",
            duration: 150,
          });
      } else {
        anime
          .timeline({ loop: false })
          .add({
            targets: ".icon-burger span:nth-child(1)",
            rotate: 0,
            easing: "easeInOutQuad",
            duration: 150,
          })
          .add({
            targets: ".icon-burger span:nth-child(1)",
            translateY: 0,
            easing: "easeInOutQuad",
            duration: 150,
          });

        anime
          .timeline({ loop: false })
          .add({
            targets: ".icon-burger span:nth-child(2)",
            rotate: 0,
            easing: "easeInOutQuad",
            duration: 150,
          })
          .add({
            targets: ".icon-burger span:nth-child(2)",
            translateY: 0,
            easing: "easeInOutQuad",
            duration: 150,
          });
      }
    }

    setState(true);

    // eslint-disable-next-line
  }, [active]);

  return (
    <div
      className="icon-burger"
      onClick={() => {
        setActive(!active);
      }}
      style={styles.icon}
    >
      <span id="burger-line" style={styles.line} />
      <span id="burger-line-two" style={styles.line} />
    </div>
  );
}
