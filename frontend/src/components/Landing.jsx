import React from "react";
import "../styles/landing.css";
import Windblume from "../images/Windblume.jpg";

export default function Landing() {
  return (
    <section className="landing--container">
      <img src={Windblume} alt="" />
    </section>
  );
}
