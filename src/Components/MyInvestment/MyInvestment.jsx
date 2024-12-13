import React from "react";
import "./MyInvestment.css";
import { Apple, Car, Smartphone } from "lucide-react";
import investment_card3 from "../../assets/investment_card3.png";

function MyInvestment() {
  return (
    <div className="my-investment" style={{display:"flex", gap:"1.5rem", alignItems:"center"}}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexBasis:"60%"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                color: "tomato",
                backgroundColor: "pink",
                width: "2rem",
                display: "flex",
                height: "2rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Apple />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h4 style={{ margin: "0" }}>Apple Store</h4>
              <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
                E-commerce, Marketplace
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>$54,000</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
              Investment Value
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>+16%</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>Return Value</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                color: "darkblue",
                backgroundColor: "lightblue",
                width: "2rem",
                display: "flex",
                height: "2rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Smartphone />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h4 style={{ margin: "0" }}>Samsung Mobile</h4>
              <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
                E-commerce, Marketplace
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>$44,000</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
              Investment Value
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>+16%</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>Return Value</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                color: "tomato",
                backgroundColor: "lightyellow",
                width: "2rem",
                display: "flex",
                height: "2rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Car />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h4 style={{ margin: "0" }}>Tesla Motors</h4>
              <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
                Electric Vahicles
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>$54,00</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>
              Investment Value
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <h4 style={{ margin: "0" }}>+26%</h4>
            <p style={{ color: "hsl(0,0%,40%)", margin: "0" }}>Return Value</p>
          </div>
        </div>
      </div>
      <img className="my-investment-img" src={investment_card3}/>
    </div>
  );
}

export default MyInvestment;
