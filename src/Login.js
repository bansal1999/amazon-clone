import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Fancy FIREBASE realated login stuff happen here
  };

  const register = (e) => {
    e.preventDefault();

    //Fancy FIREBASE realated register stuff happen here
  };

  return (
    <div className="login">
      <Link to="/home">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h4>E-Mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon Clone Conditions of Use & sale.
          Please see our Privacy Notice, our Cookies Notice and our Internet
          based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Your Amazon Accout
        </button>
      </div>
    </div>
  );
}

export default Login;
