import React from "react";
import "./Investment.css";
import SmallCard from "../../Components/SmallCard/SmallCard";
import {  DollarSignIcon, PieChart, Repeat } from "lucide-react";
import investment_card1 from '../../assets/investment_card1.png'
import investment_card2 from '../../assets/investment_card2.png'
import MyInvestment from "../../Components/MyInvestment/MyInvestment";
function Investment() {
  return (
    <div>
      <div style={{display:"flex", gap:"1.5rem"}}>
      <SmallCard
          btn={<DollarSignIcon/>}
          name="Total Invested ammount"
          value="$12,799"
          style={{
            color: "rgb(232, 175, 29)",
            backgroundColor: "rgb(238, 229, 211)",
          }}
          flex={{
            flexBasis:"33%"
          }}
        />
        <SmallCard
          btn={<PieChart/>}
          name="Number of Investments"
          value="2,799"
          style={{
            color: "rgb(211, 77, 19)",
            backgroundColor: "gb(245, 193, 171)",
          }}
          flex={{
            flexBasis:"33%"
          }}
        />
        <SmallCard
          btn={<Repeat/>}
          name="Rate of Return"
          value="+5.80%"
          style={{
            color: "rgb(66, 168, 220)",
            backgroundColor: "rgb(176, 224, 248)",
          }}
          flex={{
            flexBasis:"33%"
          }}
        />
      </div>
      <div style={{display:"flex", gap:"1.5rem", marginTop:"1.5rem"}}>
        <img src={investment_card1} width="50%"/>
        <img src={investment_card2} width="50%"/>
      </div>
      <div>
        <h3>My Investment</h3>
        <MyInvestment/>
      </div>
    </div>
  );
}

export default Investment;
