import React from "react";
import "./AllTransaction.css";
import { transactions } from "../../Data.js";

function AllTransaction() {
  return (
    <>
      <table className="large-screen">
        {transactions.map((row) =>
          row.description === "description" ? (
            <tr>
              <th>{row.icon + row.description}</th>
              <th>{row.transactionId}</th>
              <th>{row.type}</th>
              <th>{row.card}</th>
              <th>{row.date}</th>
              <th>{row.ammount}</th>
              <th>{row.receipt}</th>
            </tr>
          ) : (
            <tr>
              <td>{row.icon + row.description}</td>
              <td>{row.transactionId}</td>
              <td>{row.type}</td>
              <td>{row.card}</td>
              <td>{row.date}</td>
              <td>{row.ammount}</td>
              <td>
                <button className="button">Download</button>
              </td>
            </tr>
          )
        )}
      </table>

      {/* for small screen */}
      <div
        className="small-screen"
      >
        {transactions.map((row) =>
          row.description === "description" ? (
            <></>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid lightgray",
                padding: "0 1rem",
              }}
            >
              <div>
                <p>{row.icon + row.description}</p>
                <p style={{ marginLeft: "1.5rem" }}>{row.date}</p>
              </div>
              <div>
                <h5 style={{color:"lightgreen"}}>{row.ammount}</h5>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default AllTransaction;
