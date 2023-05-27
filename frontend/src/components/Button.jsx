import React from "react";
import "../styles/button.css";

export default function Button(props) {
  const { handleLoginActive } = props;
  return (
    <button onClick={handleLoginActive} className="button-large">
      Login
    </button>
  );
}
