import React from "react";
import "./QuickTransfer.css";
import user from "../../assets/user.png";
import { Send } from "lucide-react";

function QuickTransfer() {
  return (
    <div className="master-card">
      <h4>Quick Transfer</h4>
      <div className="card">
        <div className="user-card">
          <div className="user">
            <img src={user} />
            <h3>Lencho</h3>
            <h4>CBE</h4>
          </div>
          <div className="user">
            <img src={user} />
            <h3>Lencho</h3>
            <h4>CBE</h4>
          </div>
          <div className="user">
            <img src={user} />
            <h3>Lencho</h3>
            <h4>CBE</h4>
          </div>
        </div>

        <div className="card-form">
          <p>Write ammount</p>
          <div className="card-input">
            <input type="text" placeholder="$25.00" />
            <button>
              Send <Send />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
