import React from "react";

import "../styles/header.css";

// Font Awesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const {
    handleHomeActive,
    handleLoginActive,
    handleCharactersActive,
    handleTeamActive,
  } = props;
  return (
    <header className="header--banner">
      <FontAwesomeIcon icon={faDiceD20} className="dice-icon-logo" />
      <ul className="navigation--banner">
        <li onClick={handleHomeActive}>HOME</li>
        <li onClick={handleCharactersActive}>CHARACTERS</li>
        <li onClick={handleTeamActive}>TEAMS</li>
        <li onClick={handleLoginActive}>LOGIN</li>
      </ul>
    </header>
  );
}
