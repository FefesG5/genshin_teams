import React from "react";

import ImageCard from "./ImageCard";
import "../styles/charactersinfo.css";

export default function CharactersInfo(props) {
  const { charactersImages } = props;
  return (
    <section>
      <div className="images--container">
        {charactersImages.map((image, index) => {
          return <ImageCard main_url={image.main_url} key={index} alr="" />;
        })}
      </div>
    </section>
  );
}
