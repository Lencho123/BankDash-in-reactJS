import React from "react";
import "./Home.css";
import home_card2 from "../../assets/home_card2.png";
import home_card3 from "../../assets/home_card3.png";
import home_card4 from "../../assets/home_card4.png";
import home_card5 from "../../assets/home_card5.png";
import QuickTransfer from "../../Components/QuickTransfer/QuickTransfer";
import MidCard from "../../Components/MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";
import WeeklyActivityBar from "../../Components/WeeklyActivityBar/WeeklyActivityBar";
import ExpenseStaticsPie from "../../Components/ExpenseStaticsPie/ExpenseStaticsPie";
import BalanceHistoryLine from "../../Components/BalanceHistory/BalanceHistoryLine";

function Home() {
  return (
    <div className="home">
      <div className="hmid-card">
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.blue} />
        <MidCard rightSpan="See all" cardStyle={midCardStyle.white} />

        <div style={{ flexBasis: "33%" }}>
          <img
            className="large-screen"
            style={{ width: "100%"}}
            src={home_card2}
          />
        </div>
      </div>

      <div className=" small-screen on-small-screen-image" >
        <img
          style={{ width: "100%",margin: "auto"}}
          src={home_card2}
        />
      </div>

      <div className="home-section-1">
        <div className="himage1">
          {/* <img width="100%" src={home_card3} /> */}
          <WeeklyActivityBar/>
        </div>
        <div className="himage2">
          {/* <img width="100%" src={home_card4} /> */}
          <ExpenseStaticsPie/>
        </div>
      </div>
      <div
        className="home-section-2"
      >
        <div className="tcard" style={{ flexBasis: "40%" }}>
          <QuickTransfer />
        </div>
        <div style={{ flexBasis: "60%" }}>
          {/* <img width="100%" src={home_card5} /> */}
          <BalanceHistoryLine/>
        </div>
      </div>
    </div>
  );
}

export default Home;
