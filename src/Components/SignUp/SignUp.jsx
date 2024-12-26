import React, { useState } from "react";
import "./SignUp.css";
import { authenticator } from "../../Data";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function createAccount() {
    const account = {
      name: name,
      email: email,
      password: password,
      confirm: confirm,
    };
    authenticator.push(account);
    console.log(authenticator)
  }
  return (
    <div className="sign-up">
      <h3>Create account</h3>
      <form>
        <label htmlFor="name">
          Name:{" "}
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John"
            value={name}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="len@gmail.com"
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </label>
        <label htmlFor="confirm">
          Confirm Pwd:{" "}
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            value={confirm}
          />
        </label>
        <Link to={'/login-sinUp'}>
          <button onClick={()=>createAccount()}>Create</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
