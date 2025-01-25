import React from "react";
import "./CreditCard.css";
import { midCardStyle } from "../../Styles/midCardStyle";
import MidCard from "../../Components/MidCard/MidCard";
import creditcard_card1 from "../../assets/creditcard_card1.png";
import creditcard_card2 from "../../assets/creditcard_card2.png";
import { CarFront } from "lucide-react";
import CardList from "../../Components/CardList/CardList";
import AddNewCardForm from "../../Components/AddNewCardForm/AddNewCardForm";
import CardExpenseStatistics from "../../Components/CardExpenseStatistics/CardExpenseStatistics";

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
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div className="credit-card-mid-card">
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.lightblue} />

        <MidCard cardStyle={midCardStyle.blue} />

        <MidCard cardStyle={midCardStyle.white} />
      </div>
      <div className="credit-card-card-list">
        <div className="credit-card-card-list-img">
          {/* <img width="100%" src={creditcard_card1} /> */}
          <CardExpenseStatistics/>
        </div>

        <div className="credit-card-card-list-lists">
          <div className="credit-card-card-list-lists-h4">
            <h4>Card List</h4>
          </div>
          <div className="credit-card-card-list-lists-row">
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
      </div>

      <div className="credit-card-section-2">
        <div className="credit-card-add-new-card">
          <h3 style={{ margin: "0", marginBottom: "1rem", fontWeight: "500" }}>
            Add New Card
          </h3>
          <div className="add-new-card-form-section">
            <AddNewCardForm />
          </div>
        </div>

        <div className="credit-card-section-2-img">
          <img width="100%" src={creditcard_card2} />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
