import React, { useContext } from "react";
import { MenuContext } from "./Context";

export default function Burger() {
  const { active, setActive } = useContext(MenuContext);

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
    lineOne: {
      width: "100%",
      height: 2,
      backgroundColor: "#555555",
      transition: "all .3s ease",
      transform: active && "translateY(3px) rotate(45deg)"
    },
    lineTwo: {
      width: "100%",
      height: 2,
      backgroundColor: "#555555",
      transition: "all .3s ease",
      transform: active && "translateY(-5px) rotate(-45deg)"
    },
  };

  return (
    <div
      className="icon-burger"
      onClick={() => setActive(!active)}
      style={styles.icon}
    >
      <span style={styles.lineOne} />
      <span style={styles.lineTwo} />
    </div>
  );
}
