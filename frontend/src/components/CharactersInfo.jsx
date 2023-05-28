import React from "react";

import ImageCard from "./ImageCard";
import "../styles/charactersinfo.css";

export default function CharactersInfo(props) {
  const { charactersImages, charactersDetails } = props;

  const combinedArray = charactersDetails.map((character, index) => {
    const image = charactersImages[index];
    return { ...character, image: image ? image.main_url : "" };
  });

  return (
    <section>
      <div className="images--container">
        {combinedArray.map((character, index) => {
          return (
            <div className="card--container">
              <h3 key={character.name}>{character.name}</h3>
              <ImageCard
                main_url={character.image}
                key={index + 1}
                alt={character.name}
              />
              <h5>Description:</h5> <p>{character.description}</p>
              <h5>Element:</h5> <p>{character.element}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
