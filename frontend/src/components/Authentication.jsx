import React from "react";

import Button from "./Button";
import Login from "./Login";
import "../styles/authentication.css";

export default function Authentication(props) {
  const {
    registrationData,
    handleRegistration,
    handleSubmitRegistration,
    loginData,
    handleLogin,
  } = props;
  console.log(registrationData);
  return (
    <>
      <form className="registeration--form" onSubmit={handleSubmitRegistration}>
        <h3 className="register--title">Register</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-input-element"
          name="username"
          onChange={handleRegistration}
          value={registrationData.username}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input-element"
          name="email"
          onChange={handleRegistration}
          value={registrationData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input-element"
          name="password"
          onChange={handleRegistration}
          value={registrationData.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-input-element"
          name="confirmPassword"
          onChange={handleRegistration}
          value={registrationData.confirmPassword}
        />
        <Button buttonName={"Register"} />
      </form>
      <Login loginData={loginData} handleLogin={handleLogin} />
    </>
  );
}
