import React, { useState } from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div className="loginWrapper">
      <div className="logoDiv">
        <img className="logoImage" src="logoWhite.png" alt="bluelogo" />
      </div>
      <div className="formDiv">
        <div className="formHeader">Log into your account</div>
        <form onSubmit={handleSubmit} className="loginForm">
          <input
            className="textfield"
            type="text"
            required
            placeholder="Username"
            value={data.username}
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, username: e.target.value }))
            }
          />
          <input
            className="textfield"
            type="password"
            required
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, password: e.target.value }))
            }
          />
          <Button className="loginButton" variant="contained" type="submit">
            Login
          </Button>
        </form>
        <div className="promptLine">
          Don't have an account yet?
          <br />
          <span>
            <Link to="/signup" className="linkText">
              Create an account
            </Link>
          </span>
          <div className="forgot">
            <Link to="/forgot-username" className="forgotLink">
              Forgot Username
            </Link>
            <Link to="/forgot-password" className="forgotLink">
              Forgot Password
            </Link>
            <Link to="/forgot-pin" className="forgotLink">
              Forgot PIN
            </Link>
          </div>
          <div className="tnc">
            By Logging in, you agree to our{" "}
            <span className="tncLink">Terms of Use</span>, &nbsp;
            <span className="tncLink">Privacy policy</span> and{" "}
            <span className="tncLink">Security</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
