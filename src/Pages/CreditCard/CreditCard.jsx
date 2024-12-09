import React from "react";
import "./CreditCard.css";
import { midCardStyle } from "../../Styles/midCardStyle";
import MidCard from "../../Components/MidCard/MidCard";
import creditcard_card1 from "../../assets/creditcard_card1.png";
import creditcard_card2 from "../../assets/creditcard_card2.png";
import { CarFront } from "lucide-react";
import CardList from "../../Components/CardList/CardList";
import AddNewCardForm from "../../Components/AddNewCardForm/AddNewCardForm";

const cardListData = [
  {
    icon: <CarFront />,
    cardtype: "Secondary",
    bank: "DBL Bank",
    cardnumber: "**** **** 5600",
    namaincard: "William",
  },
  {
    icon: <CarFront />,
    cardtype: "Secondary",
    bank: "DBL Bank",
    cardnumber: "**** **** 5600",
    namaincard: "William",
  },
  {
    icon: <CarFront />,
    cardtype: "Secondary",
    bank: "DBL Bank",
    cardnumber: "**** **** 5600",
    namaincard: "William",
  },
];

function CreditCard() {
  return (
    <div>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.lightblue} />
        <MidCard cardStyle={midCardStyle.blue} />
        <MidCard cardStyle={midCardStyle.white} />
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <img className="img" width="34%" src={creditcard_card1} />
        <div style={{ flexBasis: "66%" }}>
          <h4>Card List</h4>
          {cardListData.map((data) => (
            <CardList
              icon={data.icon}
              cardtype={data.cardtype}
              bank={data.bank}
              cardnumber={data.cardnumber}
              namaincard={data.namaincard}
            />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <div style={{ flexBasis: "60%" }}>
          <h3 style={{margin:"0", marginBottom:"1rem", fontWeight:"500"}}>Add New Card</h3>
          <AddNewCardForm />
        </div>
        <img style={{maxHeight:"20rem"}} width="40%" src={creditcard_card2} />
      </div>
    </div>
  );
}

export default CreditCard;
