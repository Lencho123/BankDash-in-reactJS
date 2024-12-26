import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import App from "./App";
import Login from "./Components/Login/Login";
import { SideBarProvider } from "./Context/SideBarProvider";
import SignUp from "./Components/SignUp/SignUp";

function Base() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <SideBarProvider
            login={login}
            setLogin={setLogin}
          >
        <Routes>
          <Route path="/login-sinUp" element={<Landing />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/*" element={<App />} />
          <Route path="/sign-up/*" element={<SignUp/>}/>
        </Routes>
      </SideBarProvider>
    </div>
  );
}

export default Base;
