import React from "react";
import "../styles/button.css";

export default function Button(props) {
  const { handleLoginActive, buttonName, isUserAuthenticated } = props;

  return (
    <>
      {isUserAuthenticated ? (
        <button className="button-large">Logout</button>
      ) : (
        <button onClick={handleLoginActive} className="button-large">
          {buttonName}
        </button>
      )}
    </>
  );
}
