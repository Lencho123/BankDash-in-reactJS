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
  console.log(passwordVal);
  console.log(login);

  function youHaveAccount() {
    let returnVal = false;
    authenticator.forEach((element) => {
      console.log(element);
      if (element.email === emailVal && element.password === passwordVal) {
        returnVal = true;
      }
    });
    return returnVal;
  }
  return (
    <div className="login">
      <h4>Login to your account</h4>
      <span style={{ margin: "1rem", color: "green" }}>
        Use the indicated/pointed email and password to login
      </span>
      <form>
        <label htmlFor="email">
          Email: (👉l2@gmail.com){" "}
          <input
            ref={email}
            value={emailVal}
            type="email"
            id="email"
            onChange={(e) => setEmailVal(e.target.value)}
            placeholder="len@gmail.com"
          />
        </label>
        <label htmlFor="password">
          Password: (👉 123){" "}
          <input
            ref={password}
            value={passwordVal}
            type="password"
            id="password"
            onChange={(e) => setPasswordVal(e.target.value)}
            placeholder="****"
          />
        </label>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Link to={"/app"}>
            <button onClick={() => setLogin(youHaveAccount())}>Login</button>
          </Link>

          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        {login ? (
          <></>
        ) : (
          <div>
            <p style={{ color: "red" }}>
              Unmatch password and email. Please retry!
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
