import React, { useState } from "react";
import "./Transactions.css";
import transction_card1 from "../../assets/transaction_card1.png";
import { Link, Outlet } from "react-router-dom";
import AllTransaction from "../../Components/AllTransaction/AllTransaction";
import MidCard from "../../Components/MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";

function Transactions() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <MidCard leftSpan="My Card" cardStyle={midCardStyle.blue} />
        <MidCard rightSpan="+Add Card" cardStyle={midCardStyle.white} />
        <div>
          <h4 style={{margin:"0", paddingBottom:"0.5rem", fontWeight:"300"}}>My Expense</h4>
          <img
            style={{ width: "21rem", maxHeight: "20rem", flexBasis: "33%" }}
            src={transction_card1}
          />
        </div>
      </div>
      <div className="alltransaction">
        <h2>All Transactions</h2>
        <div className="alltransaction1">
          <Link
            to={"/transaction/alltransaction"}
            className={active1 ? "activep linkt" : "linkt"}
            onClick={() => {
              setActive1(true);
              setActive2(false);
              setActive3(false);
            }}
          >
            All Transactions
          </Link>
          <Link
            to="/transaction/nohistory"
            className={active2 ? "activep linkt" : "linkt"}
            onClick={() => {
              setActive1(false);
              setActive2(true);
              setActive3(false);
            }}
          >
            Income
          </Link>
          <Link
            to="/transaction/nohistory"
            className={active3 ? "activep linkt" : "linkt"}
            onClick={() => {
              setActive1(false);
              setActive2(false);
              setActive3(true);
            }}
          >
            Expense
          </Link>
        </div>
      </div>
      {active1 && !active2 && !active3 ? <AllTransaction /> : <Outlet />}
    </div>
  );
}

export default Transactions;
