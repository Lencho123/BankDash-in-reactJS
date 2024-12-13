import React, { useState } from "react";
import "./Setting.css";
import { Link, Outlet } from "react-router-dom";

function Setting() {
  const [clicked, setClicked] = useState("profile");
  const handleClick = (val) => {
    setClicked(val);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Link
          className="setting-link"
          onClick={() => {
            handleClick("profile");
          }}
          to="profile"
        >
          <p className={clicked === "profile" ? "clicked" : "not-clicked"}>
            Edit Profile
          </p>
        </Link>
        <Link
          className="setting-link"
          onClick={() => {
            handleClick("preference");
          }}
          to="preference"
        >
          <p className={clicked === "preference" ? "clicked" : "not-clicked"}>
            Preference
          </p>
        </Link>
        <Link
          className="setting-link"
          onClick={() => {
            handleClick("security");
          }}
          to="security"
        >
          <p className={clicked === "security" ? "clicked" : "not-clicked"}>
            Security
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Setting;
