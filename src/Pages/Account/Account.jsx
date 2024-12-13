import React from "react";
import SmallCard from "../../Components/SmallCard/SmallCard";
import {
  BadgeCent,
  BadgeDollarSignIcon,
  HandCoinsIcon,
  NotebookPenIcon,
} from "lucide-react";
import "./Account.css";
import MidCard from "../../Components/MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";
import LastTransaction from "../../Components/LastTransaction/LastTransaction";

function Account() {
  return (
    <div className="account">
      <div className="asmallcards">
        <SmallCard
          btn={<BadgeDollarSignIcon />}
          name="My balance"
          value="$12,799"
          style={{
            color: "rgb(232, 175, 29)",
            backgroundColor: "rgb(238, 229, 211)",
          }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCard
          btn={<HandCoinsIcon />}
          name="Income"
          value="$1,799"
          style={{ color: "#1587ce", backgroundColor: "#86c1e5" }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCard
          btn={<NotebookPenIcon />}
          name="Expence"
          value="$2,799"
          style={{ color: "#e5336e", backgroundColor: "#d793aa" }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCard
          btn={<BadgeCent />}
          name="Total Saving"
          value="$5,799"
          style={{ color: "#0beb91", backgroundColor: "#95f3cd" }}
          flex={{
            flexBasis: "25%",
          }}
        />
      </div>
      <div className="account-section-2">
        <div>
          <LastTransaction />
        </div>
        <div className="account-section-2-div-1">
          <MidCard
            cardStyle={midCardStyle.blue}
            leftSpan="My Card"
            rightSpan=""
          />
        </div>
      </div>
    </div>
  );
}

export default Account;
