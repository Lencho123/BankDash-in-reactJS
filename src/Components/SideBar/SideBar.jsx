import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

import {
  Home,
  Repeat,
  Settings,
  UserCircle,
  BarChart,
  CreditCard,
  DollarSign,
  Briefcase,
  Star,
} from "lucide-react";
import { SideBarContex } from "../../Context/SideBarProvider";

function SideBar() {
  const value = useContext(SideBarContex);
  const setCurPage = value.setCurPage;
  const curPage = value.curPage;

  return (
    <div className={"sidebar"}>
      <ul>
        <Link
          to="/app/"
          className={`li ${curPage === "Overview" ? "active" : ""}`}
          onClick={() => setCurPage("Overview")}
        >
          <Home /> Dashboard
        </Link>
        <Link
          to="/app/transaction"
          className={`li ${curPage === "Transactions" ? "active" : ""}`}
          onClick={() => setCurPage("Transactions")}
        >
          <Repeat /> Transactions
        </Link>
        <Link
          to="/app/account"
          className={`li ${curPage === "Accounts" ? "active" : ""}`}
          onClick={() => setCurPage("Accounts")}
        >
          <UserCircle /> Accounts
        </Link>
        <Link
          to="/app/investment"
          className={`li ${curPage === "Investments" ? "active" : ""}`}
          onClick={() => setCurPage("Investments")}
        >
          <BarChart /> Investments
        </Link>
        <Link
          to="/app/creditcard"
          className={`li ${curPage === "Credit Cards" ? "active" : ""}`}
          onClick={() => setCurPage("Credit Cards")}
        >
          <CreditCard /> Credit Cards
        </Link>
        <Link
          to="/app/loan"
          className={`li ${curPage === "Loans" ? "active" : ""}`}
          onClick={() => setCurPage("Loans")}
        >
          <DollarSign /> Loans
        </Link>
        <Link
          to="/app/service"
          className={`li ${curPage === "Services" ? "active" : ""}`}
          onClick={() => setCurPage("Services")}
        >
          <Briefcase /> Services
        </Link>
        <Link
          to="/app/myprivilage"
          className={`li ${curPage === "My Privilages" ? "active" : ""}`}
          onClick={() => setCurPage("My Privilages")}
        >
          <Star /> My Privilages
        </Link>
        <Link
          to="/app/setting"
          className={`li ${curPage === "Settings" ? "active" : ""}`}
          onClick={() => setCurPage("Settings")}
        >
          <Settings /> Settings
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
