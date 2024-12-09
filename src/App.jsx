import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";
import { SideBarProvider } from "./Context/SideBarProvider.jsx";
import Transactions from "./Pages/Transactions/Transactions.jsx";
import AllTransaction from "./Components/AllTransaction/AllTransaction.jsx";
import NoHistory from "./Components/NoHistory/NoHistory.jsx";
import Account from "./Pages/Account/Account.jsx";
import Investment from "./Pages/Investment/Investment.jsx";
import CreditCard from "./Pages/CreditCard/CreditCard.jsx";

function App() {
  const [curPage, setCurPage] = useState("Overview");
  return (
    <div className="app">
      <SideBarProvider curPage={curPage} setCurPage={setCurPage}>
        <NavBar />
        <div className="main">
          <div className="mside">
            <SideBar />
          </div>
          <div className="routes">
            <Routes>
              <Route path="/BankDash-in-reactJS" element={<Home />} />
              <Route path="/transaction" element={<Transactions />}>
                <Route path="alltransaction" element={<AllTransaction />} />
                <Route path="nohistory" element={<NoHistory />} />
                <Route path="nohistory" element={<NoHistory />} />
              </Route>
              <Route path="/account" element={<Account />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/creditcard" element={<CreditCard/>} />
              {/* <Route path="/loan" element={<Loan />} />
          <Route path="/service" element={<Service />} />
          <Route path="/my-privilage" element={<MyPrivilage />} />
          <Route path="/setting" element={<Setting />} /> */}
            </Routes>
          </div>
        </div>
      </SideBarProvider>
    </div>
  );
}

export default App;
