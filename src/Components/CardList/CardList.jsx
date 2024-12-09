import React from "react";
import "./CardList.css";

function CardList({ icon, cardtype, bank, cardnumber, namaincard }) {
  return (
    <div className="card-list">
      <div
        style={{
          width: "2rem",
          height: "2rem",
          color: "darkcyan",
          backgroundColor: "lightblue",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{color:"black", fontWeight:"600", marginBottom:'0'}}>Card Type</p>
        <p>{cardtype}</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"600", marginBottom:'0'}}>Bank</p>
        <p>{bank}</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"600", marginBottom:'0'}}>Card Number</p>
        <p>{cardnumber}</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"600", marginBottom:'0'}}>Namain Card</p>
        <p>{namaincard}</p>
      </div>
      <div style={{display:'flex', alignItems:"center"}}>
        <a style={{ textDecoration: "none", color: "blueviolet", fontSize:"11px"}} href="#">
          View Details
        </a>
      </div>
    </div>
  );
}

export default CardList;
