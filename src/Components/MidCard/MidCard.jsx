import React from "react";
import "./MidCard.css";
import { IdCard, Save } from "lucide-react";
function MidCard({ leftSpan, rightSpan, cardStyle }) {
  return (
    <div className="mid-card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{leftSpan}</span>
        <span>{rightSpan}</span>
      </div>

      <div style={cardStyle}>
        <div className="row1">
          <div>
            <p>Balance</p>
            <h4>$5,756</h4>
          </div>
          <div className="ptr">
            <IdCard />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <h3>CARD HOLDER</h3>
            <h4>Eddy Cusuma</h4>
          </div>
          <div style={{ paddingLeft: "15%" }}>
            <h3>VALID THRU</h3>
            <h4>12/22</h4>
          </div>
        </div>

        <div className="row3">
          <p>3778 **** **** 1234</p>
          <div className="ptr">
            <Save />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidCard;
