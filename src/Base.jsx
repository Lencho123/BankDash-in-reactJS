import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import App from "./App";
import Login from "./Components/Login/Login";
import { SideBarProvider } from "./Context/SideBarProvider";
import SignUp from "./Components/SignUp/SignUp";

function Base() {
  const [login, setLogin] = useState(false);

  return (
    <SideBarProvider login={login} setLogin={setLogin}>
      <Router basename="/BankDash-in-reactJS">
        <Routes>
          <Route path="/" element={<Navigate to="/login-signUp/" />} />
          <Route path="/login-signUp/" element={<Landing />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/app/*" element={login ? <App /> : <Navigate to="/login/" />} />
          <Route path="/sign-up/*" element={<SignUp />} />
        </Routes>
      </Router>
    </SideBarProvider>
  );
}

export default Base;
