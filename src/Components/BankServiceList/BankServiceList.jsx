import React from "react";
import "./BankServiceList.css";

function BankServiceList({
  icon,
  iconStyle,
  pair1,
  pair2,
  pair3,
  pair4,
  button,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0.8rem",
        marginTop: "1rem",
      }}
    >
      <div style={iconStyle}>{icon}</div>
      <div className="pair">
        <h4>{pair1.name}</h4>
        <p>{pair1.value}</p>
      </div>
      <div className="pair">
        <h4>{pair2.name}</h4>
        <p>{pair2.value}</p>
      </div>
      <div className="pair">
        <h4>{pair3.name}</h4>
        <p>{pair3.value}</p>
      </div>
      <div className="pair">
        <h4>{pair4.name}</h4>
        <p>{pair4.value}</p>
      </div>
      <button
        style={{
          backgroundColor: "transparent",
          padding: "0.7rem 1.5rem",
          border: "1px deepskyblue solid",
          borderRadius: "20px",
        }}
      >
        {button}
      </button>
    </div>
  );
}

export default BankServiceList;
