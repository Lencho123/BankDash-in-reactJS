import React, { useContext } from "react";
import "./NavBar.css";
import { Bell, Menu, Search, Settings, Wallet } from "lucide-react";
import profile from "../../assets/profile.png";
import { SideBarContex } from "../../Context/SideBarProvider";
import { Link } from "react-router-dom";
function NavBar() {
  const value = useContext(SideBarContex);
  const setCurPage = value.setCurPage;
  const curPage = value.curPage;
  const setShowSide = value.setShowSide;
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <Wallet />
          <h1>BankDash.</h1>
        </div>
        <h2>{curPage}</h2>
      </div>

      <div className="small-nav">
        <div
          className="small-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="menu" onClick={() => setShowSide(true)}>
            <Menu />
          </button>
          <h4>{curPage}</h4>
          <img src={profile} width="25px" style={{ borderRadius: "50%" }} />
        </div>

        <div
          className="small-search"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div className="input" style={{ width: "100%" }}>
            <Search />
            <input type="search" placeholder="Search for something" />
          </div>
        </div>
      </div>

      <div className="right">
        <label htmlFor="search" className="input">
          <Search />
          <input id="search" type="search" placeholder="Search for something" />
        </label>
        <Link
          to="/app/setting"
          className={`li ${curPage === "Settings" ? "active" : ""}`}
          onClick={() => setCurPage("Settings")}
          style={{ marginBottom: "1.5rem" }}
        >
          <Settings className="icon" />
        </Link>
        <Bell className="icon" />
        <a href="https://www.linkedin.com/in/lencho-lachisa-603b0633b/">
          <img src={profile} width="25px" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
