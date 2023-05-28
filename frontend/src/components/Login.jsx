import React from "react";
import Button from "./Button";
import "../styles/login.css";

export default function Login(props) {
  const { handleLogin, loginData, isUserAuthenticated } = props;
  return (
    <form className="login--form">
      <h3 className="register--title">Login</h3>
      <input
        type="text"
        placeholder="Username"
        className="form-input-element"
        name="username"
        onChange={handleLogin}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-input-element"
        name="password"
        onChange={handleLogin}
      />
      <Button buttonName={"Login"} isUserAuthenticated={isUserAuthenticated} />
    </form>
  );
}
