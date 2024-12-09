import React from "react";
import "./CreditCard.css";
import { midCardStyle } from "../../Styles/midCardStyle";
import MidCard from "../../Components/MidCard/MidCard";

function CreditCard() {
  return (
    <div>
      <div style={{ display: "flex", gap: "1.5rem", alignItems:"center"}}>
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.lightblue} />
        <MidCard cardStyle={midCardStyle.blue} />
        <MidCard cardStyle={midCardStyle.white} />
      </div>
    </div>
  );
}

export default CreditCard;
