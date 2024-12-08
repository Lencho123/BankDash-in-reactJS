import React from "react";
import "./LastTransaction.css";
import { lastTransaction } from "../../Data";

function LastTransaction() {
  return (
    <div style={{ flexBasis: "67%" }}>
      <h4 style={{ color: "hsl(0, 0%, 20%)", margin:'0', padding:'0', marginBottom:"0.5rem"}}>Last Transaction</h4>
      <div style={{ borderRadius: "20px", backgroundColor: "white", padding:"1.5rem 1rem" }}>
        {lastTransaction.map((data) => (
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p style={{ font: "6rem" }}>{data.icon}</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>{data.name.name}</h5>
              <p>{data.name.date}</p>
            </div>
            <p>{data.type}</p>
            <p>{data.account}</p>
            <p>{data.status}</p>
            <p>{data.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastTransaction;
