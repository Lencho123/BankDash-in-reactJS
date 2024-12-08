import React, { useContext } from "react";
import "./NavBar.css";
import { Bell, Search, Settings, Wallet } from "lucide-react";
import profile from "../../assets/profile.png";
import {SideBarContex} from '../../Context/SideBarProvider';


function NavBar() {
  const value = useContext(SideBarContex)
  const curPage=value.curPage
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <Wallet />
          <h1>BankDash.</h1>
        </div>
        <h2>{curPage}</h2>
      </div>
      <div className="right">
        <div className="input">
          <Search />
          <input type="search" placeholder="Search for something" />
        </div>
        <Settings className="icon"/>
        <Bell className="icon"/>
        <img src={profile} width="25px" />
      </div>
    </div>
  );
}

export default NavBar;
