import React, { useRef, useState } from "react";
import "./Security.css";

function Security() {
  const [toggleActive, setToggleActive] = useState(false);
  const toggle = useRef();
  const handleChange = () => {
    setToggleActive(toggle.current.checked);
  };
  return (
    <form className="security-form">
      <h4>Two-factor Authentication</h4>
      <label
        htmlFor="digital-currency"
        onChange={(e) => {
          handleChange();
        }}
      >
        <input
          className="hidden-checkbox"
          ref={toggle}
          type="checkbox"
          id="digital-currency"
        />
        <span
          style={{ marginBottom: "-0.4rem" }}
          className={toggleActive ? "opened" : "closed"}
        ></span>
        Enable or disable two factor authentication
      </label>
      <h4>Change Password</h4>

      <div>
        <label htmlFor="password">
          Password
          <br />
          <input
            style={{ maxWidth: "60%" }}
            className="profile-input"
            type="password"
            id="password"
            placeholder="***********"
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <br />
          <input
            style={{ maxWidth: "60%" }}
            className="profile-input"
            type="password"
            id="password"
            placeholder="***********"
          />
        </label>
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", padding: "0 0.5rem" }}
      >
        <button
          className="security-submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Security;
