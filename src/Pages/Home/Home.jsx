import React from "react";
import "./Home.css";
import home_card2 from "../../assets/home_card2.png";
import home_card3 from "../../assets/home_card3.png";
import home_card4 from "../../assets/home_card4.png";
import home_card5 from "../../assets/home_card5.png";
import QuickTransfer from "../../Components/QuickTransfer/QuickTransfer";
import MidCard from "../../Components/MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";

function Home() {
  return (
    <div className="home">
      <div style={{display:"flex", gap:"1.5rem",}}>
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.blue}/>
        <MidCard rightSpan="See all" cardStyle={midCardStyle.white}/>
        <img style={{width:"19rem", flexBasis:"33%"}}
        src={home_card2} />
      </div>
      <div className="home-section-1">
        <img src={home_card3} />
        <img src={home_card4} />
      </div>
      <div className="home-section-2">
        <div className="tcard">
          <QuickTransfer />
        </div>
        <img src={home_card5} />
      </div>
    </div>
  );
}

export default Home;
