import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing">
      <div className="landing-card">
        <h2>Well-come to this site!</h2>
        <div className="login-signUp">
          <Link to={'/sign-up'}><button>Sign Up</button></Link>
          <Link to={'/login'}><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
