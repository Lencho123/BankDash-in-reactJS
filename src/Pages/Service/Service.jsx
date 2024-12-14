import React from "react";
import './Service.css';
import { CheckCircle2, LifeBuoy, ShoppingBag } from "lucide-react";
import SmallCardServide from "../../Components/SmallCardService/SmallCardServide";
import BankServiceList from "../../Components/BankServiceList/BankServiceList";
import { reactData } from "../../reacData";
function Service() {
  return (
    <div>
      <div className="asmallcards">
        <SmallCardServide
          btn={<LifeBuoy />}
          name="Life Insurance"
          value="Unlimited protection"
          style={{
            color: "rgb(232, 175, 29)",
            backgroundColor: "rgb(238, 229, 211)",
          }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCardServide
          btn={<ShoppingBag />}
          name="Shopping"
          value="Buy, Think, Grow"
          style={{ color: "#1587ce", backgroundColor: "#86c1e5" }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCardServide
          btn={<CheckCircle2 />}
          name="Safety"
          value="We are your allies"
          style={{ color: "#e5336e", backgroundColor: "#d793aa" }}
          flex={{
            flexBasis: "25%",
          }}
        />
      </div>

      <h3 style={{ padding: "0", margin: "1rem 0", marginTop: "1.5rem" }}>
        Bank Service List
      </h3>
      {reactData.map((data) => (
        <BankServiceList
          icon={data.icon}
          iconStyle={data.iconStyle}
          pair1={data.pair1}
          pair2={data.pair2}
          pair3={data.pair3}
          pair4={data.pair4}
          button={data.button}
        />
      ))}
    </div>
  );
}

export default Service;
