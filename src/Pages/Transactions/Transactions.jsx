import React, { useState } from "react";
import "./Transactions.css";
import transction_card1 from "../../assets/transaction_card1.png";
import { Link, Outlet } from "react-router-dom";
import MidCard from "../../Components/MidCard/MidCard";
import { midCardStyle } from "../../Styles/midCardStyle";

function Transactions() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  return (
    <div className="transaction">
      <div className="transaction-section-1">
        <div className="t-midcard">
          <MidCard leftSpan="My Card" cardStyle={midCardStyle.blue} />
        </div>
        <div className="t-midcard">
          <MidCard rightSpan="+Add Card" cardStyle={midCardStyle.white} />
        </div>

        <div style={{
          flexBasis:"33%"
        }}>
          <h4
            style={{ margin: "0", paddingBottom: "0.5rem", fontWeight: "300" }}
          >
            My Expense
          </h4>
          <div className="transction_card1">
            <img width="100%"
              src={transction_card1}
            />
          </div>
        </div>
      </div>
      <div className="alltransaction">
        <h2>All Transactions</h2>
        <div className="alltransaction1">
          <Link
            to={"alltransaction"}
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
            to="nohistory"
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
            to="nohistory"
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
      <Outlet />
    </div>
  );
}

export default Transactions;
