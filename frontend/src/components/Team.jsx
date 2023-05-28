import React from "react";

export default function Team(props) {
  const { charactersIcons, charactersDetails } = props;
  return (
    <div className="images--container">
      {charactersIcons.map((icon, index) => {
        return <img src={icon.icon_url} key={index + 1} />;
      })}
    </div>
  );
}
