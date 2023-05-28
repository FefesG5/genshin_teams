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
            <>
              <h3 key={character.name}>{character.name}</h3>
              <ImageCard
                main_url={character.image}
                key={index + 1}
                alt={character.name}
              />
              <h5>description:</h5> <p>{character.description}</p>
              <h5>element:</h5> <p>{character.element}</p>
            </>
          );
        })}
      </div>
    </section>
  );
}
