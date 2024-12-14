import React from "react";
import "./Loan.css";
import { loanOverview } from "../../Data";
import { BarChart, Gift, User, X } from "lucide-react";
import SmallCard from "../../Components/SmallCard/SmallCard";

function Loan() {
  return (
    <div>
      <div className="asmallcards">
        <SmallCard
          btn={<User />}
          name="Personal Loans"
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
          btn={<Gift />}
          name="Corporate loan"
          value="$1,799"
          style={{ color: "#1587ce", backgroundColor: "#86c1e5" }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCard
          btn={<BarChart />}
          name="Business Loans"
          value="$500,799"
          style={{ color: "#e5336e", backgroundColor: "#d793aa" }}
          flex={{
            flexBasis: "25%",
          }}
        />
        <SmallCard
          btn={<X />}
          name="Custom Loans"
          value="Chose Money"
          style={{ color: "#0beb91", backgroundColor: "#95f3cd" }}
          flex={{
            flexBasis: "25%",
          }}
        />
      </div>
      <h3
        style={{
          margin: "0",
          padding: "0",
          marginBottom: "-1rem",
          marginTop: "1.5rem",
        }}
      >
        Active Loan Overview
      </h3>
      <table className="active-loan-table">
        {loanOverview.map((row) =>
          row.slNo === "slNo" ? (
            <tr>
              <th className="large-screen">{row.slNo}</th>
              <th >{row.loanMoney}</th>
              <th >{row.leftToReplay}</th>
              <th className="large-screen">{row.duration}</th>
              <th className="large-screen">{row.interestRate}</th>
              <th className="large-screen">{row.installment}</th>
              <th>{row.button}</th>
            </tr>
          ) : (
            <tr>
              <td className="large-screen">{row.slNo}</td>
              <td>{row.loanMoney}</td>
              <td>{row.leftToReplay}</td>
              <td className="large-screen">{row.duration}</td>
              <td className="large-screen">{row.interestRate}</td>
              <td className="large-screen">{row.installment}</td>
              <td>
                <button className="button">Replay</button>
              </td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default Loan;
