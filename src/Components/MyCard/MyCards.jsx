import React from "react";
import "./MyCards.css";
import { IdCard, Save } from "lucide-react";
import MidCard from "../MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";
function MyCards({image}) {
  return (
    <div className="mycards">
      <MidCard cardStyle={midCardStyle.blue} leftSpan="My Card"/>
      <MidCard cardStyle={midCardStyle.white} rightSpan="+Add card"/>

      <div className="d1">
        <span>My Expense</span>
        <div className="card3">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default MyCards;
