import React from "react";

import "../styles/imagecard.css";

export default function ImageCard(props) {
  const { main_url, index } = props;
  return <img key={index + 1} className="character--card" src={main_url} />;
}
