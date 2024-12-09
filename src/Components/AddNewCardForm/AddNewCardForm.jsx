import React from "react";
import "./AddNewCardForm.css";

function AddNewCardForm() {
  return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
        action="post"
      >
        <p style={{ color: "dimgray", margin:"0 2.3rem", marginBottom:"1rem" }}>
          Credit card generally means a plastic card issue by scheduled
          Commercial Banks assigned to a cardholder, with a credit limit, that
          can be used to purchase goods and services to obtain cash advances.
        </p>
        <fieldset
          style={{ border: "none", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", margin:"0 1.5rem"}}>
            <label htmlFor="card-type">
              Card Type <br />
              <input id="card-type" type="text" placeholder="Classic" />
            </label>
            <label htmlFor="name-on-card">
              My Cards <br />
              <input id="name-on-card" type="text" placeholder="My Cards" />
            </label>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", margin:"0 1.5rem"}}>
            <label htmlFor="balance">
              Balance <br />
              <input id="balance" type="text" placeholder="27,00$" />
            </label>
            <label htmlFor="expire-date">
              Expiration Date <br />
              <input
                id="expire-date"
                type="date"
                placeholder="25 January 2025"
              />
            </label>
          </div>
          <button style={{border:"1px skyblue solid", width:"6rem", height:"2rem", borderRadius:"5px", backgroundColor:"blue", color:"white", margin:"0.5rem 1.5rem"}}>Add Card</button>
        </fieldset>
      </form>
  );
}

export default AddNewCardForm;
