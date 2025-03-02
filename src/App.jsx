import { useContext, useState } from "react";

import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";
import { SideBarContex, SideBarProvider } from "./Context/SideBarProvider.jsx";
import Transactions from "./Pages/Transactions/Transactions.jsx";
import AllTransaction from "./Components/AllTransaction/AllTransaction.jsx";
import NoHistory from "./Components/NoHistory/NoHistory.jsx";
import Account from "./Pages/Account/Account.jsx";
import Investment from "./Pages/Investment/Investment.jsx";
import CreditCard from "./Pages/CreditCard/CreditCard.jsx";
import Loan from "./Pages/Loan/Loan.jsx";
import Service from "./Pages/Service/Service.jsx";
import MyPrivilage from "./Pages/MyPrivilage/MyPrivilage.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Preference from "./Components/Preference/Preference.jsx";
import Security from "./Components/Security/Security.jsx";
import { Delete } from "lucide-react";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [curPage, setCurPage] = useState("Overview");
  const [showSide, setShowSide] = useState(false);
  const [login, setLogin] = useState(true);

  const value = useContext(SideBarContex);
  console.log(value.login);
  return (
    <>
      {value.login ? (
        <div className="app">
          <SideBarProvider
            curPage={curPage}
            setCurPage={setCurPage}
            setShowSide={setShowSide}
            showSide={showSide}
            login={login}
            setLogin={setLogin}
          >
            <div
              className="hnav-bar"
              style={{
                position: "sticky",
                top: "0",
                left:"0",
                zIndex: "1000",
              }}
            >
              <NavBar />
            </div>
            <div className="main">
              
              <div className="wraper">
                <div className={showSide ? "mside show-side" : "mside"}>
                  <button
                    onClick={() => setShowSide(false)}
                    className={"delete-button"}
                  >
                    <Delete />
                  </button>
                  <SideBar />
                </div>
              </div>
              <div onClick={() => setShowSide(false)} className="routes">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/transaction" element={<Transactions />}>
                    <Route index element={<Navigate to="alltransaction" />} />
                    <Route path="alltransaction" element={<AllTransaction />} />
                    <Route path="nohistory" element={<NoHistory />} />
                    <Route path="nohistory" element={<NoHistory />} />
                  </Route>
                  <Route path="/account" element={<Account />} />
                  <Route path="/investment" element={<Investment />} />
                  <Route path="/creditcard" element={<CreditCard />} />
                  <Route path="/loan" element={<Loan />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/myprivilage" element={<MyPrivilage />} />
                  <Route path="/setting" element={<Setting />}>
                    <Route index element={<Navigate to="profile" />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="preference" element={<Preference />} />
                    <Route path="security" element={<Security />} />
                  </Route>
                </Routes>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </SideBarProvider>
        </div>
      ) : (
        <div className="retry">
          <h3>You entered Password or Email is wrong, please retry!</h3>
          <Link to={"/login"}>
            <button>Back to login</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default App;
