import React from "react";
import "./SmallCardService.css";

function SmallCardServide({ btn, name, value, style, flex }) {
  return (
    <div style={flex} className="ssmall-card">
      <button style={style}>{btn}</button>
      <div className="right-small-card">
        <h3>{name}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default SmallCardServide;
