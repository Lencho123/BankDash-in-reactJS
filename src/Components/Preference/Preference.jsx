import React, { useRef, useState } from "react";
import "./Preference.css";

function Preference() {
  const toggle1 = useRef();
  const toggle2 = useRef();
  const toggle3 = useRef();

  const [toggle1Active, setToggle1Active] = useState(false);
  const [toggle2Active, setToggle2Active] = useState(false);
  const [toggle3Active, setToggle3Active] = useState(false);

  function handleChange1() {
    setToggle1Active(toggle1.current.checked);
  }
  function handleChange2() {
    setToggle2Active(toggle2.current.checked);
  }
  function handleChange3() {
    setToggle3Active(toggle3.current.checked);
  }
  return (
    <form className="preference-form">
      <div
        className="preference-section-1"
      >
        <label
          style={{
            flexBasis: "50%",
          }}
          htmlFor="currency"
        >
          Currency <br />
          <input
            className="preference-input"
            type="text"
            id="currency"
            placeholder="USD"
          />
        </label>

        <label
          style={{
            flexBasis: "50%",
          }}
          htmlFor="time-zone"
        >
          Time Zone <br />
          <input
            className="preference-input"
            type="text"
            id="time-zone"
            placeholder="(GMT-12:00) International Line West"
          />
        </label>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h3 style={{ margin: "0", padding: "0", marginTop: "1rem" }}>
          Notification
        </h3>
        <label
          htmlFor="digital-currency"
          onChange={(e) => {
            handleChange1();
          }}
        >
          <input
            className="hidden-checkbox"
            ref={toggle1}
            type="checkbox"
            id="digital-currency"
          />
          <span
            style={{ marginBottom: "-0.4rem" }}
            className={toggle1Active ? "opened" : "closed"}
          ></span>
          I send or receive digital currency
        </label>

        <label
          htmlFor="merchant"
          onChange={(e) => {
            handleChange2();
          }}
        >
          <input
            className="hidden-checkbox"
            ref={toggle2}
            type="checkbox"
            id="merchant"
          />
          <span
            style={{ marginBottom: "-0.4rem" }}
            className={toggle2Active ? "opened" : "closed"}
          ></span>
          I receive merchant order
        </label>

        <label
          htmlFor="recommendation"
          onChange={(e) => {
            handleChange3();
          }}
        >
          <input
            className="hidden-checkbox"
            ref={toggle3}
            type="checkbox"
            id="recommendation"
          />
          <span
            style={{ marginBottom: "-0.4rem" }}
            className={toggle3Active ? "opened" : "closed"}
          ></span>
          There are reccomendation for my account
        </label>
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", padding: "0 0.5rem" }}
      >
        <button
          className="profile-submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Preference;
