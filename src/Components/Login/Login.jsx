import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { authenticator } from "../../Data";
import { Link } from "react-router-dom";
import { SideBarContex } from "../../Context/SideBarProvider";

function Login() {
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const email = useRef();
  const password = useRef();
  const value = useContext(SideBarContex);
  const login = value.login;
  const setLogin = value.setLogin;
  console.log(emailVal);
  console.log(passwordVal)
  console.log(login)

  function youHaveAccount() {
    let returnVal=false;
    authenticator.forEach((element) => {
      console.log(element)
      if (
        element.email === emailVal &&
        element.password === passwordVal
      ) {
        returnVal= true;
        
      }
    });
    return returnVal;
  }
  return (
    <div className="login">
        <h4>Login to your account</h4>
        <form >
          <label htmlFor="email">
            Email: <input ref={email} value={emailVal} type="email" id="email"
            onChange={(e)=>setEmailVal(e.target.value)} placeholder="len@gmail.com"/>
          </label>
          <label htmlFor="password">
            Password: <input ref={password} value={passwordVal} type="password" id="password" 
            onChange={(e)=>setPasswordVal(e.target.value)} placeholder="****"/>
          </label>
          <Link to={"/"}>
            <button onClick={()=>setLogin(youHaveAccount())}>Login</button>
          </Link>
        </form>
    </div>
  );
}

export default Login;
